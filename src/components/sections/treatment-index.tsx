import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ImageSlot } from "@/components/ui/image-slot";

interface TreatmentCategory {
  slug: string;
  title: string;
  description: string;
  /** Treatment count for the chapter label. */
  treatmentCount: number;
  /** Path to category photograph. */
  imageSrc: string;
  /** Alt text for the image. */
  imageAlt: string;
}

interface TreatmentIndexProps {
  categories: TreatmentCategory[];
}

const chapters = ["01", "02", "03"];

/**
 * Section 4: Treatment Index (numbered chapters)
 * Editorial discovery spine — full-width numbered rows with hairline
 * dividers linking to on-page sections. No cards, no borders around tiles.
 */
export function TreatmentIndex({ categories }: TreatmentIndexProps) {
  return (
    <section
      id="index"
      className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-32 xl:py-36"
    >
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        <p className="font-aesthetic text-sm italic text-clay-600">
          What we offer
        </p>

        <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
            Treatments
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-600">
            Explore aesthetic treatments by category. Each chapter covers the
            full range of procedures offered.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {categories.map((cat, i) => (
            <li key={cat.slug}>
              <Link
                href={`#${cat.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 py-8 transition-colors hover:bg-paper-deep sm:grid-cols-[auto_1fr_auto_auto] sm:gap-x-8 lg:py-10"
                aria-label={`${cat.title}: ${cat.description}`}
              >
                <span
                  aria-hidden="true"
                  className="font-aesthetic text-3xl italic text-clay-500 sm:text-5xl"
                >
                  {chapters[i] ?? ""}
                </span>

                <span className="flex flex-col gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                    {cat.title}
                  </span>
                  <span className="max-w-xl text-sm leading-relaxed text-ink-600 sm:text-base">
                    {cat.description}
                  </span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
                    {cat.treatmentCount > 0
                      ? `${cat.treatmentCount} treatment${
                          cat.treatmentCount === 1 ? "" : "s"
                        }`
                      : "Details to be confirmed"}
                  </span>
                </span>

                <div className="hidden sm:block">
                  <ImageSlot
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    label={cat.title}
                    className="h-28 w-36"
                  />
                </div>

                <span
                  aria-hidden="true"
                  className="justify-self-end text-clay-600 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <ArrowUpRight className="size-6" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
