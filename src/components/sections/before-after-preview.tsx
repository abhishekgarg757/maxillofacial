import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import type { BeforeAfterCase } from "@/lib/types";

interface BeforeAfterPreviewProps {
  /** Featured case shown in the slider. */
  featuredCase: BeforeAfterCase;
  /** Additional cases shown as clickable thumbnails below. */
  additionalCases?: BeforeAfterCase[];
}

/**
 * Section 8: Before & After Preview
 * Shows a single wide before/after slider with thumbnail previews of
 * additional cases. Bridges visual proof to the full /before-after gallery.
 */
export function BeforeAfterPreview({
  featuredCase,
  additionalCases = [],
}: BeforeAfterPreviewProps) {
  return (
    <section className="py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        {/* Heading */}
        <h2 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
          Real Results
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Drag to compare before and after. Individual results vary — these illustrate the kind of change possible with modern aesthetic techniques.
        </p>

        {/* Featured slider */}
        <div className="mt-10">
          <BeforeAfterSlider
            cases={[featuredCase]}
            selectable={false}
            showCaption
            className="rounded-sm"
          />
        </div>

        {/* Thumbnails if additional cases exist */}
        {additionalCases.length > 0 && (
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {additionalCases.map((c) => (
              <button
                key={c.id}
                type="button"
                className="min-w-[120px] shrink-0 rounded border border-ink-200 bg-white p-2 text-xs text-muted-foreground transition-colors hover:border-brand-300 focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`View ${c.title}`}
              >
                {c.title}
              </button>
            ))}
          </div>
        )}

        {/* Link to full gallery */}
        <div className="mt-8 text-center">
          <a
            href="/before-after"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-900"
          >
            View full gallery
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
