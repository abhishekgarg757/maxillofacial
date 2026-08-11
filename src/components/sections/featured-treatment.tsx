import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuickFact {
  label: string;
  value: string;
}

interface FeaturedTreatmentProps {
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
  /** Whether this uses a dark background section. */
  dark?: boolean;
  /** Primary CTA destination. Defaults to /contact. */
  ctaHref?: string;
  /** CTA button label. Defaults to "Book a consultation". */
  ctaLabel?: string;
}

/**
 * Section 6: Featured Treatments (Injectables)
 * Three asymmetric rows — each featuring one treatment with large imagery
 * and supporting text/quick-facts. Alternating image/text order.
 * Last row optionally uses a dark background for visual punctuation.
 *
 * Desktop: image + text in grid layout (asymmetric split).
 * Mobile: image first (full-width portrait), then text below.
 */
export function FeaturedTreatment({
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
  const showImage = !!imageSrc && !imageSrc.startsWith("/placeholder");
  const isPlaceholder = imageSrc && imageSrc.startsWith("/placeholder");

  return (
    <section
      className={cn(
        "py-20 sm:py-28 lg:py-32 xl:py-36",
        dark ? "bg-ink-950 text-white" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto px-5 sm:px-8 lg:max-w-7xl",
          dark ? "lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16" : "",
        )}
      >
        {/* Left column: Image */}
        {(showImage || isPlaceholder) && (
          <div
            className={cn(
              imageSide === "right" ? "order-2 lg:order-none" : "",
              showImage ? "lg:sticky lg:top-28" : "",
            )}
          >
            {isPlaceholder && !showImage ? (
              <PhotoPlaceholder
                label={typeof title === "string" ? title : undefined}
                note={`Treatment photo — ${typeof title === "string" ? title : ""}`}
                ratio="4 / 5"
                className="w-full rounded-sm bg-ink-900"
              />
            ) : showImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={imageSrc}
                alt={imageAlt ?? ""}
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: "4 / 5" }}
              />
            ) : null}
          </div>
        )}

        {/* Right column: Content */}
        <div
          className={cn(
            showImage || isPlaceholder ? "mt-8 lg:mt-0" : "",
            imageSide === "right" ? "lg:order-first" : "",
            showImage || isPlaceholder
              ? dark
                ? "lg:pt-8"
                : "lg:pt-8"
              : "lg:self-center",
          )}
        >
          {/* Title */}
          <h2
            className={cn(
              "text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl",
              dark ? "text-white" : "text-ink-900",
            )}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={cn(
                "mt-3 text-base leading-relaxed sm:text-lg",
                dark ? "text-ink-300" : "text-muted-foreground",
              )}
            >
              {subtitle}
            </p>
          )}

          {/* Narrative paragraphs */}
          <div className="mt-6 space-y-4">
            {narrative.map((p, i) => (
              <p
                key={i}
                className={cn(
                  "text-pretty leading-relaxed",
                  dark ? "text-ink-200" : "text-muted-foreground",
                )}
              >
                {p.text}
              </p>
            ))}
          </div>

          {/* Quick facts */}
          {quickFacts && quickFacts.length > 0 && (
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider",
                      dark ? "text-ink-400" : "text-ink-400",
                    )}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className={cn(
                      "mt-1 text-sm leading-snug",
                      dark ? "text-ink-200" : "text-ink-700",
                    )}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {/* CTA */}
          <div className="mt-8">
            <Button asChild variant="accent" size="lg">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
