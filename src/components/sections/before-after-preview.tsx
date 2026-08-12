import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
 * Single wide before/after slider framed in a warm paper inset with a hairline
 * keyline, plus thumbnail previews of additional cases. Bridges visual proof
 * to the full /before-after gallery.
 */
export function BeforeAfterPreview({
  featuredCase,
  additionalCases = [],
}: BeforeAfterPreviewProps) {
  return (
    <section className="bg-paper py-20 sm:py-28 lg:py-32 xl:py-36">
      <div className="mx-auto px-5 sm:px-8 lg:max-w-7xl">
        <p className="font-aesthetic text-sm italic text-clay-600">
          Evidence you can see
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-4xl md:text-5xl">
          Real Results
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
          Drag to compare before and after. Individual results vary — these
          illustrate the kind of change possible with modern aesthetic
          techniques.
        </p>

        {/* Featured slider — paper inset frame */}
        <div className="mt-10 rounded-sm border border-ink-900/10 bg-paper-deep p-2 sm:p-3">
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
              <span
                key={c.id}
                className="min-w-[120px] shrink-0 rounded-sm border border-ink-900/10 bg-paper-deep px-3 py-2 text-xs font-medium text-ink-600"
              >
                {c.title}
              </span>
            ))}
          </div>
        )}

        {/* Link to full gallery */}
        <div className="mt-8 text-center">
          <Link
            href="/before-after"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600 underline decoration-clay-300 underline-offset-4 transition-colors hover:text-clay-700"
          >
            View full gallery
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
