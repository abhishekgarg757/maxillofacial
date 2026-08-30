import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-paper to-paper-deep">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 flex items-bottom p-6">
          <span className="font-display text-lg font-bold leading-tight text-accent-600">
            {post.tags[0] ?? "Patient education"}
          </span>
          <ArrowUpRight className="absolute right-4 top-4 size-6 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
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
            >
              <path d="M8 7l5 5 5-5" />
            </svg>
            {post.readingMinutes} min read
          </span>
        </div>
        <h3 className="text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-brand-600">
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