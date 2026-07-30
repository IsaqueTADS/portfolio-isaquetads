export interface Language {
  name: string
  level: string
}

export interface Skill {
  id: string
  name: string
  category: "frontend" | "backend" | "database" | "mobile" | "tools" | "other"
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
  { id: "shadcn", name: "shadcn/ui", category: "frontend" },
  { id: "vite", name: "Vite", category: "frontend" },
  { id: "nodejs", name: "Node.js", category: "backend" },
  { id: "express", name: "Express", category: "backend" },
  { id: "fastify", name: "Fastify", category: "backend" },
  { id: "zod", name: "Zod", category: "backend" },
  { id: "jwt", name: "JWT", category: "backend" },
  { id: "stripe", name: "Stripe", category: "backend" },
  { id: "vitest", name: "Vitest", category: "backend" },
  { id: "prisma", name: "Prisma", category: "database" },
  { id: "drizzle", name: "Drizzle ORM", category: "database" },
  { id: "postgresql", name: "PostgreSQL", category: "database" },
  { id: "mysql", name: "MySQL", category: "database" },
  { id: "react-native", name: "React Native", category: "mobile" },
  { id: "expo", name: "Expo", category: "mobile" },
  { id: "git", name: "Git", category: "tools" },
  { id: "docker", name: "Docker", category: "tools" },
  { id: "ai-llm", name: "AI/LLMs", category: "tools" },
  { id: "aws", name: "AWS EC2", category: "tools" },
  { id: "cicd", name: "CI/CD", category: "tools" },
]