---
name: roadmap
description: How to read and update TODO.md — the two-track build backlog + human-decision queue. Use when a task references TODO.md, when reporting blocked work, or when running /todo. Guarantees the queue stays the single source of truth for what is AI-executable vs human-decided.
---

# Roadmap — TODO.md conventions

`TODO.md` at the repo root is the single point of truth for (A) what to build
and (B) what only a human can decide. Read it before planning a feature and
update it as work progresses.

## Structure

- **Track A — Build backlog.** One line per feature, each invokable via
  `/feature "<item>"`. Statuses: `backlog | in-progress | done`.
- **Track B — Human-decision queue.** Facts that block work until a human
  decides: NAP, credentials, consent, pricing, GBP, and the clinical sign-off
  log. Statuses: `backlog | in-progress | needs-human | approved | done`.

## When to update

| Event | Update |
|---|---|
| A feature starts | Track A item → `in-progress` |
| A feature ships as draft | Track A item → `done` |
| A new human decision surfaces | Add Track B item → `needs-human` |
| Dr. Gupta approves an artifact | Sign-off log row → `approved` + date |

## Reporting (what /todo produces)

Always answer the user's two questions:
1. **What can Claude build next?** — Track A, `backlog`.
2. **What is blocked on a human right now?** — Track B, `needs-human`, listed
   first, with the exact decision needed.

## Rules

- Agents **never** flip a Track B item to `approved`. Only a human does.
- If a feature hits a `needs-human` blocker, STOP and report it — do not invent
  the missing fact.
- Keep lines short and action-oriented; the file is parsed, not prose.
