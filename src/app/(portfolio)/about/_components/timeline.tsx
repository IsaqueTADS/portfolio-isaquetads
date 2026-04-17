"use client"

const experience = [
  {
    title: "IFNMG - ADS",
    subtitle: "Em andamento",
    description: "Estudante de Análise e Desenvolvimento de Sistemas",
  },
  {
    title: "Dev Full Stack (Freelance)",
    subtitle: "Desenvolvedor",
    description: "Construção de aplicações web escaláveis e seguras",
  },
  {
    title: "Content Creator (YouTube)",
    subtitle: "Criador de conteúdo",
    description: "Compartilhando conhecimento sobre desenvolvimento",
  },
]

export function Timeline() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Experiência & Jornada
      </h2>

      <div className="flex flex-col gap-8 pl-4">
        {experience.map((item, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-foreground" />
              {index < experience.length - 1 && (
                <div className="h-20 w-px bg-border" />
              )}
            </div>
            <div className="flex flex-col gap-1 pb-8">
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
