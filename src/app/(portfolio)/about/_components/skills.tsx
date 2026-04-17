"use client"

const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  backend: ["Node.js", "Express", "Fastify"],
  database: ["MySQL", "PostgreSQL", "Prisma", "Drizzle ORM"],
  tools: ["Git", "AI Tools", "Clean Arch", "SOLID"],
}

export function Skills() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Skills & Tecnologias
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col gap-4 rounded-2xl bg-secondary p-6"
          >
            <h3 className="text-sm font-semibold text-foreground capitalize">
              {category}
            </h3>
            <ul className="flex flex-col gap-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
