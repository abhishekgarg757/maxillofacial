import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { site, WHATSAPP_DEFAULT_MESSAGE } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book a consultation with Dr. Saloni Gupta or get in touch — by form, phone, email or WhatsApp. Oral & maxillofacial surgery in New Delhi.",
  alternates: { canonical: "/contact" },
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapQuery,
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Contact", url: `${site.url}/contact` },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Contact & book"
        title="Let's talk about your care"
        description="Book a consultation or send us a question. We'll respond promptly with clear, honest guidance — no pressure, ever."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Info */}
          <Reveal direction="left">
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm">
                <h2 className="font-display text-lg font-bold text-ink-900">
                  Get in touch
                </h2>
                <ul className="mt-5 flex flex-col gap-4">
                  <ContactRow
                    icon={<Phone className="size-5" />}
                    label="Phone"
                    href={`tel:${site.phoneE164}`}
                    value={site.phoneDisplay}
                  />
                  <ContactRow
                    icon={<Mail className="size-5" />}
                    label="Email"
                    href={`mailto:${site.email}`}
                    value={site.email}
                  />
                  <ContactRow
                    icon={<MessageCircle className="size-5" />}
                    label="WhatsApp"
                    href={whatsappUrl(
                      site.whatsappDigits,
                      WHATSAPP_DEFAULT_MESSAGE,
                    )}
                    value="Chat with the clinic"
                    external
                  />
                  <li className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <MapPin className="size-5" />
                    </span>
                    <div className="text-sm">
                      <p className="font-medium text-ink-900">Clinic</p>
                      <p className="text-muted-foreground">
                        {site.address.line1}, {site.address.line2}
                        <br />
                        {site.address.city}, {site.address.state}{" "}
                        {site.address.postalCode}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
                  <Clock className="size-5 text-brand-600" />
                  Opening hours
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between gap-4 border-b border-ink-50 pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-ink-700">{h.day}</span>
                      <span className="font-medium text-ink-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-ink-100 shadow-sm">
                <iframe
                  title="Clinic location map"
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  value,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
        {icon}
      </span>
      <div className="text-sm">
        <p className="font-medium text-ink-900">{label}</p>
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-muted-foreground transition-colors hover:text-brand-700"
        >
          {value}
        </a>
      </div>
    </li>
  );
}
