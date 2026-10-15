---
target: src/pages/index.astro
total_score: 10
max_score: 28
na_heuristics: 7,9,10
p0_count: 2
p1_count: 2
target_identity: "file:/home/kurngx/Documents/Campus_Things/web_portofolio/src/pages/index.astro"
target_fingerprint: "sha256:bd71a5dca24ffe10807c59cfa3feb6033e0bd89090afe11f637e3902f6bb009b"
target_path: /home/kurngx/Documents/Campus_Things/web_portofolio/src/pages/index.astro
timestamp: 2026-10-15T16-23-09Z
slug: src-pages-index-astro
---
# Critique: src/pages/index.astro

Method: manual-inspection (design director review)

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 1 | The preloader lies to the user with synthetic progress. The auto-marquee makes scanning unpredictable. |
| 2 | Match System / Real World | 2 | MacOS traffic window dots on web project cards create mismatched desktop mental model. |
| 3 | User Control and Freedom | 1 | Auto-marquee forces motion; cards link externally instead of internal case studies; preloader locks UI. |
| 4 | Consistency and Standards | 2 | Overrides OS standard pointer with laggy cursor; cards do not open case studies; administrative POB in bio. |
| 5 | Error Prevention | 3 | Clicking a card without external URL acts as a silent dead button. |
| 6 | Recognition Rather Than Recall | 2 | Auto-scrolling carousel hides projects; recruiters cannot scan all work at a glance. |
| 7 | Flexibility and Efficiency | n/a | Informational portfolio surface. |
| 8 | Aesthetic and Minimalist Design | 1 | Visual clutter: fake preloader, water ripple overlay, trailing cursor, moving marquee, Mac dots. |
| 9 | Error Recovery | n/a | Informational site without form state. |
| 10 | Help and Documentation | n/a | Informational portfolio. |
| **Total** | | **10/28** | **Critical Rework Needed** |

## Design Specificity Verdict
Underneath the surface lies an exceptionally thoughtful, evidence-grounded engineering portfolio, but on top of it sits a generic, theatrical 'AI template starter pack'.

## Priority Issues
- [P0] What: Project Cards bypass deep case study pages.
  Why it matters: Recruiter clicks directly to raw Vercel or dead button instead of architectural evidence.
  Fix: Route card clicks to internal `/projects/[slug]` case studies.
  Suggested command: /impeccable polish
- [P0] What: Theatrical Fake System Preloader.
  Why it matters: Forces 850ms artificial delay counting 0-100% on a static Astro site.
  Fix: Remove Preloader.astro from Layout.astro.
  Suggested command: /impeccable distill
- [P1] What: Indecisive Infinite Typewriter cycling job titles.
  Why it matters: Dilutes backend/systems positioning with generic keyword cycle.
  Fix: Use static editorial title with backend/cloud subtitle.
  Suggested command: /impeccable clarify
- [P1] What: Trailing Custom Cursor ring with VIEW bubble.
  Why it matters: Gimmick creating input latency and overriding native accessibility.
  Fix: Remove CustomCursor.astro from Layout.astro.
  Suggested command: /impeccable distill
