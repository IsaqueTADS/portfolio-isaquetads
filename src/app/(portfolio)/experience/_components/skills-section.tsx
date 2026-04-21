import { languages, skills } from "@/data/skills"

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Banco de Dados",
  tools: "Ferramentas",
  other: "Outros",
}

export function SkillsSection() {
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
        Habilidades & Idiomas
      </h2>

      {languages.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">Idiomas</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">
              {categoryLabels[category] || category}
            </h3>
            <div className="flex flex-col gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill.id}
                  className="text-sm text-muted-foreground"
                >
                  • {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}