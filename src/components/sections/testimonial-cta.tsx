"use client";

import { motion, useReducedMotion } from "motion/react";
import { FileText, Monitor, ShieldCheck, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";
import Link from "next/link";

export function TestimonialCTA() {
  const reduce = useReducedMotion();

  // Gate motion interactions with reduced motion preference
  const cardHoverProps = reduce ? {} : {
    whileHover: { y: -4, scale: 1.02, transition: { duration: 0.3, ease: EASE_OUT_EXPO } }
  };

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Warm ambient background - clay/paper palette */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-paper via-white to-clay-50 dark:from-ink-950 dark:via-ink-950 dark:to-clay-950/40"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-1/4 size-[400px] blur-[180px] rounded-full opacity-30 bg-clay-300"
        />
        <div
          className="absolute bottom-0 left-1/4 size-[320px] blur-[180px] rounded-full opacity-25 bg-clay-400"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Asymmetric split: content left, visual right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: The ask */}
          <motion.div
            className="lg:col-span-7 lg:pr-8"
            initial={reduce ? {} : { opacity: 0, x: -40 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-clay-400" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-clay-500">
                Next step
              </span>
            </div>

            <h2
              id="cta-title"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ink-950 dark:text-white leading-[1.05]"
            >
              Ready to start your
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-clay-600 via-clay-500 to-clay-500 bg-clip-text text-transparent">
                  own story
                </span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-clay-400/40 to-clay-400/40 -skew-y-3"
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
              Every journey here began with a single conversation. No pressure, no
              rush — just a clear plan built around you.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4",
                  "text-base font-semibold",
                  "bg-clay-600 text-white",
                  "hover:bg-clay-700 active:scale-[0.98]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-2",
                  "transition-all duration-200",
                  "shadow-sm hover:shadow-md",
                )}
              >
                <MapPin className="size-5" aria-hidden="true" />
                Book a consultation
              </Link>

              <Link
                href="/procedures"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4",
                  "text-base font-semibold",
                  "border-2 border-ink-200 dark:border-ink-700",
                  "text-ink-900 dark:text-white",
                  "hover:border-clay-400 hover:text-clay-600 dark:hover:text-clay-400",
                  "hover:bg-clay-50 dark:hover:bg-clay-900/30",
                  "active:scale-[0.98]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-2",
                  "transition-all duration-200",
                )}
              >
                <Users className="size-5" aria-hidden="true" />
                Explore procedures
              </Link>
            </div>

            {/* Reassurance micro-copy */}
            <p className="mt-6 text-sm text-ink-500 dark:text-ink-400">
              Consultations are 30&ndash;45 minutes. We&apos;ll review imaging, discuss options,
              and you&apos;ll leave with a written plan. No commitment required.
            </p>
          </motion.div>

          {/* Right: Visual proof / trust */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
          >
            {/* Floating trust cards */}
            <div className="relative aspect-[4/3]">
              {[
                {
                  icon: <FileText className="size-5" />,
                  stat: "Written plans",
                  detail: "For every patient",
                },
                {
                  icon: <Monitor className="size-5" />,
                  stat: "3D imaging",
                  detail: "CBCT on-site",
                },
                {
                  icon: <ShieldCheck className="size-5" />,
                  stat: "Consent first",
                  detail: "Always documented",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "absolute rounded-2xl p-5 border",
                    "bg-white/80 backdrop-blur-sm shadow-lg",
                    "dark:bg-ink-900/80 dark:border-ink-800",
                    "border-clay-200/70 dark:border-clay-800/70",
                  )}
                  style={{
                    top: i === 0 ? "0" : i === 1 ? "50%" : "auto",
                    bottom: i === 2 ? "0" : "auto",
                    left: i % 2 === 0 ? "-16px" : "auto",
                    right: i % 2 === 1 ? "-16px" : "auto",
                    transform: i === 1 ? "translateY(-50%)" : "none",
                  }}
                  initial={reduce ? {} : { opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -3 : 3 }}
                  animate={reduce ? {} : { opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: EASE_OUT_EXPO }}
                  {...cardHoverProps}
                >
                  <div className="mb-2 flex size-9 items-center justify-center rounded-xl bg-clay-100 text-clay-600 dark:bg-clay-900/50 dark:text-clay-400">
                    {card.icon}
                  </div>
                  <p className="text-base font-bold text-ink-900 dark:text-white">
                    {card.stat}
                  </p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">
                    {card.detail}
                  </p>
                </motion.div>
              ))}

              {/* Center visual - simpler concentric rings */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div className="size-[240px] rounded-full border border-clay-200/40 dark:border-clay-800/40" />
                <div className="absolute size-[160px] rounded-full border border-clay-300/40 dark:border-clay-700/40" />
                <div className="absolute size-[80px] rounded-full bg-gradient-to-br from-clay-300/20 to-clay-500/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}