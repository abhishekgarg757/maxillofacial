import { site } from "@/content/site";
import { procedures } from "@/content/procedures";

const ORG_ID = `${site.url}/#clinic`;
const PHYSICIAN_ID = `${site.url}/#physician`;

/** Physician + MedicalClinic structured data for the whole site. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
        "@id": ORG_ID,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        // TODO(Track B): replace with the real social/profile image.
        image: `${site.url}/opengraph-image.png`,
        logo: `${site.url}/opengraph-image.png`,
        email: site.email,
        telephone: site.phoneE164,
        // TODO(Track B): pricing posture — keep unset unless the clinic decides
        // to publish a range online (medical-content-reviewer policy).
        description: site.description,
        medicalSpecialty: "OralAndMaxillofacialSurgery",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
        knowsLanguage: ["en-IN", "hi"],
        availableService: procedures.map((p) => ({
          "@type": "MedicalProcedure",
          name: p.title,
          url: `${site.url}/procedures/${p.slug}`,
        })),
        // TODO(Track B): supply real lat/lng once the clinic address is finalised.
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
          dayOfWeek: h.schemaDay,
          opens: h.opens,
          closes: h.closes,
        })),
        sameAs: site.socials.map((s) => s.href),
      },
      {
        "@type": "Physician",
        "@id": PHYSICIAN_ID,
        name: site.doctorName,
        url: site.url,
        // TODO(Track B): replace with a real doctor portrait.
        image: `${site.url}/doctor-portrait.svg`,
        medicalSpecialty: "OralAndMaxillofacialSurgery",
        knowsLanguage: ["en-IN", "hi"],
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

/**
 * Combined Review + AggregateRating graph for the testimonials page.
 *
 * TODO(Track B): the underlying `testimonials` data is illustrative until
 * Dr. Gupta signs off on real, consented cases. To stay off Google's
 * structured-data manual-action radar we emit a neutral `ItemList` instead
 * of fabricated `Review` / `AggregateRating` entries. Once consent is
 * confirmed, gate the original graph behind a feature flag and restore it.
 */
export function testimonialsJsonLd(testimonials: { author: string; quote: string; rating: number; date?: string; procedureSlug?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Patient stories (illustrative)",
    description:
      "Illustrative patient stories about oral & maxillofacial procedures. Real cases will be published once patient consent is documented.",
    itemListElement: testimonials.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.author,
      description: t.quote,
    })),
  };
}

/** Render-ready JSON-LD script tag props. */
export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
