---
name: homepage-design
description: How to design or rework the homepage of this clinic site. Use when creating new landing sections, restructuring the homepage composition, or validating conversion flow. Locks to the site's design language (dark hero, brand/accent/ink tokens, Reveal motion) and existing section components.
---

# Homepage Design

## Purpose

Design the homepage — the single highest-value page. The current homepage
(`src/app/page.tsx`) follows a proven conversion order: Hero → StatsBand →
Procedures → Before/After → WhyChoose → About → Testimonials → FAQ → Blog →
CTA. This skill keeps new work consistent with that flow while improving it.

## Design principles (repo opinionated)

1. **Order = patient's journey** (aware→consider→trust→act). Don't bury CTAs;
   keep the trust anchors (before/after, testimonials, sources) above conversion
   points where possible.
2. **Dark-hero + airy sections.** Use `ink-950` sections for drama (before/after),
   light sections for trust content. `bg-grid` + `blur-3xl` brand glows only on
   dark sections.
3. **Tokens only** — brand=trust/clinical, accent=CTA (buttons), ink=text/dark
   surfaces. Headings use `font-display`; `SectionHeading` for eyebrow/title/desc.
4. **Reuse sections.** `hero`, `stats-band`, `procedure-card`, `before-after-slider`,
   `why-choose`, `about-teaser`, `testimonials` marquee, `faq-accordion`,
   `blog-card`, `cta-band` all exist — compose them; introduce a new section only
   when none fits.
5. **Motion** via `Reveal`/`Stagger`/`StaggerItem`, subtle and
   reduced-motion-safe.
6. **Verify** rendering + a11y (contrast on dark, focus) + perf (LCP image is
   `priority`) after composing. Keep server components server-rendered.

## Workflow

1. Load `project-conventions`; read `src/app/page.tsx` and the sections being
   composed. Check the design tokens in `globals.css`.
2. Sketch the new section order (markup/data only when possible).
3. Implement via existing components; add new section only if genuinely needed
   (place in `src/components/sections/`, compose `ui/` primitives).
4. Test `npm run dev` render; run `tsc --noEmit` + `npm run lint`.

## Expected inputs

- Goal (e.g., "boost booking clicks", "add a stats band") 
- Reference page/organic content to preserve or reprioritize

## Expected outputs

- Composed homepage (or section) change with token-correct styling
- Reuse-first decision log (what was composed vs newly built + why)
- Note on LCP/priority image correctness

## Limitations

- Content/copy authorship stays with seo-writer; this skill is layout & UX composition.
- Does NOT cover off-homepage templates (see `service-page`).
- Does not change the design language — only executes it.

## Examples

- **"Add a trust strip under the hero"** → extend `stats-band` data or compose a
  lightweight stats row from existing primitives rather than a bespoke section.
- **"Make bookings the hero CTA"** → slot `Button` variants toward `/contact`
  and WhatsApp (`whatsappUrl` helper), keep the trust copy, don't move sections
  that bury conversion.