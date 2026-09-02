import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { ProcedureCard } from "@/components/sections/procedure-card";
import { BeforeAfterSliderLazy } from "@/components/sections/before-after-slider-lazy";
import { WhyChoose } from "@/components/sections/why-choose";
import { TestimonialMarquee } from "@/components/sections/testimonials";
import { BlogCard } from "@/components/sections/blog-card";
import { CtaBand } from "@/components/sections/cta-band";
import { procedures } from "@/content/procedures";
import { beforeAfterCases } from "@/content/before-after";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.tagline,
  description: site.description,
  alternates: { canonical: site.url },
  // The `opengraph-image.png` and `twitter-image.png` file conventions
  // in src/app/ auto-inject the og:image / twitter:image meta tags — don't
  // declare them again here, that would conflict.
  openGraph: {
    title: `${site.doctorName} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.doctorName} — ${site.tagline}`,
    description: site.description,
  },
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBand />

      {/* Procedures */}
      <Section id="procedures">
        <SectionHeading
          eyebrow="What we treat"
          title="Comprehensive oral & maxillofacial care"
          description="From complex jaw reconstruction to confidence-restoring dental implants — explore the full range of procedures, each explained in clear, honest detail."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p, i) => (
            <StaggerItem key={p.slug} index={i} className="h-full">
              <ProcedureCard procedure={p} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/procedures">
              View all procedures
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Before / After — dark warm band */}
      <section className="relative overflow-hidden bg-clay-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-10 size-96 rounded-full bg-clay-600/20 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-6">
              <SectionHeading
                align="left"
                tone="dark"
                eyebrow="Before & after"
                title="See the difference, side by side"
                description="Drag the slider to reveal the transformation. These illustrative examples show the kind of change modern maxillofacial surgery can achieve."
              />
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-ink-100">
                  Images shown are neutral, AI/illustrated placeholders — no real
                  patients — and will be replaced with consented case photos.
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <Button asChild variant="glass" size="lg">
                  <Link href="/before-after">
                    Explore the full gallery
                    <ArrowRight />
                  </Link>
                </Button>
              </Reveal>
            </div>
            <Reveal direction="left">
              <BeforeAfterSliderLazy cases={beforeAfterCases} showCaption={false} />
            </Reveal>
          </div>
        </Container>
      </section>

      <WhyChoose />
      <TestimonialMarquee />

      {/* Blog preview — warm paper surface */}
      <Section className="bg-paper">
        <SectionHeading
          eyebrow="From the journal"
          title="Patient education & insights"
          description="Evidence-informed articles to help you make confident decisions about your care."
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <StaggerItem key={p.slug} index={i} className="h-full">
              <BlogCard post={p} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/blog">
              Read the journal
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
