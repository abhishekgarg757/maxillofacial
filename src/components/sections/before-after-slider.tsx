"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
  type ReactCompareSliderHandleProps,
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
  /**
   * Render the before/after images with high fetch priority.
   * Set `true` only for above-the-fold hero placements — preloading
   * multiple cases is wasteful.
   */
  priority?: boolean;
  className?: string;
}

// No-op subscription so useSyncExternalStore can detect the client-rendered
// snapshot without a setState-in-effect (hydration-safe, lint-clean).
const emptySubscribe = () => () => {};

/** Number of percentage points per arrow-key press on the slider. */
const KEYBOARD_STEP = 5;


export function BeforeAfterSlider({
  cases,
  selectable = true,
  showCaption = true,
  priority = false,
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

  // The `ReactCompareSlider` is uncontrolled and exposes arrow-key support
  // through its own `keyboardIncrement` prop (focusable handle). The wrapper
  // group only exists to give the slider a programmatic name for screen
  // readers and a visible focus ring; we don't intercept keys here.

  const handleProps: ReactCompareSliderHandleProps = {
    buttonStyle: {
      border: 0,
      backdropFilter: "blur(8px)",
      background: "rgba(255,255,255,0.85)",
      color: "#0d9488",
      boxShadow: "0 8px 30px rgba(2,8,23,0.35)",
    },
    linesStyle: { color: "rgba(255,255,255,0.9)", width: 3 },
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <figure
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-2xl shadow-ink-950/40"
        aria-label={`Before and after: ${current.title}`}
      >
        <div
          role="group"
          aria-label="Before and after comparison slider. Focus the handle and use left and right arrow keys to move the divider."
          tabIndex={-1}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
        >
          {/*
           * Keyed on `current.id` so the slider remounts (and resets to its
           * defaultPosition) whenever the user switches to a different case.
           */}
          {mounted ? (
            <ReactCompareSlider
              key={current.id}
              defaultPosition={50}
              keyboardIncrement={KEYBOARD_STEP}
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
              itemOne={
                <ReactCompareSliderImage
                  src={current.beforeSrc}
                  alt={current.beforeAlt}
                  {...(priority ? { fetchPriority: "high" } : {})}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={current.afterSrc}
                  alt={current.afterAlt}
                  {...(priority ? { fetchPriority: "high" } : {})}
                />
              }
              handle={<ReactCompareSliderHandle {...handleProps} />}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={current.afterSrc}
              alt={current.afterAlt}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
            />
          )}
        </div>
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
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-ink-200 text-ink-600 hover:border-accent-soft hover:text-ink-900",
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
