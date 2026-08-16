import { site } from "@/content/site";

const ORG_ID = `${site.url}/#clinic`;
const PHYSICIAN_ID = `${site.url}/#physician`;

/** Physician + MedicalClinic structured data for the whole site. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": ORG_ID,
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phoneE164,
        description: site.description,
        medicalSpecialty: "OralAndMaxillofacialSurgery",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.postalCode,
          addressCountry: "IN",
        },
        areaServed: { "@type": "City", name: site.address.city },
        openingHoursSpecification: site.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          description: `${h.day}: ${h.time}`,
        })),
      },
      {
        "@type": "Physician",
        "@id": PHYSICIAN_ID,
        name: site.doctorName,
        url: site.url,
        medicalSpecialty: "OralAndMaxillofacialSurgery",
        worksFor: { "@id": ORG_ID },
        memberOf: { "@id": ORG_ID },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function medicalProcedureJsonLd(p: {
  title: string;
  summary: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: p.title,
    description: p.summary,
    url: `${site.url}/procedures/${p.slug}`,
    procedureType: "https://schema.org/SurgicalProcedure",
    provider: { "@id": ORG_ID },
  };
}

export function articleJsonLd(a: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    url: `${site.url}/blog/${a.slug}`,
    author: { "@type": "Person", name: site.doctorName },
    publisher: { "@id": ORG_ID },
  };
}

/** Review schema for a single testimonial. */
export function reviewJsonLd(r: {
  author: string;
  quote: string;
  rating: number;
  date?: string;
  procedureSlug?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewBody: r.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: r.date,
    itemReviewed:
      r.procedureSlug
        ? {
            "@type": "MedicalProcedure",
            name: r.procedureSlug.replace(/-/g, " "),
            url: `${site.url}/procedures/${r.procedureSlug}`,
            provider: { "@id": ORG_ID },
          }
        : { "@type": "MedicalClinic", "@id": ORG_ID },
  };
}

/** AggregateRating schema for the testimonials page. */
export function aggregateRatingJsonLd(reviews: { rating: number; author: string; date?: string }[]) {
  const count = reviews.length;
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / count;
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: { "@type": "MedicalClinic", "@id": ORG_ID },
    ratingValue: Number(average.toFixed(1)),
    reviewCount: count,
    bestRating: 5,
    worstRating: 1,
  };
}

/** Combined Review + AggregateRating graph for testimonials page. */
export function testimonialsJsonLd(testimonials: { author: string; quote: string; rating: number; date?: string; procedureSlug?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      aggregateRatingJsonLd(testimonials),
      ...testimonials.map((t) => reviewJsonLd(t)),
    ],
  };
}

/** Render-ready JSON-LD script tag props. */
export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
