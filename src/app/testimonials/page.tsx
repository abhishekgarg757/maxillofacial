import type { Metadata } from "next";
import { TestimonialHero } from "@/components/sections/testimonial-hero";
import { TestimonialGrid } from "@/components/sections/testimonial-grid";
import { TestimonialCTA } from "@/components/sections/testimonial-cta";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { breadcrumbJsonLd, jsonLdScript, testimonialsJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Patient Testimonials — Dr. Saloni Gupta",
  description:
    "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Patient Testimonials — Dr. Saloni Gupta",
    description:
      "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
    type: "website",
    url: `${site.url}/testimonials`,
    siteName: site.name,
    locale: site.locale,
    images: [
      {
        url: `${site.url}/og.png`,
        width: 1200,
        height: 630,
        alt: "Patient testimonials for Dr. Saloni Gupta, Oral & Maxillofacial Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Testimonials — Dr. Saloni Gupta",
    description:
      "Read what patients say about their experience with Dr. Saloni Gupta — from jaw surgery and dental implants to facial trauma and TMJ care.",
    images: [`${site.url}/og.png`],
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