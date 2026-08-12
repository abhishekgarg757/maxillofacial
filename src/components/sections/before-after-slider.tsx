"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { MoveHorizontal } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import type { BeforeAfterCase } from "@/lib/types";

interface BeforeAfterSliderProps {
  cases: BeforeAfterCase[];
  /** Show the case selector thumbnails. */
  selectable?: boolean;
  /** Show the caption line under the slider. */
  showCaption?: boolean;
  className?: string;
}

// No-op subscription so useSyncExternalStore can detect the client-rendered
// snapshot without a setState-in-effect (hydration-safe, lint-clean).
const emptySubscribe = () => () => {};

export function BeforeAfterSlider({
  cases,
  selectable = true,
  showCaption = true,
  className,
}: BeforeAfterSliderProps) {
  const [active, setActive] = React.useState(0);
  // react-compare-slider injects inline styles that differ between SSR and
  // client, causing hydration warnings. Detect the client-rendered snapshot
  // via useSyncExternalStore and show a matching static placeholder first
  // (same aspect ratio) to avoid layout shift.
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const current = cases[active];

  if (!current) return null;

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <figure className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-2xl shadow-ink-950/40">
        {mounted ? (
          <ReactCompareSlider
            className="aspect-[4/3] w-full sm:aspect-[16/10]"
            itemOne={
              <ReactCompareSliderImage
                src={current.beforeSrc}
                alt={current.beforeAlt}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={current.afterSrc}
                alt={current.afterAlt}
              />
            }
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  border: 0,
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.85)",
                  color: "#0d9488",
                  boxShadow: "0 8px 30px rgba(2,8,23,0.35)",
                }}
                linesStyle={{ color: "rgba(255,255,255,0.9)", width: 3 }}
              />
            }
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current.afterSrc}
            alt={current.afterAlt}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
          />
        )}
        {/* Drag hint */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink-950/70 px-4 py-2 text-xs font-medium text-white backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
          <MoveHorizontal className="size-4" />
          Drag to compare
        </div>
      </figure>

      {showCaption ? (
        <figcaption className="text-sm text-ink-600">
          <span className="font-semibold text-ink-800">{current.title}.</span>{" "}
          {current.note}
        </figcaption>
      ) : null}

      {selectable && cases.length > 1 ? (
        <div className="flex flex-wrap gap-2.5">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                i === active
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-ink-200 text-ink-600 hover:border-brand-300 hover:text-ink-900",
              )}
            >
              {c.title}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
