import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
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
      />

      <Section>
        {posts.length > 0 ? (
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <p className="text-center text-muted-foreground">
            New articles are on the way. Please check back soon.
          </p>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
