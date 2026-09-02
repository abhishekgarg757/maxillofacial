import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/sections/page-header";
import { BlogCard } from "@/components/sections/blog-card";
import { CtaBand } from "@/components/sections/cta-band";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog & Patient Education",
  description:
    "Clear, evidence-informed articles on jaw surgery, dental implants, TMJ disorders and oral & maxillofacial care from Dr. Saloni Gupta.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Patient Education — Dr. Saloni Gupta",
    description:
      "Clear, evidence-informed articles on jaw surgery, dental implants, TMJ disorders and oral & maxillofacial care from Dr. Saloni Gupta.",
    url: `${site.url}/blog`,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Patient Education — Dr. Saloni Gupta",
    description:
      "Clear, evidence-informed articles on jaw surgery, dental implants, TMJ disorders and oral & maxillofacial care from Dr. Saloni Gupta.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Patient education"
        title="Insights & guides"
        description="Practical, evidence-informed articles to help you understand your options and make confident decisions about your care."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        variant="aesthetic"
      />

      {/* ── Hero Section — inspired by AestheticHero ── */}
      <Section
        className="bg-paper pb-24 md:pb-32 lg:pb-40 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="bg-gradient-to-b from-paper to-paper-deep inset-0" />
          <div className="absolute top-0 left-0 right-0 h-48 bg-grid" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-ink-900 mb-3">
            From the journal
          </h2>
          <p className="text-clay-700 text-base max-w-2xl mx-auto leading-relaxed">
            Evidence-informed articles to help you understand your options and make confident
            decisions about your care.
          </p>
        </div>
      </Section>

      {/* ── Blog Grid ── */}
      <Section className="pt-12 pb-12">
        <Reveal>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts.map((post) => (
                <BlogCard post={post} key={post.slug} />
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}