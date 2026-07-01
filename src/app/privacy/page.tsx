import type { Metadata } from "next";

import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.doctorName}'s website collects, uses and protects your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters. This policy explains what we collect and how we use it."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <Section>
        <div className="prose prose-lg mx-auto max-w-3xl prose-headings:font-display prose-headings:text-ink-900 prose-p:text-ink-700 prose-li:text-ink-700 prose-a:text-brand-700">
          <p className="text-sm text-muted-foreground">
            This is a template policy provided for convenience and is not legal
            advice. It should be reviewed and adapted (including for India&apos;s
            Digital Personal Data Protection Act, 2023) before publication.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you submit the contact form, we collect the details you provide
            — such as your name, email address, phone number and message — solely
            to respond to your enquiry. We do not require you to create an
            account, and this website does not use a patient database.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and arrange a consultation.</li>
            <li>To communicate with you about the care you request.</li>
            <li>To improve our website and services in aggregate.</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. Limited data may be
            processed by trusted service providers that help operate this
            website (for example, email delivery and website analytics), under
            appropriate safeguards.
          </p>

          <h2>Analytics</h2>
          <p>
            We may use privacy-conscious analytics to understand how the website
            is used. This helps us improve content and performance.
          </p>

          <h2>The AI assistant</h2>
          <p>
            Messages you send to the on-site assistant are processed by a
            third-party AI provider to generate responses. Please do not share
            sensitive personal or medical details in the assistant; it provides
            general information only and is not a substitute for a consultation.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of the
            information you have shared with us. To make a request, please
            contact us using the details on the{" "}
            <a href="/contact">contact page</a>.
          </p>

          <h2>Data retention &amp; security</h2>
          <p>
            We keep enquiry information only as long as necessary to respond and
            meet legal or professional obligations, and we take reasonable
            measures to protect it.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: this policy is a placeholder pending review.
          </p>
        </div>
      </Section>
    </>
  );
}
