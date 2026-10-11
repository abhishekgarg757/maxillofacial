"use client";

import dynamic from "next/dynamic";
import * as React from "react";

/**
 * Lazy wrapper for `BeforeAfterSlider`. The slider pulls in
 * `react-compare-slider` (~12KB) and is heavy for first paint; we defer
 * fetching the chunk until the wrapper is in the viewport.
 *
 * SSR is disabled because the slider uses `useSyncExternalStore` to detect
 * the client snapshot — server-rendering it would just render the static
 * `<img>` placeholder anyway, which we'd then hydrate-replace.
 */
const BeforeAfterSlider = dynamic(
  () =>
    import("@/components/sections/before-after-slider").then(
      (m) => m.BeforeAfterSlider,
    ),
  { ssr: false },
);

export function BeforeAfterSliderLazy(
  props: React.ComponentProps<typeof BeforeAfterSlider>,
) {
  const ref = React.useRef<HTMLDivElement>(null);
  // Track "have we ever been in the viewport" as an external store. Reading
  // it through useSyncExternalStore avoids the cascading-renders lint that a
  // useState-in-effect pattern would trip.
  const intersectedRef = React.useRef(false);
  const subscribe = React.useCallback((cb: () => void) => {
    const el = ref.current;
    if (!el || intersectedRef.current) return () => {};
    if (typeof IntersectionObserver === "undefined") {
      intersectedRef.current = true;
      cb();
      return () => {};
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          intersectedRef.current = true;
          io.disconnect();
          cb();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const inView = React.useSyncExternalStore(
    subscribe,
    () => intersectedRef.current,
    () => false,
  );

  return (
    <div ref={ref}>
      {inView ? (
        <BeforeAfterSlider {...props} />
      ) : (
        // Placeholder reserves the same aspect ratio so layout doesn't shift
        // when the chunk lands. The actual before/after image is fetched by
        // the slider itself, not here.
        <div
          aria-hidden="true"
          className="aspect-[4/3] w-full rounded-3xl border border-white/10 bg-ink-900 sm:aspect-[16/10]"
        />
      )}
    </div>
  );
}
