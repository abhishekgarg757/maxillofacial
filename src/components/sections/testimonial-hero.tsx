"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function TestimonialHero() {
  const reduce = useReducedMotion();

  // Gate motion interactions with reduced motion preference
  const hoverProps = reduce ? {} : {
    whileHover: { y: -6, boxShadow: "0 28px 48px -16px rgb(15 23 42 / 0.18)", transition: { duration: 0.35, ease: EASE_OUT_EXPO } },
    whileTap: { scale: 0.99 }
  };

  return (
    <section
      className="relative min-h-[90dvh] w-full overflow-hidden flex items-center justify-center"
      aria-labelledby="testimonials-hero-title"
    >
      {/* Warm ambient backdrop - clay/terracotta palette */}
      <div
        className={cn(
          "absolute inset-0 z-0 pointer-events-none",
          "bg-gradient-to-br from-clay-50/80 via-paper to-clay-100/60",
          "dark:from-clay-950/80 dark:via-ink-950 dark:to-clay-900/40",
        )}
      >
        {/* Single soft glow - much lighter than 3 blurred orbs */}
        <div
          className="absolute top-1/3 left-1/3 size-[500px] blur-[200px] rounded-full opacity-20 bg-clay-400"
          style={{ animationDuration: "12s" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 right-1/4 size-[400px] blur-[200px] rounded-full opacity-15 bg-clay-300"
          style={{ animationDuration: "15s", animationDelay: "-5s" }}
          aria-hidden="true"
        />
      </div>

      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-grid"
        style={{ backgroundSize: "100px 100px" }}
        aria-hidden="true"
      />

      {/* Main content - simplified, no floating fragments */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column - The narrative */}
          <div className="lg:col-span-7 lg:col-start-1 lg:pl-4">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-clay-100/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-clay-800 backdrop-blur-sm border border-clay-300/50 dark:bg-clay-900/40 dark:text-clay-200 dark:border-clay-700/50 min-h-[44px]"
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE_OUT_EXPO }}
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span
                  className="absolute inset-0 rounded-full bg-clay-500 animate-pulse"
                />
                <span className="relative rounded-full bg-clay-500" />
              </span>
              Patient voices
            </motion.div>

            <motion.h1
              id="testimonials-hero-title"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.02] text-ink-950 dark:text-white"
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT_EXPO }}
            >
              Real stories from
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-clay-600 via-clay-500 to-clay-400 bg-clip-text text-transparent">
                  patients who trusted us
                </span>
                <span
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-clay-400/40 to-clay-300/40 -skew-y-3"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xl text-lg md:text-xl leading-relaxed text-ink-600 dark:text-ink-100"
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE_OUT_EXPO }}
            >
              Every recovery is personal. These are unscripted reflections from people
              who chose Dr. Saloni Gupta for jaw surgery, implants, trauma care, and
              TMJ treatment — shared with consent, in their own words.
            </motion.p>

            {/* Editorial note (no fabricated rating strip).
                TODO(Track B): once consented testimonials are available, replace
                this copy with a real rating/review summary + AggregateRating JSON-LD. */}
            <div
              className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-700 dark:text-ink-100"
              role="note"
              aria-label="Editorial note about patient stories"
            >
              <span className="font-semibold text-ink-900 dark:text-white">
                Patient stories
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Real cases will be published here once each patient has given
                documented consent.
              </span>
            </div>
          </div>

          {/* Right column - Single elegant visual anchor */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <motion.div
              className="relative aspect-[4/5] lg:aspect-square"
              initial={reduce ? {} : { opacity: 0, x: 30 }}
              animate={reduce ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
            >
              {/* Single featured testimonial card - much lighter than 4 stacked */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-ink-100 bg-white/95 p-7 shadow-xl backdrop-blur-sm dark:border-ink-800 dark:bg-ink-900/95"
                {...hoverProps}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <blockquote className="text-base leading-relaxed text-ink-700 dark:text-ink-200 italic flex-1">
                      &ldquo;From the first consultation I felt genuinely listened to. The 3D plan helped me understand exactly what would happen. Recovery went exactly as I was told.&rdquo;
                    </blockquote>
                    <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-clay-100 text-clay-600 text-xl font-display font-bold dark:bg-clay-900/50 dark:text-clay-400" aria-hidden="true">
                      &ldquo;
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-800">
                    <div className="size-10 rounded-full bg-gradient-to-br from-clay-400 to-clay-600 flex items-center justify-center text-white text-sm font-bold">
                      AS
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900 dark:text-white">A. Sharma</p>
                      <p className="text-xs text-ink-500 dark:text-ink-400">Orthognathic surgery</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Subtle accent corner */}
              <div
                className="absolute -bottom-6 -right-6 size-20 rounded-full bg-gradient-to-tr from-clay-300/30 to-clay-200/30 blur-2xl"
                aria-hidden="true"
              />

              {/* Small indicator dots - minimal, not a scroll button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-clay-400" />
                <span className="size-2 rounded-full bg-clay-300" />
                <span className="size-2 rounded-full bg-clay-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}