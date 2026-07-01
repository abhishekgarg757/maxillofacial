import { Star } from "lucide-react";

import type { Testimonial } from "@/lib/types";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/utils";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-80 shrink-0 flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:w-96">
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-accent-500 text-accent-500" />
        ))}
      </div>
      <blockquote className="text-pretty text-sm leading-relaxed text-ink-700">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-2">
        <span className="grid size-10 place-items-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700">
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

/** Auto-scrolling, hover-pausable wall of testimonials (two opposing rows). */
export function TestimonialMarquee() {
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <div className="flex flex-col gap-5">
      <MarqueeRow items={[...rowA, ...rowA]} />
      <MarqueeRow items={[...rowB, ...rowB]} reverse />
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) {
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={cn(
          "flex shrink-0 gap-5 pr-5 animate-marquee group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}
