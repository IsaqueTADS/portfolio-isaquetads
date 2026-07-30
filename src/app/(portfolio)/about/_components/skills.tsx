import { skills } from "@/data/skills"

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  mobile: "Mobile",
  tools: "Ferramentas",
  other: "Outros",
}

export function Skills() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>
  )

  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Skills & Tecnologias
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div
            key={category}
            className="flex flex-col gap-4 rounded-2xl bg-secondary p-6"
          >
            <h3 className="text-sm font-semibold text-foreground capitalize">
              {categoryLabels[category] || category}
            </h3>
            <ul className="flex flex-col gap-2">
              {categorySkills.map((skill) => (
                <li key={skill.id} className="text-sm text-muted-foreground">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
