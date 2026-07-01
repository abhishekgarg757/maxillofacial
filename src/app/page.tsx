import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { ProcedureCard } from "@/components/sections/procedure-card";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { WhyChoose } from "@/components/sections/why-choose";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { TestimonialMarquee } from "@/components/sections/testimonials";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { BlogCard } from "@/components/sections/blog-card";
import { CtaBand } from "@/components/sections/cta-band";
import { procedures } from "@/content/procedures";
import { beforeAfterCases } from "@/content/before-after";
import { faqs } from "@/content/faqs";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const homeFaqs = faqs.slice(0, 6);

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
          {procedures.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
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

      {/* Before / After */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-10 size-96 rounded-full bg-brand-600/20 blur-3xl" />
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
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-ink-300">
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
              <BeforeAfterSlider cases={beforeAfterCases} showCaption={false} />
            </Reveal>
          </div>
        </Container>
      </section>

      <WhyChoose />
      <AboutTeaser />

      {/* Testimonials */}
      <Section className="bg-ink-50" containerClassName="!max-w-none !px-0">
        <Container>
          <SectionHeading
            eyebrow="Patient stories"
            title="Trusted for results that change lives"
            description="Real outcomes, real confidence. (Illustrative testimonials — to be replaced with consented patient feedback.)"
          />
        </Container>
        <div className="mt-14">
          <TestimonialMarquee />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Questions & answers"
              title="You asked, we answered"
              description="A few common questions to help you feel informed. Can't find what you need?"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/faq">
                  All FAQs
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          </div>
          <Reveal direction="left">
            <FaqAccordion items={homeFaqs} />
          </Reveal>
        </div>
      </Section>

      {/* Blog */}
      <Section className="bg-ink-50">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Patient education"
            title="Insights & guides"
            description="Clear, evidence-informed articles to help you make confident decisions about your care."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/blog">
              Read the blog
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </>
  );
}
