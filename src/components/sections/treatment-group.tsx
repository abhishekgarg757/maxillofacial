import Link from "next/link";

import { ImageSlot } from "@/components/ui/image-slot";

interface TreatmentGroupItem {
  slug: string;
  title: string;
  /** Path to treatment photograph. */
  imageSrc?: string;
  /** Alt text for accessibility. */
  imageAlt?: string;
}

interface TreatmentGroupProps {
  /** Group title, e.g. "Regenerative Treatments" */
  title: string;
  /** Introductory paragraph explaining the group concept. */
  description: string;
  /** Individual treatments in the group. */
  treatments: TreatmentGroupItem[];
}

/**
 * Section 7: Regenerative Treatments — editorial chapter
 * Portrait tiles that link to in-page treatment anchors. If specific
 * treatments are not yet confirmed in content, shows an honest placeholder
 * instead of inventing offerings.
 */
export function TreatmentGroup({
  title,
  description,
  treatments,
}: TreatmentGroupProps) {
  return (
    <section
      id="regenerative"
      className="scroll-mt-24 bg-paper py-20 sm:py-28 lg:py-32 xl:py-36"
    >
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        <p className="font-aesthetic text-sm italic text-clay-600">
          Chapter 03 · Regenerative
        </p>

        <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-600">
            {description}
          </p>
        </div>

        {treatments.length > 0 ? (
          <ul className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link href={`#${t.slug}`} className="group block">
                  <ImageSlot
                    src={t.imageSrc}
                    alt={t.imageAlt ?? ""}
                    label={t.title}
                    ratio="4 / 5"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="mt-3 block text-lg font-bold text-ink-900 group-hover:text-clay-700">
                    {t.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-sm border border-dashed border-ink-900/20 bg-paper-deep p-8">
            <p className="max-w-2xl text-sm leading-relaxed text-ink-600">
              [CLINICAL REVIEW REQUIRED] — The specific regenerative treatments
              offered are being finalised by Dr. Gupta. Details will be added
              here once confirmed.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
