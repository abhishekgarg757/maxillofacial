---
description: Improve conversion flow (CTAs, trust, friction) on a page.
argument_hint: <target page or route>
---

# Improve Conversions

## Purpose
Increase quality patient leads without sacrificing clinical trust — by auditing and improving the conversion flow on a target page: primary CTA per viewport, friction, trust signals near action points, anxiety-aware copy.

## When to use
- Booking/contact volume is low and the page's lead flow is under-performing.
- A new page/landing needs its CTA anatomy baked in correctly.
- User wants higher-quality form submissions.

## Expected input
- Target page/route (e.g., `/`, `/procedures/<slug>`, `/contact`)
- Optional goal metric (consult bookings, calls)

## Expected output
- Conversion-flow audit + concrete changes:
  - one primary action per viewport (Book/Call/WhatsApp) + secondary (chat/FAQ)
  - trust signals near CTAs (NAP consistent, credentials, hours, honest before/after)
  - friction fixes (form length, validation feedback)
  - no silver-bullet pressure copy; emergency red-flag stays appropriate
- Resulting edits, `tsc --noEmit`, lint pass

## Best practices
- Load `project-conventions`, `landing-review`, `ui-audit`.
- Healthcare ethics: reduce anxiety, don't fabricate urgency; keep the one-truth content.
- Verify WhatsApp/`whatsappUrl` + `/contact` wiring in the target.
- Recommend measurement (Vercel Analytics) for what changed.

## Example
`/improve-conversions src/app/procedures/[slug]/page.tsx`
→ audit the procedure page: ensure a consult CTA after recovery/risks, phone number clickable, chat available — specifically for a stressed patient.