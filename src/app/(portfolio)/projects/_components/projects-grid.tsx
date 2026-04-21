import { ProjectCard } from "./project-card"
import { projectsGrouped, projectsStandalone } from "@/data/projects"

export function ProjectsGrid() {
  return (
    <section className="flex flex-col gap-12 sm:mb-20">
      {projectsGrouped.map((group) => (
        <div key={group.id} className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {group.title}
            </h2>
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">
              {group.projects.length} projetos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}

      {projectsStandalone.length > 0 && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Projetos Individuais
            </h2>
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">
              {projectsStandalone.length} projetos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsStandalone.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}