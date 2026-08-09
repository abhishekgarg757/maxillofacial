---
name: accessibility-audit
description: WCAG 2.2 AA accessibility audit for this clinic site — semantics, keyboard, focus, contrast, motion, forms, and ARIA. Use for /review-accessibility or before release. Produces file:line findings with concrete fixes. Complements ui-audit.
---

# Accessibility Audit

## Purpose

Guarantee inclusive access for every visitor — including older or symptomatic
patients who depend on clarity. Audit against WCAG 2.2 AA, grounded in the
actual code and this site's interactions (accordions, dialogs, sliders, chat).

## Audit dimensions

1. **Semantics structure** — one `h1`, logical `h2`→`h3` (display font headings
   apply automatically); landmarks (`<header>/<nav>/<main>/<footer>` in layout);
   no div-flooded click areas that should be `<button>`.
2. **Keyboard** — every interactive element reachable & operable:
   - Buttons/links get focus (see buttonVariants `focus-visible:ring-2`).
   - Radix Accordion/Dialog: Tab order, focus trap, `Escape` close.
   - Chat widget (chat-widget.tsx): popup semantics, focus on open, dismissible.
   - BeforeAfterSlider (`react-compare-slider`): keyboard-accessible handle.
3. **Focus visible** — every route confirms focus styles (ring) are not removed.
4. **Labels & forms** — contact-form inputs have `<label>` or `aria-label`
   (check `contact-form.tsx`), errors announced; honeypot hidden properly.
5. **Contrast** — token pairs: `text-ink-*` on light ≥ 4.5:1; dark sections
   (`ink-300`/`white` on `ink-950`); `accent-*` as text; state hover not
   color-only; `text-muted-foreground` on `muted` surfaces.
6. **Motion** — `prefers-reduced-motion` global rule exists; Reveal/Stagger use
   transforms/fades only (no layout/content versions) so the reduce-media
   disable works.
7. **Media & images** — `alt` on before/after images (beforeAlt/afterAlt filled),
   decorative dramatics `aria-hidden`; svg placeholders have meaningful alt.
8. **Target size** — touch/click targets ≥ 24px CSS min (WCAG 2.2), ideally 44px;
   complaint areas: icon buttons in navbar/footer/socials.

## Output

Per finding: `file:line — WCAG 2.2 AA criterion — issue — concrete fix`.
Prioritized: BLOCKING (release) / SHOULD-FIX / NICE. Plus a PASS checklist recap.

## Process

1. Load `project-conventions`. Read layout, navbar, footer, sections, forms, chat.
2. Trace keyboard paths for accordion, dialog, slider, chat (read the Radix/other
   lib usage as implemented, not by assumption).
3. Check contrast by computing token pairs (ili or manual) for the audit scope.
4. Report findings to ui-designer / nextjs-engineer for fixing.

## Limits

- No automated crawler claim; this is a code-level audit + targeted manual checks.
- Not a substitute for assistive-technology testing with real users (flag that as
  recommended).

## Examples

- **Chat widget accessible?** → audit open/close, `aria-label` on toggle, Escape;
  report `chat-widget.tsx:NN` if focus isn't managed.
- **Accordions** → confirm Radix Accordion provides native button semantics + keyboard; only polish needed typically.