import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing the use of ${site.doctorName}'s website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms on which this website is made available to you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <Section>
        <div className="prose prose-lg mx-auto max-w-3xl prose-headings:font-display prose-headings:text-ink-900 prose-p:text-ink-700 prose-li:text-ink-700 prose-a:text-accent">
          <p className="text-sm text-muted-foreground">
            This is a template provided for convenience and is not legal advice.
            Please review and adapt before publication.
          </p>

          <h2>Acceptance</h2>
          <p>
            By accessing or using this website, you agree to these terms. If you
            do not agree, please do not use the website.
          </p>

          <h2>No medical advice</h2>
          <p>
            The content on this website is for general information and education
            only. It is not medical advice, does not create a doctor–patient
            relationship, and must not be relied upon for diagnosis or treatment.
            Always consult a qualified clinician about your individual situation.
            See our <a href="/disclaimer">medical disclaimer</a>.
          </p>

          <h2>Use of the website</h2>
          <ul>
            <li>Do not misuse the website or attempt to disrupt it.</li>
            <li>
              Information you submit (for example via the contact form or
              assistant) must be accurate and your own to share.
            </li>
            <li>
              The AI assistant is provided &ldquo;as is&rdquo; for general
              information and may not always be accurate.
            </li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            The content, branding and design of this website are owned by{" "}
            {site.doctorName} or used with permission, and may not be copied
            without consent.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, we are not liable for any loss
            arising from reliance on website content. External links are provided
            for convenience and we are not responsible for third-party content.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the
            website constitutes acceptance of the current terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
