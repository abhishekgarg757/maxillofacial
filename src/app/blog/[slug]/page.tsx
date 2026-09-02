import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBand } from "@/components/sections/cta-band";
import { getAllPosts, getPost, getPostSlugs } from "@/lib/blog";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `${site.url}/blog/${slug}`,
      publishedTime: post.meta.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content } = post;
  const more = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <script
        {...jsonLdScript(
          articleJsonLd({
            title: meta.title,
            description: meta.excerpt,
            slug,
            date: meta.date,
          }),
        )}
      />
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
            { name: meta.title, url: `${site.url}/blog/${slug}` },
          ]),
        )}
      />

      <PageHeader
        eyebrow={meta.tags[0] ?? "Patient education"}
        title={meta.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: meta.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-100">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" />
            {formatDate(meta.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" />
            {meta.readingMinutes} min read
          </span>
        </div>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-3xl">
          <article
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink-900 prose-p:text-ink-700 prose-a:text-accent prose-strong:text-ink-900 prose-li:text-ink-700 prose-blockquote:border-l-accent prose-blockquote:bg-accent-soft/50 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-ink-700"
          >
            <MDXRemote source={content} />
          </article>

          <div className="mt-12 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="neutral">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-10 border-t border-ink-100 pt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft />
                Back to all articles
              </Link>
            </Button>
          </div>
        </div>

        {more.length > 0 ? (
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-display text-xl font-bold text-ink-900">
              Keep reading
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-ink-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-xs text-muted-foreground">
                    {formatDate(p.date)}
                  </p>
                  <p className="mt-1 font-semibold text-ink-900 group-hover:text-accent">
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </Section>

      <CtaBand />
    </>
  );
}
