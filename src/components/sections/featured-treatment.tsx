import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImageSlot } from "@/components/ui/image-slot";
import { cn } from "@/lib/utils";

interface QuickFact {
  label: string;
  value: string;
}

interface FeaturedTreatmentProps {
  /** Editorial numeral, e.g. "01". */
  num?: string;
  /** Treatment display title. */
  title: React.ReactNode;
  /** Brief subtitle or tagline. */
  subtitle?: string;
  /** Narrative paragraphs describing the treatment. */
  narrative: { text: string }[];
  /** Compact quick-fact list. */
  quickFacts?: QuickFact[];
  /** Path to treatment photograph. */
  imageSrc?: string;
  /** Alt text for accessibility. */
  imageAlt?: string;
  /** Which side the image appears on. Alternates per row. */
  imageSide?: "left" | "right";
  /** Whether this uses the deeper warm background for visual punctuation. */
  dark?: boolean;
  /** Primary CTA destination. Defaults to /contact. */
  ctaHref?: string;
  /** CTA button label. Defaults to "Book a consultation". */
  ctaLabel?: string;
}

/**
 * Section 6: Featured Treatments (Injectables)
 * Editorial spreads — oversized serif numeral, portrait image slot, narrative
 * prose, and quick facts as a hairline table. Alternating image/text order.
 * Rendered inside the page's "Injectables & Contouring" chapter section.
 */
export function FeaturedTreatment({
  num,
  title,
  subtitle,
  narrative,
  quickFacts,
  imageSrc,
  imageAlt,
  imageSide = "left",
  dark = false,
  ctaHref = "/contact",
  ctaLabel = "Book a consultation",
}: FeaturedTreatmentProps) {
  const isPlaceholder = imageSrc && imageSrc.startsWith("/placeholder");

  return (
    <div className={cn("bg-paper py-16 sm:py-20 lg:py-24", dark && "bg-paper-deep")}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className={cn(imageSide === "right" ? "lg:order-2" : "")}>
            <ImageSlot
              src={imageSrc}
              alt={imageAlt ?? ""}
              label={
                isPlaceholder
                  ? typeof title === "string"
                    ? title
                    : undefined
                  : undefined
              }
              ratio="4 / 5"
            />
          </div>

          {/* Content */}
          <div
            className={cn(
              "flex flex-col items-start",
              imageSide === "right" ? "lg:order-1" : "",
            )}
          >
            {num && (
              <span
                aria-hidden="true"
                className="font-aesthetic text-5xl italic text-clay-500"
              >
                {num}
              </span>
            )}

            {subtitle && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
                {subtitle}
              </p>
            )}

            <h3 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              {title}
            </h3>

            <div className="mt-6 space-y-4">
              {narrative.map((p, i) => (
                <p
                  key={i}
                  className="max-w-xl text-pretty text-base leading-relaxed text-ink-600"
                >
                  {p.text}
                </p>
              ))}
            </div>

            {quickFacts && quickFacts.length > 0 && (
              <dl className="mt-8 w-full max-w-xl border-t border-ink-900/10">
                {quickFacts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-6 border-b border-ink-900/10 py-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
                      {f.label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-ink-800">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <Button asChild variant="clay" size="lg" className="mt-9">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
