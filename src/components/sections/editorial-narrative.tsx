import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

interface Paragraph {
  text: string;
}

interface EditorialNarrativeProps {
  /** Left-aligned editorial heading. */
  title: React.ReactNode;
  /** Body paragraphs. */
  paragraphs: Paragraph[];
  /** Doctor/treatment photograph. */
  imageSrc?: string;
  /** Alt text for the image. */
  imageAlt?: string;
  /** Whether the image appears on the right or left. */
  imagePosition?: "right" | "left";
}

/**
 * Section 3: Editorial Narrative
 * Asymmetric two-column layout bridging surgical authority to aesthetic relevance.
 * One column is narrative prose; the other is photography.
 * Breaks from the existing pattern of centered headings → uniform grids.
 */
export function EditorialNarrative({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: EditorialNarrativeProps) {
  const showImage = !!imageSrc;

  return (
    <section className="py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Heading — left-aligned, not centred */}
        <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:max-w-xl">
          {title}
        </h2>

        <div
          className={
            showImage
              ? `mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12`
              : ""
          }
        >
          {/* Prose column */}
          <div className={showImage ? "lg:sticky lg:top-28" : ""}>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {p.text}
              </p>
            ))}
          </div>

          {/* Image column — only when image exists */}
          {showImage && (
            <div className={imagePosition === "left" ? "order-first lg:order-none" : ""}>
              {imageSrc.startsWith("/placeholder") || !imageSrc ? (
                <PhotoPlaceholder
                  label={imageAlt ? undefined : "Photography required"}
                  note="Candid doctor photograph for philosophy section"
                  ratio="4 / 5"
                  className="w-full rounded-sm"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  className="w-full rounded-sm object-cover"
                  style={{ aspectRatio: "4 / 5" }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
