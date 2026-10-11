"use client";

import { useState, useId } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Testimonial } from "@/lib/types";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

const PROCEDURE_FILTERS = [
  { label: "All stories", value: "all" },
  { label: "Jaw surgery", value: "surgery" },
  { label: "Dental implants", value: "implants" },
  { label: "Facial trauma", value: "trauma" },
  { label: "TMJ treatment", value: "tmj" },
] as const;

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const reduce = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const resultsId = useId();

  const filtered = testimonials.filter((t) => {
    if (activeFilter === "all") return true;
    const ctx = t.context.toLowerCase();
    switch (activeFilter) {
      case "surgery":
        return ctx.includes("jaw") || ctx.includes("orthognathic") || ctx.includes("corrective");
      case "implants":
        return ctx.includes("implant");
      case "trauma":
        return ctx.includes("trauma");
      case "tmj":
        return ctx.includes("tmj");
      default:
        return true;
    }
  });

  const activeFilterLabel = PROCEDURE_FILTERS.find((f) => f.value === activeFilter)?.label ?? "All stories";

  return (
    <section className="relative py-20 lg:py-28 bg-white dark:bg-ink-950" aria-labelledby="testimonials-grid-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header - asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <motion.div
            className="lg:col-span-8"
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-clay-400" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-clay-600 dark:text-clay-300">
                The voices
              </span>
            </div>
            <h2 id="testimonials-grid-heading" className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ink-950 dark:text-white leading-[1.05]">
              Every patient arrives with a
              <span className="text-clay-700 dark:text-clay-300"> different fear</span>,
              <br className="hidden md:block" />
              and leaves with a different story.
            </h2>
          </motion.div>

          {/* Filter pills - aligned to right edge on desktop */}
          <motion.div
            className="lg:col-span-4 lg:flex lg:items-end lg:justify-end"
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT_EXPO }}
          >
            <div
              role="radiogroup"
              aria-describedby={resultsId}
              className="flex flex-wrap gap-2 lg:justify-end"
            >
              <span className="sr-only">
                Filter patient stories by procedure type
              </span>
              {PROCEDURE_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  role="radio"
                  aria-checked={activeFilter === filter.value}
                  className={cn(
                    "px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center",
                    "border focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-2",
                    activeFilter === filter.value
                      ? "bg-clay-600 text-white border-clay-600 shadow-sm"
                      : "bg-transparent text-ink-600 border-ink-200 hover:border-clay-300 hover:text-clay-600 dark:text-ink-100 dark:border-ink-700 dark:hover:border-clay-600",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Live region for filter result announcements */}
        <div
          id={resultsId}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          Showing {filtered.length} of {testimonials.length} stories{activeFilter !== "all" ? ` for ${activeFilterLabel}` : ""}
        </div>

        {/* Masonry-style asymmetric grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => {
              const isExpanded = expandedIndex === i;
              const isLong = t.quote.length > 180;

              return (
                <motion.div
                  key={`${activeFilter}-${i}`}
                  layout
                  initial={reduce ? {} : { opacity: 0, y: 16 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  exit={reduce ? {} : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: EASE_OUT_EXPO }}
                  className="break-inside-avoid"
                >
                  <article
                    className={cn(
                      "group relative rounded-3xl border border-ink-100 bg-gradient-to-br from-white to-paper/60 p-7",
                      "dark:from-ink-900 dark:to-ink-950 dark:border-ink-800",
                      "hover:border-clay-300 hover:shadow-xl transition-all duration-500",
                      "dark:hover:border-clay-700",
                      isExpanded && "shadow-xl ring-1 ring-clay-200 dark:ring-clay-800",
                    )}
                  >
                    {/* Decorative quote mark */}
                    <div
                      className="absolute top-5 right-5 size-10 flex items-center justify-center rounded-full bg-clay-100/60 dark:bg-clay-900/40 text-clay-500 text-xl font-display font-bold"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </div>

                    {/* Star rating */}
                    <div
                      className="flex gap-0.5 mb-4"
                      role="img"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={cn(
                            "size-5",
                            s < t.rating
                              ? "text-clay-600 fill-clay-600"
                              : "text-ink-400 dark:text-ink-600",
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote
                      id={`quote-${activeFilter}-${i}`}
                      className={cn(
                        "text-pretty leading-relaxed text-ink-700 dark:text-ink-200",
                        isExpanded || !isLong ? "block" : "line-clamp-5",
                      )}
                    >
                      {t.quote}
                    </blockquote>

                    {/* Expand/collapse for long quotes */}
                    {isLong && (
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : i)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setExpandedIndex(isExpanded ? null : i);
                          }
                        }}
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-clay-700 hover:text-clay-800 dark:text-clay-300 dark:hover:text-clay-200 bg-clay-100/50 hover:bg-clay-100 dark:bg-clay-900/30 dark:hover:bg-clay-900/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px]"
                        aria-expanded={isExpanded}
                        aria-controls={`quote-${activeFilter}-${i}`}
                      >
                        {isExpanded ? "Read less" : "Read full story"}
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    )}

                    {/* Author footer */}
                    <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-800">
                      <div
                        className="size-11 rounded-full bg-gradient-to-br from-clay-400 to-clay-600 flex items-center justify-center text-white text-sm font-bold font-display"
                        aria-hidden="true"
                      >
                        {t.author
                          .replace(/[^A-Za-z]/g, "")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-ink-900 dark:text-white">
                          {t.author}
                        </span>
                        {t.procedureSlug ? (
                          <a
                            href={`/procedures/${t.procedureSlug}`}
                            className="text-xs text-clay-600 hover:text-clay-800 dark:text-clay-300 dark:hover:text-clay-200 font-medium transition-colors underline-offset-2 hover:underline"
                          >
                            {t.context}
                          </a>
                        ) : (
                          <span className="text-xs text-ink-500 dark:text-ink-400">
                            {t.context}
                          </span>
                        )}
                      </div>
                    </figcaption>

                    {/* Hover accent line */}
                    <div
                      className="absolute bottom-0 left-7 right-7 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-clay-400 to-clay-500"
                      aria-hidden="true"
                    />
                  </article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={reduce ? {} : { opacity: 0 }}
            animate={reduce ? {} : { opacity: 1 }}
          >
            <p className="text-ink-500 dark:text-ink-400">
              No stories match this filter yet. Try another category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}