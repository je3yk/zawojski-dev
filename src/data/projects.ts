import type { ProjectEntry } from "@/components/ProjectCard";

export const projects: ProjectEntry[] = [
  {
    id: "tool-01",
    title: "fit-fam",
    desc: "Family wellness app built as a Next.js + Expo monorepo on a shared API, with meal planning, auto-generated shopping lists, and a shared recipe book.",
    tags: ["Next.js", "React Native", "Expo", "TypeScript", "Monorepo"],
    status: "wip",
    url: null,
    repo: "https://github.com/je3yk/fit-fam",
  },
  {
    id: "tool-02",
    title: "daily-skills",
    desc: "A set of practical AI-agent skills used to plan, execute, and automate daily engineering workflows.",
    tags: ["AI Agents", "Automation", "Shell", "Prompt Engineering"],
    status: "active",
    url: null,
    repo: "https://github.com/je3yk/daily-skills",
  },
  {
    id: "tool-03",
    title: "zawojski-dev",
    desc: "Personal portfolio website with a terminal-inspired UI showcasing experience, tooling, and selected projects.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma Make"],
    status: "deployed",
    url: "https://zawojski.dev",
    repo: "https://github.com/je3yk/zawojski-dev",
  },
];
