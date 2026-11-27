import type { ProjectEntry } from "@/components/ProjectCard";

export const projects: ProjectEntry[] = [
  {
    id: "project-01",
    title: "software-factory",
    desc: "Agentic coding plugin for Claude Code and Codex that turns ideas into reviewed PRs through define → build → review → verify workflows, with a workflow explorer for its agents and skills.",
    tags: ["AI Agents", "Agentic", "Automation", "Workflows"],
    status: "active",
    url: "https://je3yk.github.io/software-factory/",
    repo: null,
  },
  {
    id: "project-02",
    title: "Donum",
    desc: "Wishlist app for sharing gift wishes with a touch of mystery.",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "i18next",
      "software-factory",
    ],
    status: "deployed",
    url: "https://donum.zawojski.dev",
    repo: null,
  },
  {
    id: "project-03",
    title: "zawojski-dev",
    desc: "Personal portfolio website with a terminal-inspired UI showcasing experience, tooling, and selected projects.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Figma Make",
      "software-factory",
    ],
    status: "deployed",
    url: "https://zawojski.dev",
    repo: "https://github.com/je3yk/zawojski-dev",
  },
];
