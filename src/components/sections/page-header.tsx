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

const baseTitle = "mt-4 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl";
const baseDescription = "mt-5 text-pretty text-base leading-relaxed sm:text-lg";

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
        "relative overflow-hidden pt-32 pb-16 text-white sm:pt-40 sm:pb-20",
        isAesthetic ? "bg-clay-50 text-clay-900" : "bg-clay-950",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent",
          isAesthetic ? "from-clay-50" : "from-clay-950",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute -left-24 size-96 rounded-full blur-3xl",
          isAesthetic ? "-top-0 bg-clay-600/20" : "-top-20 bg-clay-700/25",
        )}
      />
      {isAesthetic ? (
        <div className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-clay-500/15 blur-3xl" />
      ) : null}
      <Container className="relative">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              className={cn(
                "flex flex-wrap items-center gap-1.5 text-sm",
                isAesthetic ? "text-clay-600" : "text-ink-100",
              )}
            >
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="size-3.5" /> : null}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={cn(
                        "transition-colors",
                        isAesthetic ? "hover:text-clay-900" : "hover:text-white",
                      )}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={isAesthetic ? "text-clay-700" : "text-ink-100"}>
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
            <h1 className={cn(baseTitle, isAesthetic ? "text-clay-900" : "text-white")}>
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p
                className={cn(
                  baseDescription,
                  isAesthetic ? "text-clay-700" : "text-ink-100",
                )}
              >
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
