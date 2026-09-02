import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";

/**
 * Deterministic angle (0-360deg) seeded by the post slug, so each card
 * surfaces a distinct hue pair without needing an actual cover image.
 * Replace with a real `<Image>` when covers are available.
 */
function coverGradient(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const angle = h % 360;
  return {
    backgroundImage: `linear-gradient(${angle}deg, var(--color-paper) 0%, var(--color-paper-deep) 100%)`,
  };
}

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-clay-600/10"
    >
      {/* Cover area — honest placeholder until real images land.
          aria-hidden because the text content below carries the post title. */}
      <div
        aria-hidden="true"
        className="relative aspect-[16/9] overflow-hidden"
        style={coverGradient(post.slug)}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1">
            <svg
              className="size-3.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              aria-hidden="true"
            >
              <path d="M8 7l5 5 5-5" />
            </svg>
            {post.readingMinutes} min read
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}