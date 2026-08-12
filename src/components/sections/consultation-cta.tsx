import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";

/**
 * Section 10: Final Conversion Band
 * Editorial closing band on warm paper with a hairline keyline and three
 * contact pathways. No fabricated decoration — text + CTAs only.
 */
interface ConsultationCTAProps {
  /** Headline text. Defaults to a generic prompt. */
  headline?: string;
  /** Subheadline supporting sentence. */
  subheadline?: string;
}

export function ConsultationCTA({
  headline = "Ready to explore your options?",
  subheadline = "Book a consultation with Dr. Gupta for a personalised assessment of your aesthetic goals.",
}: ConsultationCTAProps) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Warm paper band */}
        <div className="relative overflow-hidden rounded-sm border border-ink-900/10 bg-paper-deep px-6 py-14 text-center sm:px-14 sm:py-16">
          {/* Subtle clay wash — no blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-clay-500/10 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-5">
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl md:text-[3rem]">
              {headline}
            </h2>

            <p className="text-base leading-relaxed text-ink-600 sm:text-lg">
              {subheadline}
            </p>

            {/* Primary CTA button */}
            <Button asChild variant="clay" size="lg" className="mt-2">
              <Link href="/contact">
                <CalendarCheck />
                Book a consultation
              </Link>
            </Button>

            {/* Secondary contact pathways */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <a
                href={whatsappUrl(
                  site.whatsappDigits,
                  "Hello, I'd like to know more about your aesthetic treatments.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-600 transition-colors hover:text-clay-700"
              >
                <MessageCircle className="size-4 text-clay-600" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="inline-flex items-center gap-2 text-ink-600 transition-colors hover:text-clay-700"
              >
                <Phone className="size-4 text-clay-600" />
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
