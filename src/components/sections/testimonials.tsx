import { Star } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/lib/types";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-80 shrink-0 flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:w-96">
      <div
        className="flex gap-0.5"
        role="img"
        aria-label={`Rated ${t.rating} out of 5`}
      >
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-accent-500 text-accent-500" />
        ))}
      </div>
      <blockquote className="text-pretty text-sm leading-relaxed text-ink-700">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-2">
        <span className="grid size-10 place-items-center rounded-full bg-accent-soft font-display text-sm font-bold text-accent">
          {t.author.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-ink-900">{t.author}</span>
          <span className="text-xs text-muted-foreground">{t.context}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  labelledSet = "a",
}: {
  items: Testimonial[];
  reverse?: boolean;
  labelledSet?: "a" | "b";
}) {
  // Split into the canonical set (announced to screen readers) and the
  // duplicated set (visual-only loop continuation; hidden from a11y tree).
  const half = items.length / 2;
  const canonical = items.slice(0, half);
  const duplicate = items.slice(half);

  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={cn(
          "flex shrink-0 gap-5 pr-5 motion-safe:animate-marquee",
          "group-hover:[animation-play-state:paused]",
          "group-focus-within:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {canonical.map((t, i) => (
          <TestimonialCard key={`${labelledSet}-${i}`} t={t} />
        ))}
        <div
          className="flex shrink-0 gap-5"
          aria-hidden="true"
          data-marquee-dupe={labelledSet}
        >
          {duplicate.map((t, i) => (
            <TestimonialCard key={`${labelledSet}-dupe-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Auto-scrolling, hover- AND focus-pausable wall of testimonials
 * (two opposing rows). Pauses on focus for WCAG 2.2.2 compliance.
 */
export function TestimonialMarquee() {
  // Interleave so categories (orthognathic, dental, trauma, …) don't
  // cluster on one row. With `length = n`:
  //   rowA = indices 0, 2, 4, …  (n even → n/2 items; n odd → ceil(n/2))
  //   rowB = indices 1, 3, 5, …  (n even → n/2 items; n odd → floor(n/2))
  const rowA: Testimonial[] = [];
  const rowB: Testimonial[] = [];
  testimonials.forEach((t, i) => {
    (i % 2 === 0 ? rowA : rowB).push(t);
  });

  return (
    <section
      className="relative overflow-hidden bg-ink-50 py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="testimonials-heading"
              className="text-balance text-3xl font-bold leading-tight text-ink-900 sm:text-4xl"
            >
              What patients say
            </h2>
            <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
              Honest feedback from people who have been through the journey with us.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 flex flex-col gap-5">
          <MarqueeRow items={[...rowA, ...rowA]} labelledSet="a" />
          <MarqueeRow items={[...rowB, ...rowB]} reverse labelledSet="b" />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link
            href="/testimonials"
            className="font-semibold text-accent underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-50"
          >
            Read all reviews
          </Link>
        </p>
      </Container>
    </section>
  );
}

/** Backwards-compatible alias for any caller that imports `Testimonials`. */
export { TestimonialMarquee as Testimonials };
