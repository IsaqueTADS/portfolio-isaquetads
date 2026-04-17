import { ProjectCard, type Project } from "./project-card"

export interface ProjectGroup {
  id: string
  title: string
  projects: Project[]
}

export const projectsGrouped: ProjectGroup[] = [
  {
    id: "ecommerce",
    title: "E-commerce Completo",
    projects: [
      {
        id: "1",
        title: "E-commerce API",
        description:
          "API RESTful completa para sistema de e-commerce com autenticação JWT, gestão de produtos e pedidos.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"],
        githubUrl: "https://github.com/IsaqueTADS/ecommerce-api",
      },
      {
        id: "1f",
        title: "E-commerce Web",
        description:
          "Frontend web do sistema e-commerce com React e integração API REST.",
        technologies: ["React", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/IsaqueTADS/ecommerce-web",
      },
      {
        id: "1m",
        title: "E-commerce Mobile",
        description: "Aplicativo mobile para iOS e Android com React Native.",
        technologies: ["React Native", "TypeScript", "Expo"],
        githubUrl: "https://github.com/IsaqueTADS/ecommerce-mobile",
      },
    ],
  },
]

export const projectsStandalone: Project[] = [
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
    <section className="flex flex-col gap-12">
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
