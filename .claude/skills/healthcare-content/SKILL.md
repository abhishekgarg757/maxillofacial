---
name: healthcare-content
description: Shared medical-drafting guardrails for this clinic site. Load before authoring or reviewing ANY healthcare content — procedures, blog, FAQs, testimonials, metadata, JSON-LD, chat copy. Replaces per-skill restatement. Draft-first, no diagnosis, no unverifiable precision, honest risk, sourcing, human sign-off.
---

# Healthcare Content — shared drafting guardrails

The single source of truth for how medical copy is drafted on this site.
`service-page`, `medical-blog`, `faq-creation`, and `testimonial-creation`
reference this instead of restating the rules. Enforced by
`medical-content-reviewer`; final authority is Dr. Gupta (never an agent).

## Non-negotiable rules

1. **Draft-first.** Every medical artifact is a DRAFT pending human clinical
   review. Keep `TODO: clinical review` markers on anything awaiting sign-off.
   Never mark an artifact as final.
2. **No diagnosis / no individual advice.** Never map a reader's symptoms to a
   condition. Route to a consultation.
3. **No unverifiable precision.** Qualitative or common published ranges only.
   Never invent success rates, outcomes, statistics, or credentials.
4. **Risks alongside benefits.** Honest risk framing is required, not optional.
5. **Sourcing.** Clinical claims cite reputable patient-education sources:
   AAOMS, Cleveland Clinic, Mayo Clinic, NHS, Johns Hopkins, NIDCR.
6. **No prices.** Cost is "estimate at consultation" unless the clinic decides
   otherwise (see `TODO.md` Track B → pricing).
7. **Tone.** Calm, honest, plain language. Explain jargon when used.

## Always a human decision (never an agent's)

- NAP values, phone, email, domain
- Doctor credentials / qualifications / memberships
- Patient testimonials and photos (require written consent)
- Success rates, statistics, clinical outcomes
- Any price or policy claim

Unverified facts are written as `TODO` markers, never invented.

## Draft → sign-off flow

1. **seo-writer** authors the draft (this skill applies).
2. **medical-content-reviewer** gates quality — safety, sourcing, no-diagnosis.
3. **Dr. Gupta** approves in `TODO.md` Track B (clinical sign-off log).
4. Only then is the artifact publishable.

## Output markers

- New or edited claim → append `TODO: clinical review`.
- Missing real fact → append `TODO: <what's needed>` (e.g. `TODO: real phone number`).
- An artifact that passed medical-content-reviewer but not human sign-off is
  **still a draft** — never present it as final.
