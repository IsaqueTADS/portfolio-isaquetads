import { ProjectCard, type Project } from "./project-card"

export interface ProjectGroup {
  id: string
  title: string
  projects: Project[]
}

export const projectsGrouped: ProjectGroup[] = [
  {
    id: "gympass",
    title: "GymPass - Check-ins em Academias",
    projects: [
      {
        id: "gympass-api",
        title: "GymPass API",
        description:
          "API RESTful para sistema de check-ins em academias com geolocalização. Permite aos usuários realizar check-ins em academias próximas, com suporte a busca por localização, validação de check-ins por administradores e métricas pessoais de uso.",
        technologies: [
          "Node.js",
          "TypeScript",
          "Fastify",
          "Prisma",
          "PostgreSQL",
        ],
        githubUrl: "https://github.com/IsaqueTADS/GymPass-API",
      },
    ],
  },
  {
    id: "focuz-event",
    title: "Focuz - Gerenciamento de Eventos",
    projects: [
      {
        id: "focuz-api",
        title: "Focuz API",
        description:
          "API RESTful para gerenciamento de eventos com pagamentos Stripe, geolocalização, categorização e sistema de destaque.",
        technologies: ["Express", "TypeScript", "Stripe"],
        githubUrl: "https://github.com/IsaqueTADS/FocuzAPI",
      },
      {
        id: "focuz-frontend",
        title: "Focuz Frontend",
        description:
          "Aplicativo web para descoberta de eventos, painéis de gerenciamento e interfaces de promoção integradas à API.",
        technologies: ["React", "TypeScript"],
        githubUrl: "https://github.com/IsaqueTADS/Focuz-FrontEnd",
      },
    ],
  },
]

export const projectsStandalone: Project[] = [
  {
    id: "fintech",
    title: "Fintech Dashboard",
    description:
      "Dashboard de vendas com gráficos interativos, métricas em tempo real e integração com API. Implementado com React, TypeScript e Vite.",
    technologies: ["React", "TypeScript", "Vite", "Recharts"],
    githubUrl: "https://github.com/IsaqueTADS/fintech",
    demoUrl: "https://fintech-orcin-sigma.vercel.app",
  },
]

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
