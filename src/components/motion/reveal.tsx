"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  /**
   * Skip the reveal — render the final state immediately. Used for above-the
   * -fold / hero content where the entrance isn't needed.
   */
  immediate?: boolean;
}

/**
 * Fade + slide an element into view when it enters the viewport. Uses a
 * `IntersectionObserver` + CSS class toggle instead of a JS animation
 * library, so it ships no motion runtime for the common case. The CSS
 * animation is short enough that the browser handles it on the compositor;
 * it respects `prefers-reduced-motion: reduce` (the duration collapses to
 * 0.001ms, matching the global rule in globals.css).
 */
export function Reveal({
  children,
  className,
  style,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  immediate = false,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const visibleRef = React.useRef(immediate);

  const subscribe = React.useCallback(
    (cb: () => void) => {
      const el = ref.current;
      if (!el || visibleRef.current) return () => {};
      if (typeof IntersectionObserver === "undefined") {
        visibleRef.current = true;
        cb();
        return () => {};
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            visibleRef.current = true;
            io.disconnect();
            cb();
          }
        },
        { rootMargin: "-80px 0px" },
      );
      io.observe(el);
      return () => io.disconnect();
    },
    [],
  );
  const visible = React.useSyncExternalStore(
    subscribe,
    () => visibleRef.current,
    () => immediate,
  );

  // Final state — no transform, full opacity.
  const finalClasses = "opacity-100 translate-x-0 translate-y-0";
  const offsetClasses: Record<Direction, string> = {
    up: "translate-y-7",
    down: "-translate-y-7",
    left: "translate-x-7",
    right: "-translate-x-7",
    none: "",
  };

  return (
    <div
      ref={ref}
      style={{
        ...style,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
      className={cn(
        "transition-all ease-out motion-reduce:duration-0",
        visible ? finalClasses : `opacity-0 ${offsetClasses[direction]}`,
        className,
      )}
      // `once` isn't applied to the visible flag directly because we never
      // hide again after the first reveal; this prop is kept for API parity
      // with the previous motion-based implementation.
      data-reveal-once={once ? "true" : undefined}
    >
      {children}
    </div>
  );
}

interface MotionGroupProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Pure layout wrapper. The actual stagger timing comes from each
 * `<StaggerItem>` reading `--stagger-step` and its own `index` prop. This
 * keeps the API explicit (callers pass `index={i}`) and avoids double
 * -wrapping when callers already use `<StaggerItem>` as a direct child.
 */
export function Stagger({ children, className }: MotionGroupProps) {
  return (
    <div
      className={cn(className)}
      style={{ ["--stagger-step" as string]: "0.09s" }}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: MotionGroupProps & { index?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const visibleRef = React.useRef(false);

  const subscribe = React.useCallback((cb: () => void) => {
    const el = ref.current;
    if (!el || visibleRef.current) return () => {};
    if (typeof IntersectionObserver === "undefined") {
      visibleRef.current = true;
      cb();
      return () => {};
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          visibleRef.current = true;
          io.disconnect();
          cb();
        }
      },
      { rootMargin: "-80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const visible = React.useSyncExternalStore(
    subscribe,
    () => visibleRef.current,
    () => false,
  );

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "0.6s",
        transitionDelay: `calc(var(--stagger-step, 0.09s) * ${index})`,
      }}
      className={cn(
        "transition-all ease-out motion-reduce:duration-0",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
