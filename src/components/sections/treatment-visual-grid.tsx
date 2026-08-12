import Link from "next/link";

import { cn } from "@/lib/utils";
import { ImageSlot } from "@/components/ui/image-slot";

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
 * Section 5: Facial Treatments — Visual Navigation
 * Asymmetric masonry grid where photography IS navigation. Each tile links to
 * the `#facials` chapter (the section itself), keeping discovery on-page.
 * Tiles use editorial image slots; title chips overlay so the treatment name
 * reads on any image.
 *
 * Desktop: asymmetric grid mixing standard, wide, and tall tiles.
 * Mobile: 2-column compact grid.
 */
export function TreatmentVisualGrid({ treatments }: TreatmentVisualGridProps) {
  // Explicit spans create editorial asymmetry. Seven portrait tiles with a
  // single 2-column lead tile fill exactly two full 4-column rows (a tall
  // tile would leave the 7th orphaned in a lopsided final row).
  const layout = [
    { colSpan: 2 as const, rowSpan: 1 }, // Hydrafacial — prominent lead
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
  ];

  return (
    <section
      id="facials"
      className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-32 xl:py-36"
    >
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        <p className="font-aesthetic text-sm italic text-clay-600">
          Chapter 01 · Facials &amp; Skin
        </p>

        <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
            Facials &amp; Skin Rejuvenation
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-600">
            A visual directory of facial treatments — from deep hydration to
            texture refinement, each tailored to your skin during consultation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {treatments.map((t, i) => {
            const span = layout[i] ?? { colSpan: 1, rowSpan: 1 };
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
        <p className="mt-8 pt-6 text-center text-xs text-ink-600 sm:hidden">
          All treatments:{" "}
          {treatments.map((t, i) => (
            <span key={t.slug}>
              {i > 0 && <span aria-hidden="true">, </span>}
              <Link
                href="#facials"
                className="text-clay-600 underline decoration-clay-300 underline-offset-2 hover:text-clay-700"
              >
                {t.title}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function TreatmentTile({
  title,
  imageSrc,
  imageAlt,
  colSpan = 1,
  rowSpan = 1,
}: TreatmentTile & { colSpan?: number; rowSpan?: number }) {
  return (
    <Link
      href="#facials"
      className={cn(
        "group relative block",
        colSpan > 1 && "lg:col-span-2",
        rowSpan > 1 && "lg:row-span-2",
      )}
      aria-label={`${title} — part of Facials & Skin treatments`}
    >
      <ImageSlot
        src={imageSrc}
        alt={imageAlt}
        label=""
        ratio="4 / 5"
        className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Title chip — readable over any image */}
      <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <span className="inline-block bg-paper/90 px-3 py-1.5 text-xs font-semibold text-ink-900 backdrop-blur-sm transition-colors group-hover:text-clay-700">
          {title}
        </span>
      </span>
    </Link>
  );
}
