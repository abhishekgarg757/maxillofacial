import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/sections/page-header";
import { FaqSearch } from "@/components/sections/faq-search";
import { CtaBand } from "@/components/sections/cta-band";
import { faqCategories, faqs } from "@/content/faqs";
import { procedures } from "@/content/procedures";
import { site, WHATSAPP_DEFAULT_MESSAGE } from "@/content/site";
import { whatsappUrl } from "@/lib/utils";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScript,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about oral & maxillofacial surgery, consultations, anaesthesia, recovery, costs and emergencies at Dr. Saloni Gupta's clinic.",
  alternates: { canonical: "/faq" },
};

// Combine general FAQs with procedure FAQs for richer structured data.
const allFaqs = [
  ...faqs,
  ...procedures.flatMap((p) =>
    p.faqs.map((f) => ({ ...f, category: p.title })),
  ),
];

export default function FaqPage() {
  return (
    <>
      <script {...jsonLdScript(faqJsonLd(allFaqs))} />
      <script
        {...jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: "FAQ", url: `${site.url}/faq` },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Questions & answers"
        title="Frequently asked questions"
        description="Clear answers to help you feel informed and at ease. Can't find what you're looking for? We're always happy to help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        variant="aesthetic"
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">Ask a question</Link>
          </Button>
          <Button asChild variant="glass" size="lg">
            <a
              href={whatsappUrl(site.whatsappDigits, WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              WhatsApp us
            </a>
          </Button>
        </div>
      </PageHeader>

      <Section>
        <div className="mx-auto max-w-3xl bg-clay-50 p-6 rounded-lg">
          <FaqSearch faqs={allFaqs} categories={faqCategories} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}