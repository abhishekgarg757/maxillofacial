---
name: homepage-design
description: How to design or rework the homepage of this clinic site. Use when creating new landing sections, restructuring the homepage composition, or validating conversion flow. Locks to the site's design language (warm-neutral premium, editorial photography-first, restrained motion) and existing section components.
---

# Homepage Design

## Purpose

Design the homepage — the single highest-value page. The current homepage
(`src/app/page.tsx`) follows a proven conversion order refined for the new
medical-luxury visual language: Hero → DoctorCredibility → TreatmentEditorial →
PatientJourney → WhyChoose → Testimonials → EducationalContent → CtaBand →
PremiumFooter. This skill keeps new work consistent with that flow while
improving it per the updated design language.

## Design principles (repo opinionated, new medical-luxury language)

1. **Trust over decoration** — every design decision must earn its place by making
   the surgeon/practice feel more credible and premium. If it doesn't improve
   trust, remove it.
2. **Whitespace over more UI** — generous whitespace is a credibility signal.
   Sections should breathe. Do NOT fill every empty area just for aesthetics.
3. **Restrained accent** — accent color used ONLY for primary CTA, active navigation,
   important links, selected states, small visual signals. Do NOT make every heading
   or component colorful.
4. **Serif selectively** — modern high-quality sans-serif for UI/body; refined serif
   or editorial display face for selected major headings if it genuinely improves the
   medical-luxury aesthetic. Do NOT turn the entire website into a serif newspaper.
5. **Photography-first** — high-quality doctor/clinical photography as the primary
   visual element, not UI decoration. Avoid generic stock hospital imagery; smiling
   doctor pointing at camera; generic hospital corridors; cartoon illustrations.
6. **Minimal unnecessary decoration** — no random blobs, excessive waves, floating
   gradient blobs, fake 3D objects, excessive SVG ornaments. Design sophisticated
   because of composition, not decoration.
7. **Subtle animation** — opacity, translateY, image scale, small transforms; must
   respect `prefers-reduced-motion` non-negotiable. Avoid bouncing, excessive
   parallax, dramatic scroll animations, animations on every element.
8. **Cards support content, not become design** — flat surfaces, subtle borders,
   restrained radius (small 6-8px, medium 12-16px, large 20-28px), image-led
   layouts, very soft elevation where necessary. Do NOT put every section inside a
   card; do NOT use floating card stacks, excessive shadows, giant rounded rectangles,
   glassmorphism, excessive pills.
9. **Border radius restraint** — do NOT use 30-50px on everything. Small 6-8px,
   medium 12-16px, large 20-28px, full 9999px only where appropriate.
10. **Shadows extremely restrained** — most sections no shadow; prefer surface
    contrast, borders, spacing, photography. If used, tinted to match background hue.
11. **Em-dash ban** — do NOT use `—` anywhere on the page.
12. **Visual rhythm — multiple intentional modes, not mechanically alternated:**
    1. Light editorial hero → 2. Doctor credibility → 3. Dark/deep-neutral
       statement → 4. Treatment editorial → 5. Large image-led treatment feature →
    6. Patient journey → 7. Testimonials → 8. Doctor story/about → 9. Educational
    content → 10. Strong appointment CTA → 11. Premium footer. Transitions between
    sections should feel intentional.
13. **Navigation: brand LEFT, center minimal nav, RIGHT primary CTA** "Book
    Consultation". Possible nav items: About, Treatments, Maxillofacial, Plastic
    Surgery, Patient Resources, Contact — minimal not generic sitemap dump.
    Mobile: compact header with logo/brand, menu trigger, CTA if space; polished
    full-screen or large-sheet navigation; do NOT use generic hamburger dropdown.

## Workflow

1. Load `project-conventions`; read `src/app/page.tsx` and the sections being
   composed. Check the design tokens in `globals.css`.
2. Sketch the new section order (markup/data only when possible).
3. Implement via existing components; add new section only if genuinely needed
   (place in `src/components/sections/`, compose `ui/` primitives).
4. Test `npm run dev` render; run `tsc --noEmit` + `npm run lint`.
5. Verify accessibility (contrast, focus states, touch targets ≥44px, reduced
   motion support) and SEO (metadata, structured data, semantic headings).

## Expected outputs

- Composed homepage (or section) change with token-correct styling
- Reuse-first decision log (what was composed vs newly built + why)
- Note on LCP/priority image correctness
- Accessibility verification summary
- SEO verification summary

## Limitations

- Content/copy authorship stays with seo-writer; this skill is layout & UX composition.
- Does NOT cover off-homepage templates (see `service-page`).
- Design language is the new medical-luxury system — NOT the old dark-hero +
  airy sections pattern.

## Examples

- **"Add a trust strip under the hero"** → extend appropriate section or compose
  a lightweight trust row from existing primitives rather than a bespoke section.
  Consider doctor credibility integration.
- **"Make bookings the hero CTA"** → slot `Button` variants toward `/contact`
  and WhatsApp (`whatsappUrl` helper), keep the trust copy, don't move sections
  that bury conversion.
- **"Redesign a section to feel premium"** → evaluate against the 13 design
  principles above. If it doesn't earn its place by improving trust/credibility,
  remove it or restyle it per the new medical-luxury language.
