---
name: testimonial-creation
description: Create or revise patient testimonials for this site. Use when adding to src/content/testimonials.ts or the homepage marquee. Produces realistic, consent-respecting, non-fabricated-feeling testimonial drafts that stay within medical-claims guardrails. Always flags these as illustrative/pending-consent, matching existing site behavior.
---

# Testimonial Creation

## Purpose

Maintain the testimonials/reviews surface (`/testimonials`, testimonials marquee
on homepage) with patient stories that build trust without overclaiming. The site
currently marks real vs illustrative explicitly (`Testimonial` objects).

## Workflow

1. Load `project-conventions` + `healthcare-content` (medical-drafting
   guardrails) + `content-model`. Read `src/content/testimonials.ts`
   and `src/components/sections/testimonials.tsx` for the shape (`{ quote, author,
   context, rating }`) and how "illustrative" is surfaced.
2. **Source vs generate**: prefer real, consented patient feedback when provided.
   If generating samples, they must be clearly marked as illustrative/in the
   existing spirit (see homepage callout "Illustrative testimonials — to be
   replaced with consented patient feedback").
3. **Write believable, plain-language quotes** per `healthcare-content`:
   specific-but-generic experiences (procedure + outcome framing), no
   unverifiable results (success rates, "my jaw healed in 2 weeks"), no
   diagnosis claims, no prices.
4. **Respect `context`** (e.g., "Orthognathic surgery patient") — map to real
   service lines; don't invent elaborate backstories.
5. **Rating** consistent with tone — no 5/5 inflated where the copy is modest.
6. Verify `tsc --noEmit`; confirm homepage marquee + testimonials page render.

## Expected inputs

- List/messages of patient outcomes (real, consented — the ideal) OR
- Request to expand the sample set (explicitly illustrative)

## Expected outputs

- Updated `src/content/testimonials.ts`
- Clear flag: which are real (pending consent) vs illustrative examples

## Limitations

- Do NOT fabricate fake identities presented as real patients; if illustrative,
  keep it marked accordingly (this matches the current site's honest labeling).
- No medical-result claims that would need clinical validation.

## Examples

- **Existing real quote** → format to `{ quote, author, context: "Jaw surgery patient", rating: 5 }`.
- **Need 6 marquee entries** → write polite, realistic, outcome-framed sample
  quotes tagged illustrative, and show where the homepage already discloses that.