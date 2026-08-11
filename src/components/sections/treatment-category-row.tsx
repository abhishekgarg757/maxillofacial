import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

interface TreatmentCategory {
  slug: string;
  title: string;
  description: string;
  /** Treatment count for visual weighting. */
  treatmentCount: number;
  /** Path to category photograph. */
  imageSrc: string;
  /** Alt text for the image. */
  imageAlt: string;
}

interface TreatmentCategoryRowProps {
  categories: TreatmentCategory[];
}

/**
 * Section 4: Treatment Categories Overview
 * Three photographic tiles serving as gateway navigation into aesthetic sub-pages.
 * Unequal widths based on treatment count / importance.
 * No cards, no borders — just full-bleed imagery with overlaid titles.
 */
export function TreatmentCategoryRow({
  categories,
}: TreatmentCategoryRowProps) {
  // Visual weights: facials gets widest (7 treatments), injectables middle, regenerative narrowest
  const weights = [1.5, 1, 0.8] as const;

  return (
    <section
      id="treatments"
      className="py-20 sm:py-28 lg:py-32 xl:py-36"
    >
      {/* Editorial heading — left-aligned */}
      <div className="mx-auto mb-12 px-5 sm:px-8 lg:max-w-7xl">
        <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:max-w-xl">
          Treatments
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          Explore aesthetic treatments by category. Each page covers the full range of procedures offered.
        </p>
      </div>

      <div className="mx-auto grid w-full gap-3 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr_0.8fr] lg:gap-4 lg:max-w-7xl">
        {categories.map((cat, i) => (
          <TreatmentZone key={cat.slug} {...cat} weight={weights[i]} />
        ))}
      </div>
    </section>
  );
}

function TreatmentZone({
  slug,
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  weight: number;
}) {
  const isPlaceholder = imageSrc.startsWith("/placeholder") || !imageSrc;

  return (
    <Link
      href={`/aesthetic/${slug}`}
      className="group relative block overflow-hidden rounded-sm"
      aria-label={`${title}: ${description}. Click to explore`}
    >
      {isPlaceholder ? (
        <PhotoPlaceholder
          label={title}
          note={`Treatment category photo — ${title}`}
          ratio="4 / 5"
          className="h-full min-h-[280px]"
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full min-h-[280px] w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ aspectRatio: "4 / 5" }}
        />
      )}

      {/* Gradient overlay bottom-only for text contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/80 to-transparent" />

      {/* Title overlaid at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-brand-300 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
          {title}
        </span>
      </div>
    </Link>
  );
}
