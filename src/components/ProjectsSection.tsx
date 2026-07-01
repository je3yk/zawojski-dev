import { ProjectCard } from "@/components/ProjectCard";
import { SectionBlock } from "@/components/SectionBlock";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <SectionBlock id="projects" label="// 02 · my tools & projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionBlock>
  );
}
