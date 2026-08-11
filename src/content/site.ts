import type { SiteConfig } from "@/lib/types";

/**
 * Central site configuration.
 *
 * NOTE: Values marked with `TODO` are placeholders. Replace them with
 * Dr. Gupta's real clinic details before going live.
 */
export const site: SiteConfig = {
  name: "Dr. Saloni Gupta — Oral & Maxillofacial Surgery",
  doctorName: "Dr. Saloni Gupta",
  // TODO: confirm exact post-nominal credentials.
  credentials: "BDS, MDS — Oral & Maxillofacial Surgery",
  shortName: "Dr. Saloni Gupta",
  tagline: "Advanced Oral & Maxillofacial Surgery in Delhi",
  description:
    "Dr. Saloni Gupta is an oral & maxillofacial surgeon in Delhi offering jaw reconstruction, corrective and orthognathic jaw surgery, facial trauma care, dental implants and TMJ (jaw joint) surgery with a patient-first, evidence-based approach.",
  // TODO: replace with the real production domain.
  url: "https://drsalonigupta.com",
  locale: "en_IN",
  // TODO: replace with the real clinic email.
  email: "care@drsalonigupta.com",
  // TODO: replace with the real clinic phone number.
  phoneDisplay: "+91 98XXX XXXXX",
  phoneE164: "+9198XXXXXXXX",
  // Digits only, including country code, for WhatsApp deep links.
  whatsappDigits: "9198XXXXXXXX",
  address: {
    // TODO: replace with the real clinic address.
    line1: "Clinic name / building",
    line2: "Street, locality",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "1100XX",
    country: "India",
    mapQuery: "Oral and Maxillofacial Surgeon, New Delhi",
  },
  hours: [
    { day: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Emergencies only" },
  ],
  socials: [
    // TODO: replace with real profile URLs.
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Procedures", href: "/procedures" },
    { label: "Aesthetic", href: "/aesthetic" },
    { label: "Before & After", href: "/before-after" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Dr. Saloni Gupta's clinic, I would like to know more about a consultation.";
