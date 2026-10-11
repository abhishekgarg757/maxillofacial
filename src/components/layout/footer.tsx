import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/layout/social-icon";
import { site, WHATSAPP_DEFAULT_MESSAGE } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";

/** Format "HH:MM" 24h as a 12-hour display string (e.g. "10:00 AM"). */
function formatHour(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return hhmm;
  const period = h >= 12 ? "PM" : "AM";
  const display = ((h + 11) % 12) + 1;
  return `${display}:${m.toString().padStart(2, "0")} ${period}`;
}

const proceduresQuickLinks = [
  { label: "Jaw Reconstruction", href: "/procedures/jaw-reconstruction" },
  { label: "Facial Trauma Surgery", href: "/procedures/facial-trauma-surgery" },
  { label: "Orthognathic Surgery", href: "/procedures/orthognathic-surgery" },
  { label: "Dental Implants", href: "/procedures/dental-implants" },
  { label: "Jaw Joint (TMJ) Surgery", href: "/procedures/jaw-joint-surgery" },
  { label: "Corrective Jaw Surgery", href: "/procedures/corrective-jaw-surgery" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-clay-950 text-clay-100">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-clay-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-clay-400/10 blur-3xl" />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + intro */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-clay-500 to-clay-700 font-display text-lg font-extrabold text-white">
                SG
              </span>
              <div className="leading-tight">
                <p className="font-display text-base font-bold text-white">
                  {site.doctorName}
                </p>
                <p className="text-xs text-ink-100">{site.credentials}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-100">
              Evidence-based oral & maxillofacial surgery in Delhi — restoring
              function, comfort and confidence with a calm, patient-first
              approach.
            </p>
            <div className="flex gap-3">
              {site.socials.map((s) => {
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-xl border border-clay-200 bg-clay-50 text-clay-600 transition-colors hover:border-clay-400/40 hover:bg-clay-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
                  >
                    <SocialIcon name={s.icon} className="size-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <FooterCol title="Explore">
            {site.nav.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Procedures */}
          <FooterCol title="Procedures">
            {proceduresQuickLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Visit / Contact">
            <li className="flex items-start gap-3 text-sm text-ink-100">
              <MapPin className="mt-0.5 size-4.5 shrink-0 text-clay-300" />
              <span>
                {site.address.line1}, {site.address.line2}
                <br />
                {site.address.city}, {site.address.state} {site.address.postalCode}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                className="flex items-center gap-3 text-sm text-ink-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
              >
                <Phone className="size-4.5 shrink-0 text-clay-300" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-ink-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
              >
                <Mail className="size-4.5 shrink-0 text-clay-300" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl(site.whatsappDigits, WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ink-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
              >
                <MessageCircle className="size-4.5 shrink-0 text-clay-300" />
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-ink-100">
              <Clock className="mt-0.5 size-4.5 shrink-0 text-clay-300" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.schemaDay} className="block">
                    <span className="text-ink-100">{h.day}:</span> {formatHour(h.opens)} – {formatHour(h.closes)}
                  </span>
                ))}
                <span className="mt-1 block text-ink-200">Sunday: closed</span>
              </span>
            </li>
          </FooterCol>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 rounded-2xl border border-clay-200 bg-clay-50 p-5 text-clay-700 leading-relaxed">
          <strong className="font-semibold text-clay-800">
            Medical disclaimer:
          </strong>{" "}
          The information on this website is for general education only and is not
          a substitute for professional medical advice, diagnosis or treatment.
          Outcomes vary between patients. Always consult a qualified oral &
          maxillofacial surgeon about your specific condition. In an emergency,
          call your local emergency number immediately.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-clay-200 pt-8 text-xs text-ink-200 sm:flex-row">
          <p>
            © {year} {site.doctorName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="hover:text-clay-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-clay-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
            >
              Terms
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-clay-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-clay-200">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ink-100 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-clay-950"
      >
        {children}
      </Link>
    </li>
  );
}