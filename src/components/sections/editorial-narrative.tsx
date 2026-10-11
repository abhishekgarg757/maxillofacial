import { ImageSlot } from "@/components/ui/image-slot";

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
 * Asymmetric editorial spread — narrative prose on one side, a portrait image
 * slot with caption on the other. Serif-italic eyebrow sets the tone.
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
    <section className="bg-paper py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Eyebrow + heading */}
        <p className="font-aesthetic text-sm italic text-clay-600">
          The philosophy
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <div
          className={
            showImage
              ? "mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
              : "mt-8"
          }
        >
          {/* Prose column */}
          <div className={showImage ? "lg:sticky lg:top-28" : ""}>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-pretty text-base leading-relaxed text-ink-600 sm:text-lg"
                >
                  {p.text}
                </p>
              ))}
            </div>
          </div>

          {/* Image column — only when image exists */}
          {showImage && (
            <div
              className={
                imagePosition === "left" ? "lg:order-first" : ""
              }
            >
              <ImageSlot
                src={imageSrc}
                alt={imageAlt ?? ""}
                ratio="4 / 5"
              />
              {imageAlt && (
                <p className="mt-3 font-aesthetic text-xs italic text-ink-600">
                  {imageAlt}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
