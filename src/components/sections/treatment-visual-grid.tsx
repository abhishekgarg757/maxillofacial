import Link from "next/link";

import { cn } from "@/lib/utils";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

interface TreatmentTile {
  slug: string;
  title: string;
  /** Path to treatment photograph. */
  imageSrc: string;
  /** Alt text for accessibility. */
  imageAlt: string;
  /** Grid column span — wider tiles get more visual weight. Default 1. */
  colSpan?: number;
}

interface TreatmentVisualGridProps {
  /** Treatments to display in the masonry-style grid. */
  treatments: TreatmentTile[];
}

/**
 * Section 5: Facial Treatments Visual Navigation (CRITICAL)
 * Masonry-style asymmetric image grid where photography IS navigation.
 * Each tile is a clickable link to the treatment detail.
 * Hover states confirm interactivity without breaking the premium feel.
 *
 * Desktop: asymmetric grid mixing standard, wide, and tall tiles.
 * Mobile: full-width vertical stack, portrait-oriented.
 */
export function TreatmentVisualGrid({ treatments }: TreatmentVisualGridProps) {
  // Define explicit spans for each treatment to create editorial asymmetry
  const layout = [
    { colSpan: 2 as const, rowSpan: 1 }, // Hydrafacial — prominent
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },        // Radiance Revival — tall focal point
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Section heading — left-aligned, minimal */}
        <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:max-w-xl">
          Facials &amp; Skin Rejuvenation
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          Click any treatment below to learn more about the procedure, what to expect, and whether it suits your skin.
        </p>

        {/* Masonry grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {treatments.map((t, i) => {
            const span = layout[i];
            return (
              <TreatmentTile
                key={t.slug}
                {...t}
                colSpan={span.colSpan}
                rowSpan={span.rowSpan}
              />
            );
          })}
        </div>

        {/* Compact text index — quick scan of all treatments on mobile */}
        <p className="mt-8 pt-6 text-center text-xs text-muted-foreground sm:hidden">
          All treatments:{" "}
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/aesthetic/facials#${t.slug}`}
              className="inline-flex items-center gap-1 text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-900"
            >
              {t.title}
              {treatments.indexOf(t) < treatments.length - 1 ? "," : ""}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}

function TreatmentTile({
  slug,
  title,
  imageSrc,
  imageAlt,
  colSpan = 1,
  rowSpan = 1,
}: TreatmentTile & { colSpan?: number; rowSpan?: number }) {
  const isPlaceholder = imageSrc.startsWith("/placeholder") || !imageSrc;

  // Build CSS grid span classes based on config
  const gridClasses = `col-span-${colSpan} row-span-${rowSpan}`;

  return (
    <Link
      href={`/aesthetic/facials#${slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-sm",
        colSpan > 1 && "lg:col-span-2",
        rowSpan > 1 && "lg:row-span-2",
        gridClasses,
      )}
      aria-label={`${title} — click to learn more`}
    >
      {isPlaceholder ? (
        <PhotoPlaceholder
          label={title}
          note={`Treatment photo — ${title}`}
          ratio="4 / 5"
          className="h-full w-full"
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
          style={{ aspectRatio: "4 / 5" }}
        />
      )}

      {/* Bottom gradient bar for text contrast */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/70 to-transparent" />

      {/* Title overlaid at bottom-left */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="text-sm font-semibold text-white">{title}</span>
      </div>

      {/* Hover indicator — fades in arrow */}
      <div className="pointer-events-none absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <svg
          className="size-5 text-white/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
