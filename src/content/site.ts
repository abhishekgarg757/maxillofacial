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
    "Oral & maxillofacial surgeon in Delhi — jaw reconstruction, orthognathic surgery, dental implants, facial trauma and TMJ care, evidence-based.",
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
    { day: "Monday", schemaDay: "Monday", opens: "10:00", closes: "19:00" },
    { day: "Tuesday", schemaDay: "Tuesday", opens: "10:00", closes: "19:00" },
    { day: "Wednesday", schemaDay: "Wednesday", opens: "10:00", closes: "19:00" },
    { day: "Thursday", schemaDay: "Thursday", opens: "10:00", closes: "19:00" },
    { day: "Friday", schemaDay: "Friday", opens: "10:00", closes: "19:00" },
    { day: "Saturday", schemaDay: "Saturday", opens: "10:00", closes: "16:00" },
    // Sunday: clinic closed — omitted from `hours` so the JSON-LD graph does
    // not falsely advertise Sunday availability.
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
