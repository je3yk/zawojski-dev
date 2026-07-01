import { useEffect, useState } from "react";
import { Mail, Moon, Sun } from "lucide-react";

import avatar from "@/assets/hero.png";
import { ProjectCard, type ProjectEntry } from "@/components/ProjectCard";
import {
  TimelineEntry,
  type ExperienceEntry,
} from "@/components/TimelineEntry";
import { SectionBlock } from "./components/SectionBlock";

type StackEntry = { key: string; value: string | string[] };

const profile = {
  id: "00",
  name: "Jędrzej Zawojski",
  role: "Full Stack Web Developer",
  bio: "I build web and mobile products end-to-end - from database schema to pixel-polished UI. Based in Poland, open to remote work.",
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};

const stack: StackEntry[] = [
  { key: "ui", value: "React" },
  { key: "lang", value: "TypeScript" },
  { key: "backend", value: "Node.js" },
  { key: "mobile", value: "React Native · Expo" },
  { key: "frameworks", value: ["Next.js", "TanStack"] },
  { key: "ai", value: ["Claude", "Cursor", "Codex"] },
];

const experience: ExperienceEntry[] = [
  {
    id: "exp-04",
    role: "Senior Full Stack Developer",
    company: "Acme Corp",
    period: "2023 - present",
    location: "Remote · Warsaw, PL",
    contract: "B2B",
    bullets: [
      "Led migration of monolithic app to React + Node.js microservices, reducing p95 latency by 42%.",
      "Designed and shipped real-time notification system serving 80k daily active users.",
      "Mentored 3 junior developers and established team code review standards.",
    ],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: "exp-03",
    role: "Full Stack Developer",
    company: "BuildFast Studio",
    period: "2021 - 2023",
    location: "Hybrid · Krakow, PL",
    contract: "B2B",
    bullets: [
      "Built and maintained 6 client web applications end-to-end using Next.js and Express.",
      "Implemented cross-platform mobile app with React Native and Expo.",
      "Integrated Stripe billing and subscription flows across multiple SaaS products.",
    ],
    tags: ["Next.js", "React Native", "Expo", "Stripe", "GraphQL"],
  },
  {
    id: "exp-02",
    role: "Frontend Developer",
    company: "Digital Pulse Agency",
    period: "2019 - 2021",
    location: "On-site · Poznan, PL",
    contract: "Permanent",
    bullets: [
      "Developed responsive marketing sites and interactive campaign pages for 20+ clients.",
      "Introduced TypeScript to the frontend codebase, catching more issues pre-production.",
      "Built internal component library adopted across agency projects.",
    ],
    tags: ["React", "TypeScript", "SCSS", "Webpack"],
  },
];

const projects: ProjectEntry[] = [
  {
    id: "tool-01",
    title: "Devlog",
    desc: "A self-hosted developer journaling app with Markdown editor, tagging, full-text search, and timeline view.",
    tags: ["Next.js", "SQLite", "TypeScript"],
    status: "active",
    year: "2024",
    url: "#",
    repo: "#",
  },
  {
    id: "tool-02",
    title: "PocketBudget",
    desc: "Offline-first personal finance tracker with on-device persistence and optional cloud sync.",
    tags: ["React Native", "Expo", "SQLite", "Zustand"],
    status: "shipped",
    year: "2023",
    url: "#",
    repo: "#",
  },
  {
    id: "tool-03",
    title: "api-mock-cli",
    desc: "Zero-config CLI for mocking REST APIs from OpenAPI specs and generating realistic fake data.",
    tags: ["Node.js", "TypeScript", "Fastify"],
    status: "shipped",
    year: "2023",
    url: null,
    repo: "#",
  },
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink((value) => !value), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/90 bg-background/90 px-6 py-3 backdrop-blur sm:px-10">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4">
          <div className="inline-flex items-center gap-0.5 text-sm">
            <span className="rounded-[2px] bg-primary px-1.5 py-0.5 font-bold text-primary-foreground">
              [Jay]
            </span>
            <span>zawojski</span>
            <span className="text-primary">.dev</span>
          </div>
          <button
            type="button"
            onClick={() => setIsDark((value) => !value)}
            className="inline-flex items-center gap-1.5 border border-border px-2 py-1 text-[10px] uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? <Sun size={12} /> : <Moon size={12} />}
            {isDark ? "light" : "dark"}
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-24 px-6 py-16 sm:px-10 sm:py-24">
        <section id="hero">
          <div className="flex flex-col gap-7">
            <div className="relative self-start sm:hidden">
              <div className="relative h-28 w-28 overflow-hidden border border-border bg-secondary">
                <img
                  src={avatar}
                  alt={profile.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
              <div className="absolute -left-1.5 -top-1.5 h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-1.5 -top-1.5 h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-primary" />
            </div>

            <div className="flex items-start justify-between gap-10">
              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] tracking-widest text-primary">
                  {`// ${profile.id} · introduction`}
                </p>
                <h1 className="whitespace-nowrap text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {profile.name}
                  <span
                    className="ml-2 inline-block h-8 w-[3px] align-middle bg-primary sm:h-9"
                    style={{
                      opacity: blink ? 1 : 0,
                      transition: "opacity 0.1s",
                    }}
                  />
                </h1>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
                <p className="max-w-sm pt-2 text-sm leading-relaxed text-foreground/80">
                  {profile.bio}
                </p>
              </div>

              <div className="relative hidden shrink-0 sm:block">
                <div className="relative h-36 w-36 overflow-hidden border border-border bg-secondary sm:h-44 sm:w-44">
                  <img
                    src={avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className="absolute -left-1.5 -top-1.5 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-1.5 -top-1.5 h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-primary" />
              </div>
            </div>

            <div className="bg-card p-4 text-[11px] leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">stack</span>{" "}
                <span className="text-primary">=</span> {"{"}
              </p>
              {stack.map(({ key, value }, index) => (
                <p key={key} className="pl-4">
                  <span className="text-foreground">{key}</span>
                  <span className="text-muted-foreground">: </span>
                  {Array.isArray(value) ? (
                    <>
                      <span className="text-muted-foreground">[</span>
                      {value.map((item, itemIndex) => (
                        <span key={item}>
                          <span className="text-emerald-600 dark:text-emerald-400">
                            "{item}"
                          </span>
                          {itemIndex < value.length - 1 && (
                            <span className="text-muted-foreground">, </span>
                          )}
                        </span>
                      ))}
                      <span className="text-muted-foreground">]</span>
                    </>
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "{value}"
                    </span>
                  )}
                  <span className="text-muted-foreground">
                    {index < stack.length - 1 ? "," : ""}
                  </span>
                </p>
              ))}
              <p className="text-muted-foreground">{"}"}</p>
            </div>

            <div className="flex items-center gap-2.5">
              {profile.socials.map(({ href, label }) => {
                const icon =
                  label === "GitHub" ? (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5a3.1 3.1 0 0 0-1.3-1.7c-1.1-.8.1-.8.1-.8a2.4 2.4 0 0 1 1.8 1.2 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .7-1.6c-2.6-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.2 1.2-3a4 4 0 0 1 .1-3s1-.3 3.1 1.2a10.8 10.8 0 0 1 5.7 0C16.6 6 17.6 6.3 17.6 6.3a4 4 0 0 1 .1 3c.8.8 1.2 1.8 1.2 3 0 4.4-2.6 5.4-5.2 5.7a2.8 2.8 0 0 1 .8 2.2v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                    </svg>
                  ) : label === "LinkedIn" ? (
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                      <path d="M20.5 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.9 20.5H3.3V9h3.6v11.5Z" />
                    </svg>
                  ) : (
                    <Mail size={14} />
                  );

                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <SectionBlock id="experience" label="// 01 · experience">
          <div className="flex flex-col gap-4">
            {experience.map((item, index) => (
              <TimelineEntry key={item.id} entry={item} index={index} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="projects" label="// 02 · my tools & projects">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionBlock>
      </main>

      <footer className="border-t border-border px-6 py-4 sm:px-10">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 text-[10px] text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Jędrzej Zawojski · all rights reserved
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("hero");
              }}
              className="transition-colors hover:text-primary"
            >
              intro
            </a>
            <a
              href="#experience"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("experience");
              }}
              className="transition-colors hover:text-primary"
            >
              experience
            </a>
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
              className="transition-colors hover:text-primary"
            >
              projects
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
