import type { FAQ } from "@/lib/types";

/**
 * General FAQs shown on the FAQ page and (a subset) on the home page.
 * Procedure-specific FAQs live alongside each procedure in procedures.ts.
 */
export const faqs: FAQ[] = [
  {
    category: "Getting started",
    question: "What is an oral & maxillofacial surgeon?",
    answer:
      "An oral & maxillofacial surgeon is a specialist who diagnoses and treats conditions of the mouth, jaws and face. This includes jaw surgery, dental implants, facial trauma, jaw-joint (TMJ) problems, and the removal of cysts and tumours — bridging dentistry and surgery.",
  },
  {
    category: "Getting started",
    question: "Do I need a referral to book a consultation?",
    answer:
      "Not necessarily. You are welcome to request a consultation directly. If you have been referred by your dentist or doctor, bringing any letters, X-rays or scans with you helps us plan efficiently.",
  },
  {
    category: "Getting started",
    question: "What happens at my first appointment?",
    answer:
      "We listen to your concerns, examine the area, review any imaging and explain your options in clear language. You will have time to ask questions, and together we agree on a plan that suits your needs, expectations and circumstances.",
  },
  {
    category: "Procedures & anaesthesia",
    question: "Will my procedure be painful?",
    answer:
      "Procedures are carried out under appropriate anaesthesia — local anaesthetic, sedation or general anaesthesia — so you are comfortable throughout. Afterwards, any discomfort is managed with a tailored pain-relief plan, and most people find it more manageable than they expected.",
  },
  {
    category: "Procedures & anaesthesia",
    question: "How do I choose between local anaesthetic, sedation and general anaesthesia?",
    answer:
      "It depends on the procedure, its length and your preferences and medical history. We will recommend the safest, most comfortable option for you and explain what to expect before, during and after.",
  },
  {
    category: "Recovery & aftercare",
    question: "How long will I need to take off work?",
    answer:
      "This varies by procedure — from no time off for minor treatments to around two weeks for major jaw surgery. We give you a realistic, personalised estimate so you can plan ahead.",
  },
  {
    category: "Recovery & aftercare",
    question: "What can I eat after surgery?",
    answer:
      "Many procedures call for a soft or liquid diet for a period while you heal. We provide clear, practical guidance — including nutrition tips — so you stay well-nourished and comfortable during recovery.",
  },
  {
    category: "Recovery & aftercare",
    question: "Who do I contact if I'm worried after my procedure?",
    answer:
      "You will be given clear aftercare instructions and contact details. If something doesn't feel right, please get in touch — and in any medical emergency, call your local emergency number immediately.",
  },
  {
    category: "Costs & logistics",
    question: "How much will my treatment cost?",
    answer:
      "Costs depend on the specific procedure and your individual needs, so we provide a clear estimate after your consultation. We believe in transparent, itemised information with no surprises. (Please contact the clinic for current fees.)",
  },
  {
    category: "Costs & logistics",
    question: "Do you treat dental and facial emergencies?",
    answer:
      "Yes. Facial injuries, knocked-out teeth and acute infections need prompt attention. Contact the clinic as soon as possible, and for life-threatening emergencies always call your local emergency number first.",
  },
];

export const faqCategories = Array.from(
  new Set(faqs.map((f) => f.category).filter(Boolean) as string[]),
);
