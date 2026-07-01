import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
}

/** Consistent dark hero band for inner pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-16 text-white sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 -top-20 size-96 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-accent-600/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950 to-transparent" />

      <Container className="relative">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="size-3.5" /> : null}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink-200">{c.label}</span>
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
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
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
