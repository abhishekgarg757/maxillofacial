import type { MetadataRoute } from "next";

import { procedureSlugs } from "@/content/procedures";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/procedures",
    "/before-after",
    "/testimonials",
    "/blog",
    "/faq",
    "/contact",
    "/aesthetic",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const procedureRoutes = procedureSlugs.map((slug) => ({
    url: `${site.url}/procedures/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...procedureRoutes, ...blogRoutes];
}
