# DEV-002 STR run — f839e84 (reopened: heading rename)

Sandbox: detached worktree `/tmp/factory-DEV-002` at f839e845a3b3e8bd390694b164850d3c2bab05fa, `bun run preview` on a free port (removed after the run).

| # | Step | Expected | Result | Criterion |
|---|------|----------|--------|-----------|
| 1 | `bun install && bun run lint` | exit 0, only the 2 existing ui warnings | exit 0 | lint/build pass |
| 2 | `bun run build` | exit 0 | exit 0 | lint/build pass |
| 3 | `grep -oE 'project-0[0-9]\|software-factory\|Donum\|zawojski-dev' dist/index.html` | project-01 → software-factory, project-02 → Donum, project-03 → zawojski-dev | `project-01 software-factory software-factory project-02 Donum software-factory project-03 zawojski-dev …` | card ids in order |
| 4 | `grep -c 'tool-0' dist/index.html`; `grep -rn 'tool-0' src` | 0; nothing | 0; nothing | no tool-NN |
| 5 | `grep -o '// 02 · [^<]*' dist/index.html`; `grep -c 'my tools' dist/index.html`; `grep -rn 'my tools' src` | `// 02 · projects`; 0; nothing | as expected | heading |
| 6 | serve the build and screenshot | heading `// 02 · PROJECTS`, cards project-01..03 | see screenshots | heading, card ids |

Screenshots:
- `01-home-desktop.png` — 1280px, full page.
- `02-home-narrow.png` — 500px, full page (headless Chrome's minimum layout width).
- `03-projects-section.png` — crop of the projects section from the desktop capture.
