import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";

/**
 * Section 10: Final Conversion Band
 * Minimal dark closing section with three contact pathways.
 * Stripped of all decoration — only text + CTAs remain.
 */
interface ConsultationCTaProps {
  /** Headline text. Defaults to a generic prompt. */
  headline?: string;
  /** Subheadline supporting sentence. */
  subheadline?: string;
}

export function ConsultationCTA({
  headline = "Ready to explore your options?",
  subheadline = "Book a consultation with Dr. Gupta for a personalised assessment of your aesthetic goals.",
}: ConsultationCTaProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Dark background band */}
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-center sm:px-14 sm:py-20">
          {/* Clean gradient accent — minimal, no blobs */}
          <div className="pointer-events-none absolute -left-32 top-[-40%] size-[28rem] rounded-full bg-brand-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-xl flex flex-col items-center gap-6">
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[3.25rem]">
              {headline}
            </h2>

            <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
              {subheadline}
            </p>

            {/* Primary CTA button */}
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">
                <CalendarCheck />
                Book a consultation
              </Link>
            </Button>

            {/* Secondary contact options */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <a
                href={whatsappUrl(site.whatsappDigits, "Hello, I'd like to know more about your aesthetic treatments.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                <MessageCircle className="size-4 text-brand-400" />
                Message on WhatsApp
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-brand-400" />
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
