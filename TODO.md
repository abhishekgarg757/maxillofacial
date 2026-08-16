# TODO.md — Build backlog & human-decision queue

Two-track working file for the AI operating system. Claude reads and updates
this; the `/todo` command reports it.

- **Track A** — build backlog. Items are AI-executable via `/feature "<item>"`.
- **Track B** — human-decision queue. Only a human can resolve these. **No agent
  ever marks a Track B item `approved`.**

Statuses: `backlog | in-progress | needs-human | approved | done`

---

## Track A — Build backlog (Claude-executable)

Invoke any item with `/feature "<item>"`. Claude determines agents, skills,
files, and audits automatically.

- [ ] **Appointment / consult-request flow** — calendar picker + form (`/feature "Add an appointment booking flow"`).
- [ ] **Clinical calculator / triage page** — e.g., wisdom-tooth or TMJ guidance (`/feature "Add a wisdom-tooth triage page"`).
- [ ] **Multilingual content** — en-IN/hi versions of key pages (`/feature "Add Hindi versions of key pages"`).
- [ ] **Analytics segments** — CTA-click event tracking in Vercel Analytics (`/feature "Add conversion event tracking"`).
- [ ] **Email automation** — post-consult follow-up nurture (`/feature "Set up post-consult email follow-up"`).
- [ ] **Marketing / landing pages** — area- or condition-targeted (Gurgaon / Noida; "jaw surgery recovery") (`/feature "Create a Gurgaon-focused landing page"`).
- [x] **OG social image** — site-level `og:image` referenced by layout metadata (`/feature "Add an OG social image"`). *Done: `src/app/opengraph-image.png` + `opengraph-image.alt.txt` via `scripts/generate-og.mjs`.*
- [ ] *(Add features here as you decide what to build next.)*

---

## Track B — Human-decision queue (only you decide)

Each item blocks something until resolved. Flip status to `approved` yourself —
never via an agent.

### Clinic identity (blocks public launch)

- [ ] **NAP values** — real address, phone, email, WhatsApp, domain in `src/content/site.ts` (all currently `TODO:`). *Blocked on: you.*
- [ ] **Doctor credentials** — confirm post-nominals, qualifications timeline, memberships (DCI / AOMSI) in `src/content/doctor.ts` (currently `TODO: confirm`).
- [ ] **Real doctor portrait** — replace `/public/doctor-portrait.svg` placeholder.

### Patient content & consent

- [ ] **Consented testimonials** — replace the 6 illustrative entries in `src/content/testimonials.ts` with real, written-consent patient feedback.
- [ ] **Consented before/after photos** — replace placeholder SVGs in `/public/before-after/*` with consented clinical photos (or commissioned AI faces).
- [ ] **`/aesthetic` "Real Results" framing** — `BeforeAfterPreview` currently reuses `beforeAfterCases[0]` (a surgical case) as an aesthetic illustration. Confirm the framing is honest and consent covers that use, or remove it until a dedicated aesthetic case exists.

### Local SEO (off-site, human-executed)

- [ ] **Google Business Profile** — create/claim GBP; set category (Oral Surgeon / Dentist), hours, address, photos, and the review link. Checklist available via `/audit local`.

### Pricing policy

- [ ] **Decide pricing posture** — what (if anything) is quoted online vs "estimate at consultation". The assistant + FAQ currently refuse price quotes by guardrail; keep that unless you decide otherwise.

### Clinical sign-off log

Artifacts Dr. Gupta has approved. Agents gate *quality*; only humans mark *approval*.

| Artifact | Status | Approved by | Date |
|---|---|---|---|
| `procedures.ts` (7 procedures) | needs-human | — | — |
| `blog/*.mdx` (3 posts) | needs-human | — | — |
| `faqs.ts` | needs-human | — | — |
| `chat-system-prompt.ts` | needs-human | — | — |
| `/aesthetic` page narrative + quick facts (all `[CLINICAL REVIEW REQUIRED]`) | needs-human | — | — |
| `aesthetic-treatments.ts` (treatment list) | needs-human | — | — |
| `/aesthetic` expertise credential claims ("advanced training in aesthetic medicine") | needs-human | — | — |
| `/aesthetic` hero subtitle + trust-strip positioning claims ("surgical-grade anatomical knowledge", "Evidence-Based Approach") | needs-human | — | — |
| `/testimonials` hero trust strip — "5.0 average rating" and "Verified outcomes" claims | needs-human | — | — |
