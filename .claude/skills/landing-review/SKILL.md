---
name: landing-review
description: Conversion-optimization review for marketing/landing pages of this clinic site — leads, trust signals, CTAs, friction, mobile intent. Use for /improve-conversions or /analyze-homepage. Healthcare-specific (trust + reduced anxiety matter more than aggressive CTAs).
---

# Landing Review

## Purpose

Maximize quality patient leads without breaking clinical trust. This site's
conversion goals: consultation bookings (Contact/WhatsApp), phone calls, and
subscribing patients to educational content. Conversion here must feel like
inviting, not selling.

## Principles (healthcare-specific)

1. **Reduce anxiety first** — clarity about procedures, costs ("estimate at
   consult", never pressuring), risks, and what to expect → trust = leads.
2. **Keep one primary action per viewport** (Book consult / Call / WhatsApp),
   plus a low-friction secondary (chat widget, FAQ).
3. **Trust signals near action points** — credentials, before/after honest
   framing, testimonials (real/consented), sourced content, NAP, hours.
4. **Anxiety-aware copy** — plain language, no fear-mongering; "many patients
   ask this" phrasing; emergency red flags get appropriate urgency (not sales).

## Audit dimensions

1. **CTA anatomy per page** — hero primary, mid-page, end (cta-band), sticky
   nav/chat present; each CTA consistent (Contact `/contact`, WhatsApp
   `whatsappUrl`) with correct labels ("Book a consultation").
2. **Friction** — contact form field count minimal (name/email/phone/message +
   subject select); client validation good; confirmation feedback clear; no
   mandatory accounts/captcha that stalls older users (honeypot already used).
3. **Social proof** — testimonials (real/consented) visible on /testimonials,
   homepage marquee; any outdated "illustrative" callouts resolved before launch.
4. **Mobile intent** — call & WhatsApp tappable one-thumb; order of sections on
   mobile sensible (hero CTA then stats; contact bottom reachable).
5. **Reduction of dead-ends** — FAQ answers link to procedures; procedure pages
   end with consult CTA; blog → related procedure + consult; no 404 children.
6. **Trust signals** — NAP, credentials (as available), hours, map/address
   consistent, clear "not medical advice" fine-print where applicable.

## Output

Prioritized report: `area — behavior issue — expected effect — recommended change`.
Verdict: LEAD-FLOW OK / IMPROVE with owner assignment (ui-designer/engineer/seo-writer).

## Process

1. Load `project-conventions`, `content/site.ts` (or the target page).
2. Walk the target page's flow as a patient; audit 1–6 against code.
3. Suggest changes that preserve the design language + clinical trust.

## Limits

- Not A/B tested predictions — changes proposed, measurement is the clinic's
  job (Vercel Analytics already installed).
- Never pressure-copy or fabricated urgency (medical ethics over tactics).

## Examples

- **Homepage CTAs** → ensure hero has "Book a consultation" + secondary "Ask a
  question", and the FAQ/blog links don't dead-end (CTA at end of each).
- **Contact friction** → keep form minimal; validate via Zod; confirm a
  human-readable success state appears after submit.