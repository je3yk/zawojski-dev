import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";

function App() {
  const [isDark, setIsDark] = useState(false);

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
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
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
