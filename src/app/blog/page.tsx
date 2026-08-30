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

      <Section className="pt-6 pb-12">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-ink-900 mb-4">
              Patient Education
            </h1>
            <p className="text-clay-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Evidence-informed articles to help you understand your options and make confident
              decisions about your care.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {posts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}