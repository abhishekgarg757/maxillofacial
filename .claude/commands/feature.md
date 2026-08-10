---
description: Drive a business requirement end-to-end through the pipeline (architect → content → medical gate → engineer → audits → review), stopping only for human decisions.
argument_hint: <business requirement> [scope hints]
---

# Feature

## Purpose
Turn a business requirement — "Create a Dental Implants service page optimized
for local SEO and appointment conversions" — into a finished, audited,
draft-marked feature. Orchestrated by the main session via the `feature-pipeline`
skill: the user picks WHAT, Claude decides HOW.

## When to use
- A new/improved page, procedure, feature, or data model is requested.
- The request is ambiguous or touches 3+ files.
- You want the full pipeline, not a single-step command.

## Expected input
- A business requirement in plain language.
- Optional scope hints (route, target keyword, goal metric).

## Expected output
- Plan for approval (files, content model, every fact needing a human decision).
- Implemented feature with medical gate, parallel audits, and code review passed.
- New human-decision items surfaced in `TODO.md` Track B.
- A done-as-draft report + pointer to `/production-check pre`.

## Best practices
- Load `project-conventions`, `feature-pipeline`, and `roadmap` first.
- Read `TODO.md`; reconcile with existing state (improve, don't duplicate).
- Stop at every hard stop; never invent NAP/credentials/claims/consent/pricing.
- Run `/audit` after implementation, `/production-check pre` before release.

## Example
`/feature "Create a Dental Implants service page optimized for local SEO and conversions"`
→ recognizes `dental-implants` already exists → improve path → plan approval →
seo-writer draft → medical gate → engineer → /audit → code review → report.
