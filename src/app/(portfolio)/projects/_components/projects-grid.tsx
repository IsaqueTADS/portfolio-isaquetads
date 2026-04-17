import { ArrowUpRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  thumbnail?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce API",
    description:
      "API RESTful completa para sistema de e-commerce com autenticação JWT, gestão de produtos e pedidos.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/IsaqueTADS/ecommerce-api",
  },
  {
    id: "2",
    title: "Task Manager",
    description:
      "Aplicação fullstack para gestão de tarefas com drag-and-drop, assignees e deadlines.",
    technologies: ["React", "TypeScript", "Tailwind", "Drizzle ORM"],
    githubUrl: "https://github.com/IsaqueTADS/task-manager",
  },
  {
    id: "3",
    title: "Portfolio V1",
    description:
      "Primeira versão do meu portfólio pessoal construído com Next.js e animações.",
    technologies: ["Next.js", "React", "Framer Motion"],
    githubUrl: "https://github.com/IsaqueTADS/portfolio-v1",
    demoUrl: "https://portfolio-v1.vercel.app",
  },
  {
    id: "4",
    title: "Weather App",
    description:
      "Aplicação de clima em tempo real consumindo API externa com geolocalização.",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    githubUrl: "https://github.com/IsaqueTADS/weather-app",
    demoUrl: "https://weather-app-demo.vercel.app",
  },
  {
    id: "5",
    title: "Chat Real-time",
    description:
      "Sistema de chat em tempo real com WebSockets e salas privadas.",
    technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
    githubUrl: "https://github.com/IsaqueTADS/chat-realtime",
  },
  {
    id: "6",
    title: "Blog CMS",
    description:
      "Sistema de gerenciamento de conteúdo para blog com editor markdown e API GraphQL.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/IsaqueTADS/blog-cms",
  },
]

export function ProjectsGrid() {
  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50"
          >
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-xl font-bold text-foreground">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-2 pt-4">
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
          </article>
        ))}
      </div>
    </section>
  )
}
