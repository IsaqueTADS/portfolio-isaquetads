export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  linkedinUrl?: string
}

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
        technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL"],
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

export const projectsExperience: Project[] = [
  {
    id: "gympass-api",
    title: "GymPass API",
    description:
      "API RESTful para sistema de check-ins em academias com geolocalização. Permite aos usuários realizar check-ins em academias próximas, com suporte a busca por localização, validação de check-ins por administradores e métricas pessoais de uso.",
    technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/IsaqueTADS/GymPass-API",
  },
  {
    id: "focuz",
    title: "Focuz",
    description:
      "API RESTful para gerenciamento de eventos com pagamentos Stripe, geolocalização, categorização e sistema de destaque. Includes aplicativo web para descoberta de eventos.",
    technologies: ["Express", "React", "TypeScript", "Stripe"],
    githubUrl: "https://github.com/IsaqueTADS/FocuzAPI",
    demoUrl: "https://github.com/IsaqueTADS/Focuz-FrontEnd",
  },
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