export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  linkedinUrl?: string
  badge?: string
  privateCode?: boolean
  role?: string
}

export interface ProjectGroup {
  id: string
  title: string
  projects: Project[]
}

export const projectsGrouped: ProjectGroup[] = [
  {
    id: "freelance",
    title: "Freelance / Clientes",
    projects: [
      {
        id: "maria-cristina-neuropsi",
        title: "Maria Cristina · Psicóloga e Neuropsicóloga",
        description:
          "Landing page profissional para cliente (trabalho freelance) com design autoral em paleta terracota e fontes Playfair Display + Inter. Desenvolvi o site, o design da identidade visual da página e otimizei a performance mobile (LCP de 6,4s para ~1s) com export estático.",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        demoUrl: "https://mariacristinaneuropsi.com.br/",
        badge: "Freelance",
        privateCode: true,
        role: "Freelance · UI/UX e Desenvolvimento",
      },
    ],
  },
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
  {
    id: "cashybank",
    title: "CashyBank - Controle Financeiro",
    projects: [
      {
        id: "cashybank-api",
        title: "CashyBank API",
        description:
          "API REST de controle financeiro pessoal. Gerencia transações (receitas/despesas), autenticação JWT com hash argon2, categorias, paginação, filtros, soft delete e cálculo de saldo total. Documentação interativa via Scalar.",
        technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Zod", "JWT", "Vitest"],
        githubUrl: "https://github.com/IsaqueTADS/CashyBank-API",
      },
      {
        id: "cashybank-mobile",
        title: "CashyBank Mobile",
        description:
          "Aplicativo mobile desenvolvido com React Native e Expo para gerenciar finanças pessoais, integrado à API CashyBank.",
        technologies: ["React Native", "Expo", "TypeScript"],
        githubUrl: "https://github.com/IsaqueTADS/app-native-cashybank",
      },
    ],
  },
  {
    id: "fit-ai",
    title: "Fit.AI - Treinos com Inteligência Artificial",
    projects: [
      {
        id: "treinos-api",
        title: "Fit.AI API",
        description:
          "API RESTful para gerenciamento de treinos e planos de exercícios com integração de IA. Conta com personal trainer virtual via Vercel AI SDK + Gemini 2.5, autenticação com Better Auth e Google OAuth, e ambiente conteinerizado com Docker.",
        technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Better Auth", "Vercel AI SDK", "Gemini", "Docker", "Zod"],
        githubUrl: "https://github.com/IsaqueTADS/treinos-api",
      },
      {
        id: "treinos-frontend",
        title: "Fit.AI Frontend",
        description:
          "Aplicação mobile-first para gerenciamento de treinos com IA. Chat com personal trainer virtual, consistency tracker, streak counter e estatísticas de desempenho.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "better-auth", "AI SDK"],
        githubUrl: "https://github.com/IsaqueTADS/treinos-frontend",
        demoUrl: "https://apptreinos.isaque.dev.br/",
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
  {
    id: "dogs",
    title: "Dogs - Rede Social para Cachorros",
    description:
      "Rede social para fotos de cachorros com feed, sistema de comentários, upload de imagens e estatísticas. Projeto desenvolvido durante o curso de React da Origamid.",
    technologies: ["React", "JavaScript", "Vite"],
    githubUrl: "https://github.com/IsaqueTADS/Dogs",
  },
]

export const projectsExperience: Project[] = [
  {
    id: "maria-cristina-neuropsi",
    title: "Maria Cristina · Psicóloga e Neuropsicóloga",
    description:
      "Landing page profissional para cliente (trabalho freelance) com design autoral em paleta terracota, otimizada para performance mobile e publicada via export estático.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://mariacristinaneuropsi.com.br/",
    badge: "Freelance",
    privateCode: true,
    role: "Freelance · UI/UX e Desenvolvimento",
  },
  {
    id: "gympass-api",
    title: "GymPass API",
    description:
      "API RESTful para sistema de check-ins em academias com geolocalização. Permite aos usuários realizar check-ins em academias próximas, com suporte a busca por localização, validação de check-ins por administradores e métricas pessoais de uso.",
    technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/IsaqueTADS/GymPass-API",
  },
  {
    id: "cashybank-api",
    title: "CashyBank API",
    description:
      "API REST de controle financeiro pessoal. Gerencia transações com autenticação JWT, categorias, paginação, soft delete e documentação interativa via Scalar.",
    technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Zod", "JWT", "Vitest"],
    githubUrl: "https://github.com/IsaqueTADS/CashyBank-API",
  },
  {
    id: "treinos-api",
    title: "Fit.AI",
    description:
      "API RESTful para gerenciamento de treinos com personal trainer virtual via IA. Autenticação com Better Auth + Google OAuth, CI/CD e deploy conteinerizado.",
    technologies: ["Node.js", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Better Auth", "Vercel AI SDK", "Gemini", "Docker"],
    githubUrl: "https://github.com/IsaqueTADS/treinos-api",
  },
  {
    id: "focuz",
    title: "Focuz",
    description:
      "API RESTful para gerenciamento de eventos com pagamentos Stripe, geolocalização, categorização e sistema de destaque. Inclui aplicativo web para descoberta de eventos.",
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