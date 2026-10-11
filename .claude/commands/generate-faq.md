---
description: Generate or expand FAQ content from a topic or from existing content.
argument_hint: <topic or page>
---

# Generate FAQ

## Purpose
Create FAQ entries for the global FAQ page (`src/content/faqs.ts`) and/or a procedure's `faqs`, answering real patient questions in the house voice, with correct `category` grouping — wired to render and to `faqJsonLd`.

## When to use
- New/updated procedure page needs procedure-specific FAQs.
- Global FAQ set needs expansion (cost, insurance, appointments, recovery, emergencies).
- User asks "generate FAQs for <topic>".

## Expected input
- Topic/service line (e.g., "jaw surgery recovery") or specific questions
- Optional: how many to generate; where to place (global vs a procedure object)

## Expected output
- New `FAQ` objects in `src/content/faqs.ts` and/or `Procedure.faqs` (with `category` where applicable)
- Grouped/sorted sensibly; deduplicated against existing
- Any question that needs the doctor's real answer flagged as `TODO: clinical review`
- `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `faq-creation`, `content-model`.
- Answers: 2–4 sentences, plain language, no diagnosis, honest "costs depend on the plan".
- Match FAQ wording to how patients search; never fabricate.
- Keep global FAQs general and short; procedure FAQs specific.

## Example
`/generate-faq "TMJ surgery preparation"`
→ produce 6–8 procedure FAQs appended to the `tmj-jaw-joint-surgery` Procedure.faqs, grouped, on-brand, plus global items if clearly useful.