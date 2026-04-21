import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projectsExperience } from "@/data/projects"

export function ExperienceTimeline() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Projetos Desenvolvidos
        </h2>
        <Link
          href="/projects"
          className="text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          Ver todos →
        </Link>
      </div>

      <div className="flex flex-col gap-8 pl-4">
        {projectsExperience.map((project, index) => (
          <div key={project.id} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-foreground" />
              {index < projectsExperience.length - 1 && (
                <div className="h-32 w-px bg-border" />
              )}
            </div>
            <div className="flex flex-col gap-3 pb-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-primary">Projeto Full Stack</p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-1">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Código
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}