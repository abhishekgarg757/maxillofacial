---
description: Write or revise a medical blog post (MDX) for the clinic.
argument_hint: <topic or existing post slug>
---

# Doctor Blog

## Purpose
Create or substantially revise a healthcare patient-education blog post in `src/content/blog/<slug>.mdx`, following the repo's E-E-A-T and medical-safety standard so it ranks and builds trust. Rendered by `src/app/blog/[slug]/page.tsx` via `next-mdx-remote`.

## When to use
- A new article on a treatment/condition is needed (jaw surgery, implants, TMJ, orthognathic, trauma, reconstruction).
- An existing post needs updating, refreshing, or fixing.

## Expected input
- Topic or keyword angle (e.g., "implants vs bridges", "recovery after jaw surgery")
- Optional: specific facts the clinic provides; existing slug to revise

## Expected output
- New/updated `src/content/blog/<slug>.mdx` with valid frontmatter: `title`, `excerpt`, `date`, `readingMinutes`, `tags` (optional `cover`)
- Body: scannable `##` sections, plain language, sources for clinical claims, consult CTA (WhatsApp via `whatsappUrl`, `/contact`)
- Checklist of sources; `TODO: clinical review` markers where new claims appear
- Verification: post surfaces on `/blog`; `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `content-model`, `medical-blog` skills.
- Match the house style of existing posts (see `preparing-for-jaw-surgery.mdx`).
- No diagnosis, no invented stats/success rates, honest risk framing.
- Date uses `YYYY-MM-DD`; keep slugs kebab-case.
- Do NOT use raw HTML or components unsupported by the MDX renderer.
- Output is a DRAFT — flag that Dr. Gupta must review before publishing.

## Example
`/doctor-blog "dental implants vs bridges"`
→ Update the existing `dental-implants-vs-bridges.mdx` (or write fresh) comparing honest pros/cons, recovery, longevity as ranges only, with a consult CTA and sources.