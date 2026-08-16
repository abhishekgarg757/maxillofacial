/**
 * Shared motion/animation constants to avoid duplication across components.
 */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const TRANSITION_PRESETS = {
  /** Default page-section entrance (used in hero, grid, CTA) */
  entrance: { duration: 0.6, ease: EASE_OUT_EXPO },
  /** Slightly slower for larger elements */
  entranceSlow: { duration: 0.7, ease: EASE_OUT_EXPO },
  /** Faster for smaller UI elements */
  entranceFast: { duration: 0.4, ease: EASE_OUT_EXPO },
  /** Hover/tap interactions */
  hover: { duration: 0.2, ease: EASE_OUT_EXPO },
  /** Staggered children */
  stagger: { delay: 0.08 },
} as const;