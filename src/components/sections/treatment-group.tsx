import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/photo-placeholder";

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
 * Section 7: Regenerative Treatments — Grouped Presentation
 * Three equal-width tiles showing grouped treatments as a cohesive set.
 * Symmetric layout signals shared DNA (unlike asymmetry in injectables section).
 */
export function TreatmentGroup({ title, description, treatments }: TreatmentGroupProps) {
  return (
    <section className="py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Heading */}
        <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>

        {/* Equal-width treatment tiles */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({ slug, title, imageSrc, imageAlt }: TreatmentGroupItem) {
  const showImage = !!imageSrc && !imageSrc.startsWith("/placeholder");
  const isPlaceholder = imageSrc && imageSrc.startsWith("/placeholder");

  return (
    <Link
      href={`/aesthetic/regenerative#${slug}`}
      className="group block overflow-hidden rounded-sm transition-shadow duration-300 hover:shadow-lg"
      aria-label={`${title} — click to learn more`}
    >
      {showImage ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={imageSrc}
          alt={imageAlt ?? ""}
          className="h-[240px] w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]"
          style={{ aspectRatio: "4 / 5" }}
        />
      ) : isPlaceholder ? (
        <PhotoPlaceholder
          label={title}
          note={`Treatment photo — ${title}`}
          ratio="4 / 5"
          className="h-[240px] w-full bg-ink-900"
        />
      ) : null}

      {/* Title below image */}
      <div className="bg-background p-5">
        <span className="text-sm font-semibold text-ink-900 group-hover:text-brand-700">
          {title}
        </span>
        <span className="mt-1 inline-block text-xs text-brand-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
