import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  variant?: "default" | "aesthetic";
}

/** Consistent dark hero band for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  variant = "default",
}: PageHeaderProps) {
  const isAesthetic = variant === "aesthetic";

  return (
    <section
      className={cn(
        isAesthetic
          ? "relative overflow-hidden bg-clay-50 pt-24 pb-16 text-clay-900 sm:pt-32 sm:pb-20"
          : "relative overflow-hidden bg-ink-950 pt-32 pb-16 text-white sm:pt-40 sm:pb-20",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-clay-950 to-transparent",
          isAesthetic ? "" : "bg-ink-950 to-transparent",
        )}
      />
      <div
        className={cn(
          isAesthetic
            ? "pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-brand-600/20 blur-3xl"
            : "pointer-events-none absolute -left-24 -top-20 size-96 rounded-full bg-brand-600/25 blur-3xl",
        )}
      />
      {isAesthetic ? (
        <div
          className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-accent-600/15 blur-3xl"
        />
      ) : null}
      <Container className="relative">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={cn(
              "flex flex-wrap items-center gap-1.5 text-sm",
              isAesthetic ? "text-clay-400" : "text-ink-400",
            )}>
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="size-3.5" /> : null}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={cn(
                        "transition-colors hover:text-white",
                        isAesthetic ? "hover:text-clay-600" : "hover:text-white",
                      )}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={cn("text-clay-300", isAesthetic ? "text-clay-300" : "text-ink-200")}>
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <Badge variant="glass">{eyebrow}</Badge>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className={cn(
              "mt-4 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl",
              isAesthetic ? "font-aesthetic text-clay-900" : "text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl text-white",
            )}>
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className={cn(
                "mt-5 text-pretty text-base leading-relaxed",
                isAesthetic ? "text-clay-400 sm:text-lg" : "text-pretty text-base leading-relaxed text-ink-300 sm:text-lg",
              )}>
                {description}
              </p>
            </Reveal>
          ) : null}
          {children ? (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}