"use client";

import {
  motion,
  type Variants,
  useReducedMotion,
} from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
}

/** Fade + slide an element into view when it enters the viewport. */
export function Reveal({
  children,
  className,
  style,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const { x, y } = reduce ? offset.none : offset[direction];

  return (
    <motion.div
      className={cn(className)}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

interface MotionGroupProps {
  children: React.ReactNode;
  className?: string;
}

/** Wrap a group of <StaggerItem> elements to reveal them in sequence. */
export function Stagger({ children, className }: MotionGroupProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionGroupProps) {
  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
