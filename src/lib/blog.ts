import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { BlogPostMeta } from "@/lib/types";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function readPostFile(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw);
}

function toMeta(slug: string, data: Record<string, unknown>): BlogPostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? new Date().toISOString()),
    readingMinutes: Number(data.readingMinutes ?? 4),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    cover: data.cover ? String(data.cover) : undefined,
  };
}

/** All post slugs (file names without extension). */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** Metadata for every post, newest first. */
export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => toMeta(slug, readPostFile(slug).data))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

/** Raw MDX content + metadata for a single post. */
export function getPost(slug: string): { meta: BlogPostMeta; content: string } | null {
  try {
    const { data, content } = readPostFile(slug);
    return { meta: toMeta(slug, data), content };
  } catch {
    return null;
  }
}
