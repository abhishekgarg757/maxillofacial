"use client";

import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Auto-wires the section landmark to its visible heading. `<Section>`
 * generates a stable `useId()`-backed heading id and pushes it via
 * context; `<SectionHeading>` reads that id and stamps it on the `<h2>`.
 * Consumers don't need to thread any id through.
 */
const SectionLabelContext = React.createContext<string | undefined>(undefined);

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /**
   * Optional explicit id. Use this when the heading is *not* a child of
   * a `<Section>` (e.g. it's a one-off inside a custom wrapper).
   */
  headingId?: string;
}

/** Reusable eyebrow + heading + description block with on-scroll reveal. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  headingId,
}: SectionHeadingProps) {
  const fromContext = React.useContext(SectionLabelContext);
  const id = headingId ?? fromContext;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Badge variant={tone === "dark" ? "glass" : "brand"}>{eyebrow}</Badge>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          id={id}
          className={cn(
            "text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl",
            tone === "dark" ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-pretty text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-ink-100" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  bleed?: boolean;
  /**
   * ID of an existing element that labels this section (e.g. a
   * hand-authored heading outside the `<Section>`). Prefer leaving this
   * unset and letting the auto-wired context handle the labelling.
   */
  labelledBy?: string;
}

/** Vertical-rhythm section wrapper with an inner Container. */
export function Section({
  className,
  containerClassName,
  bleed = false,
  labelledBy,
  children,
  ...props
}: SectionProps) {
  const autoId = React.useId();
  const labelId = labelledBy ?? autoId;
  return (
    <section
      aria-labelledby={labelId}
      className={cn("py-20 sm:py-28", className)}
      {...props}
    >
      <SectionLabelContext.Provider value={labelId}>
        {bleed ? (
          children
        ) : (
          <Container className={containerClassName}>{children}</Container>
        )}
      </SectionLabelContext.Provider>
    </section>
  );
}
