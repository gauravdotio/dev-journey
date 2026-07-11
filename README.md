# Dev Journey 🚀

A self-directed log of me learning backend development — by building real things instead of just reading about them. This repo is where the notes, mistakes, and working code from that process all live together.

## Why this repo exists

I'm learning backend fundamentals hands-on. Rather than working through theory in isolation, each concept gets implemented in a real, working project, tested, and (when useful) written up here so future-me remembers *why* a decision was made, not just *what* the code does.

This isn't tied to one project — it's a running record of whatever I'm building to learn a given concept. Small scripts, half-finished APIs, and full mini-apps can all live here side by side.

## What's in here

- **Projects** — working (or in-progress) apps built to learn a specific slice of backend dev
- **Notes** — write-ups of concepts once I understand them well enough to explain them
- **Experiments** — smaller one-off scripts testing a single idea before it goes into a real project

## Progress / Concepts Covered

A running list of what's been implemented and understood so far:

- [x] **Password hashing & auth basics** (via `bcrypt`)
  - One-way hashing — verification is always *comparison*, never decryption
  - Automatic salting and why it defeats rainbow table attacks
  - Cost factor (rounds) as a tunable brute-force resistance / performance tradeoff
- [ ] **Login & session handling** — in progress
- [ ] **Session persistence strategy** — server-side sessions vs. JWTs (tradeoffs being weighed)
- [ ] *(more added as new concepts are tackled — databases, APIs, testing, deployment, etc.)*

## Project Structure

```
.
├── projects/
│   └── <project-name>/    # each hands-on project gets its own folder
├── notes/                 # concept write-ups
├── README.md
└── ...
```
*(update to match actual folder layout as the repo grows)*

## Getting Started

Each project folder will have its own setup instructions once it's further along. General setup:

```bash
git clone <repo-url>
cd dev-journey
```

## Learning Log

| Concept | Notes |
|---|---|
| One-way password hashing | Verification = comparison, never decryption |
| Salting | bcrypt handles this automatically; defeats rainbow tables |
| Cost factor (rounds) | Deliberate security/performance tradeoff — don't over-tune in prod |

More entries added as new topics get implemented.

## Why "Journey" and not just "Project"

The commit history and this README are meant to show the *process* — including wrong turns — not just a finished product. If you're following along or learning the same stuff, feel free to open issues or point out better approaches.

---
*Last updated: manually, whenever a new concept sticks.*
