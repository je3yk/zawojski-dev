# DEV-002 STR run — 1a8c20c

Sandbox: detached worktree `/tmp/factory-DEV-002` at 1a8c20cbbba94250bd3ca9bc9323cc00980bd993, `bun run preview` on a free port (removed after the run).

| # | Step | Expected | Result | Criterion |
|---|------|----------|--------|-----------|
| 1 | `bun install && bun run lint` | exit 0, only the 2 existing ui warnings | exit 0 | lint/build pass |
| 2 | `bun run build` | exit 0, `dist/index.html` | exit 0 | lint/build pass |
| 3 | `grep -oE 'project-0[0-9]\|software-factory\|Donum\|zawojski-dev' dist/index.html` | project-01 → software-factory, project-02 → Donum, project-03 → zawojski-dev | `project-01 software-factory software-factory project-02 Donum software-factory project-03 zawojski-dev …` | labels in order |
| 4 | `grep -c 'tool-[0-9]' dist/index.html` | 0 | 0 | no tool-NN |
| 5 | `grep -rn 'tool-[0-9]' src/` | no output | no output (exit 1) | no tool-NN |
| 6 | serve the build and screenshot | cards labelled project-01..03 in order | see screenshots | labels in order |

Screenshots:
- `01-home-desktop.png` — 1280px, full page.
- `02-home-narrow.png` — 500px, full page (headless Chrome's minimum layout width; a 390px capture clipped the page on the right for every section, so it was discarded as a tool artifact). The longer `project-NN` labels fit without wrapping.
