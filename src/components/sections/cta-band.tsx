import Link from "next/link";
import { ArrowRight, CalendarCheck, Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { site, WHATSAPP_DEFAULT_MESSAGE } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";

/** Bold closing call-to-action band with quick contact options. */
export function CtaBand() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950 px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
            <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 size-80 rounded-full bg-accent-600/20 blur-3xl" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to take the first step?
              </h2>
              <p className="text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
                Book a consultation with Dr. Saloni Gupta, or reach out with your
                questions. We&apos;ll listen carefully and guide you with clear,
                honest advice.
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="accent" size="lg">
                  <Link href="/contact">
                    <CalendarCheck />
                    Book a consultation
                  </Link>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <a
                    href={whatsappUrl(site.whatsappDigits, WHATSAPP_DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle />
                    WhatsApp us
                  </a>
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
                <a
                  href={`tel:${site.phoneE164}`}
                  className="inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
                >
                  <Phone className="size-4 text-brand-400" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-brand-400" />
                  {site.email}
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-300 transition-colors hover:text-brand-200"
                >
                  Meet Dr. Gupta
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
