import { ProjectCard } from "./project-card"

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  linkedinUrl?: string
  group?: string
  groupTitle?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce API",
    description:
      "API RESTful completa para sistema de e-commerce com autenticação JWT, gestão de produtos e pedidos.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/IsaqueTADS/ecommerce-api",
    group: "ecommerce",
    groupTitle: "E-commerce Completo",
  },
  {
    id: "1f",
    title: "E-commerce Web",
    description:
      "Frontend web do sistema e-commerce com React e integração API REST.",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/IsaqueTADS/ecommerce-web",
    group: "ecommerce",
  },
  {
    id: "1m",
    title: "E-commerce Mobile",
    description: "Aplicativo mobile para iOS e Android com React Native.",
    technologies: ["React Native", "TypeScript", "Expo"],
    githubUrl: "https://github.com/IsaqueTADS/ecommerce-mobile",
    group: "ecommerce",
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

function getGroupedProjects() {
  const grouped: Record<string, Project[]> = {}
  const standalone: Project[] = []

  for (const project of projects) {
    if (project.group) {
      if (!grouped[project.group]) {
        grouped[project.group] = []
      }
      grouped[project.group].push(project)
    } else {
      standalone.push(project)
    }
  }

  return { grouped, standalone }
}

export function ProjectsGrid() {
  const { grouped, standalone } = getGroupedProjects()

  return (
    <section className="flex flex-col gap-12">
      {Object.entries(grouped).map(([groupKey, groupProjects]) => {
        const groupTitle = groupProjects[0].groupTitle || groupKey
        console.log(groupKey, groupProjects)

        return (
          <div key={groupKey} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {groupTitle}
              </h2>
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground">
                {groupProjects.length} projetos
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {groupProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )
      })}

      {standalone.length > 0 && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Projetos Individuais
            </h2>
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">
              {standalone.length} projetos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standalone.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
