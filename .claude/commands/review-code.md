---
description: Review the current diff/PR for correctness, security, and conventions.
argument_hint: [target: diff | branch]
---

# Review Code

## Purpose
Run the repo's code-review process on the current changes (working tree, branch diff, or a PR) — catching correctness, type-safety, security, convention drift, and surgical-scope issues before merge.

## When to use
- Before any merge or release of code changes.
- After nextjs-engineer / ui-designer work.
- User asks "review my changes".

## Expected input
- Target: `diff` (default, unstaged/HEAD), a branch (`main...HEAD`), or a PR URL
- Optional focus (correctness / security / conventions)

## Expected output
- VERDICT: APPROVE / REQUEST CHANGES
- Numbered findings: `file:line — issue — concrete fix — severity` (Blocking vs Nit)
- Evidence: `npx tsc --noEmit` + `npm run lint` results
- Explicit note of what wasn't checked (clinical correctness → medical-content-reviewer + human)

## Best practices
- Load `project-conventions`, `code-review`, and the best-practices skills.
- Review the ACTUAL diff; run the gates yourself; don't trust memory.
- Check API security (Zod + rate limit), no secrets/keys in diff, chat guardrails intact.
- Keep it fast and high-signal — no style bikeshedding if it matches surroundings.

## Example
`/review-code diff`
→ review the unstaged changes: run tsc+lint, list blocking vs nit findings with the exact fix per file, verdict.