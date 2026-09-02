import type { Metadata } from "next";
import { TestimonialHero } from "@/components/sections/testimonial-hero";
import { TestimonialGrid } from "@/components/sections/testimonial-grid";
import { TestimonialCTA } from "@/components/sections/testimonial-cta";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript, testimonialsJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  // Root layout applies the `%s · Dr. Saloni Gupta` template — use a
  // bare segment title here so the rendered <title> doesn't double up.
  title: "Patient Testimonials",
  description:
    "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Patient Testimonials",
    description:
      "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
    type: "website",
    url: `${site.url}/testimonials`,
    siteName: site.name,
    locale: site.locale,
    // The root `opengraph-image.png` and `twitter-image.png` file
    // conventions auto-inject the og:image / twitter:image meta tags
    // (with cache-bust hashes). Don't redeclare them here.
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Testimonials",
    description:
      "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "Testimonials", url: `${site.url}/testimonials` },
          ]),
        )}
      />
      <script
        {...jsonLdScript(
          testimonialsJsonLd(testimonials),
        )}
      />
      <TestimonialHero />
      <TestimonialGrid testimonials={testimonials} />
      <TestimonialCTA />
    </>
  );
}