---
name: faq-creation
description: Generate, revise, or validate FAQ content for the FAQ page and per-procedure FAQs. Use when adding questions to src/content/faqs.ts or a Procedure object's faqs field, or when auditing existing FAQs. Keeps entries short, honest, patient-conversational, and correctly shaped for the FAQ JSON-LD.
---

# FAQ Creation

## Purpose

Maintain high-quality FAQ content across the site: the global FAQ page
(`src/content/faqs.ts` → `/faq`), procedure-specific FAQs (each `Procedure.faqs`),
and any homepage accordion slices.

## Workflow

1. Load `project-conventions` + `healthcare-content` (medical-drafting
   guardrails) + `content-model`. Read `src/content/faqs.ts` for the global
   shape (`FAQ`: question/answer/category) and `src/content/procedures.ts`
   for per-procedure `faqs`.
2. **Collect real patient questions** — from service lines (cost, duration,
   anesthesia, recovery, risk, emergency) and the chat assistant's common asks.
3. **Write answers** per `healthcare-content`: short (2–4 sentences), plain,
   honest, no diagnosis, no invented figures ("costs depend on the individual
   plan"), route to consultation. Where clinically claiming something, it must
   be general and well-established.
4. **Group with `category`** for the FAQ page; keep a consistent, helpful order
   (top clinic logistics first, then treatment-specific).
5. **SEO**: FAQ content feeds `faqJsonLd` (`src/lib/jsonld.ts`) — question
   phrasing should match how people search, but answers must never fabricate.
6. **Dedup**: identical Q&A across global + procedure FAQs = fine if scoped
   differently, otherwise remove dupes.
7. Verify: `tsc --noEmit`, re-check homepage slice still renders (`faqs.slice`).

## Expected inputs

- Topic/set of questions to cover, or the existing FAQ to fix/dedup
- Optional: which page context (homepage slice vs full FAQ page vs procedure)

## Expected outputs

- Updated `src/content/faqs.ts` and/or `Procedure.faqs`
- Note of any question needing Dr. Gupta's answer (flag as TODO for clinical review)

## Limitations

- No fabricated answers; if a real answer isn't known, that's a TODO, not a guess.
- This is content-shaping, not page building (rendering already exists).

## Examples

- **Add "How much does jaw surgery cost?"** → short honest answer ("costs vary
  with the individual plan; clinic gives an estimate at consultation"), category
  "Cost & insurance", meanwhile avoiding price claims.
- **Audit existing FAQs** → check each against the no-diagnosis + no-unfounded
  rules; flag ones that overstate outcomes.