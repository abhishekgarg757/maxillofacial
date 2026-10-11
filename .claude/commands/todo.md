---
description: Show the build backlog and the human-decision queue (what's blocked on you).
argument_hint: [status: backlog|needs-human|approved|done|all]
---

# Todo

## Purpose
Read `TODO.md` and report: what Claude can build next (Track A) and what is
blocked on a human decision (Track B) — listed first, with the exact decision
needed.

## When to use
- Start of a session: "what should we do next?"
- Anything feels blocked: "what's waiting on me?"
- After sign-off: "mark the implants page approved."

## Expected input
- Optional status filter, or an instruction to update an item.

## Expected output
- Track B `needs-human` items first (decision needed + what they block).
- Track A `backlog` items (invokable via `/feature`).
- Updates applied when you ask (e.g., mark an artifact approved with a date).

## Best practices
- Load `roadmap`; keep `TODO.md` the single source of truth.
- Only a human can mark Track B items `approved`.

## Example
`/todo needs-human`
→ "Blocked on you: real NAP (site.ts), 2 clinical claims on the implants page
for Dr. Gupta, consented testimonial photos. Approve in TODO.md or tell me the values."
