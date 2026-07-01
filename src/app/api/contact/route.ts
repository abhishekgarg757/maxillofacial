import { contactSchema } from "@/lib/contact-schema";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  // Rate limit: 5 submissions / 10 minutes per IP.
  const ip = getClientIp(req.headers);
  const limited = rateLimit(`contact:${ip}`, 5, 10 * 60_000);
  if (!limited.success) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot triggered → silently accept and drop (don't tip off bots).
  if (data.company && data.company.length > 0) {
    return Response.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Clinic Website <onboarding@resend.dev>";

  // If email isn't configured yet, accept gracefully so the UX still works.
  // TODO: set RESEND_API_KEY and CONTACT_TO_EMAIL to enable delivery.
  if (!to || !apiKey) {
    console.warn(
      "[contact] Email not configured (missing RESEND_API_KEY/CONTACT_TO_EMAIL); message accepted but not delivered.",
    );
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const subject = `New enquiry${data.subject ? ` — ${data.subject}` : ""} from ${data.name}`;
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.subject ? `Interested in: ${data.subject}` : null,
      "",
      data.message,
    ].filter(Boolean);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error");
      return Response.json({ error: "Could not send message." }, { status: 502 });
    }

    return Response.json({ ok: true, delivered: true });
  } catch {
    console.error("[contact] Unexpected error sending email");
    return Response.json({ error: "Could not send message." }, { status: 500 });
  }
}
