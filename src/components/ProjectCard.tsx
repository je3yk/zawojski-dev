import { ExternalLink } from "lucide-react";

export type ProjectEntry = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  status: string;
  year: string;
  url: string | null;
  repo: string | null;
};

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col border border-border bg-card transition-colors hover:border-primary">
      <div className="flex flex-1 flex-col gap-3 px-5 pb-4 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-primary">{project.id}</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground">{project.year}</span>
            <span
              className={`border px-1.5 py-0.5 text-[10px] ${project.status === "active" ? "border-green-500/40 text-green-600 dark:text-green-400" : "border-border text-muted-foreground"}`}
            >
              {project.status}
            </span>
          </div>
        </div>
        <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{project.desc}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 border-t border-border px-5 py-3">
        {project.repo && (
          <a
            href={project.repo}
            className="flex items-center gap-1.5 text-[10px] text-muted-foreground transition-colors hover:text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-current">
              <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5a3.1 3.1 0 0 0-1.3-1.7c-1.1-.8.1-.8.1-.8a2.4 2.4 0 0 1 1.8 1.2 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .7-1.6c-2.6-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.2 1.2-3a4 4 0 0 1 .1-3s1-.3 3.1 1.2a10.8 10.8 0 0 1 5.7 0C16.6 6 17.6 6.3 17.6 6.3a4 4 0 0 1 .1 3c.8.8 1.2 1.8 1.2 3 0 4.4-2.6 5.4-5.2 5.7a2.8 2.8 0 0 1 .8 2.2v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
            <span>source</span>
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            className="flex items-center gap-1.5 text-[10px] text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink size={10} />
            <span>live</span>
          </a>
        )}
      </div>
    </div>
  );
}
