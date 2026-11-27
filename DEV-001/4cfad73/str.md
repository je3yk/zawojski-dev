# DEV-001 STR run — 4cfad73

Sandbox: detached worktree `/tmp/factory-DEV-001` at 4cfad7318999394bc077805a7be1330702f3fcf2, `bun run preview` on free port 56496 (removed after the run).

| # | Step | Expected | Result | Criterion |
|---|------|----------|--------|-----------|
| 1 | `bun install && bun run lint` | exit 0, only the 2 existing ui warnings | exit 0 | lint/build pass |
| 2 | `bun run build` | exit 0, `dist/index.html` | exit 0 | lint/build pass |
| 3 | card ids + headings in `dist/index.html` | tool-01..03; software-factory, Donum, zawojski-dev | as expected | projects, order, ids |
| 4 | `grep -c "fit-fam\|daily-skills" dist/index.html` | 0 | 0 | old projects gone |
| 5 | link/tag parse of `dist/index.html` | live-only for software-factory and Donum; software-factory tag on Donum and zawojski-dev | `live https://je3yk.github.io/software-factory/`, `live https://donum.zawojski.dev`, `source https://github.com/je3yk/zawojski-dev`, `live https://zawojski.dev`, both tags True | live links only; software-factory tag |
| 6 | README commands | bun install / dev / lint / build documented | lines 10, 18, 26, 27 | README |
| 7 | open the served page in headless Chrome | projects section shows the three cards | see screenshots | projects, links, tags |

Screenshots:
- `01-home-full.png` — desktop 1280px, full page; section "02 · my tools & projects" shows software-factory (active, live), Donum (deployed, live), zawojski-dev (deployed, source + live).
- `02-home-mobile.png` — 390px wide.
