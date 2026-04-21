export interface Language {
  name: string
  level: string
}

export interface Skill {
  id: string
  name: string
  category: "frontend" | "backend" | "database" | "tools" | "other"
}

export const languages: Language[] = [
  { name: "Inglês", level: "Técnico Básico" },
  { name: "Português", level: "Nativo" },
]

export const skills: Skill[] = [
  { id: "react", name: "React", category: "frontend" },
  { id: "typescript", name: "TypeScript", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend" },
  { id: "nextjs", name: "Next.js", category: "frontend" },
  { id: "nodejs", name: "Node.js", category: "backend" },
  { id: "express", name: "Express", category: "backend" },
  { id: "fastify", name: "Fastify", category: "backend" },
  { id: "prisma", name: "Prisma", category: "database" },
  { id: "postgresql", name: "PostgreSQL", category: "database" },
  { id: "mysql", name: "MySQL", category: "database" },
  { id: "git", name: "Git", category: "tools" },
  { id: "docker", name: "Docker", category: "tools" },
]