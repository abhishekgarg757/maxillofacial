import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

/** Reusable eyebrow + heading + description block with on-scroll reveal. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
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
              tone === "dark" ? "text-ink-300" : "text-muted-foreground",
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
}

/** Vertical-rhythm section wrapper with an inner Container. */
export function Section({
  className,
  containerClassName,
  bleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
