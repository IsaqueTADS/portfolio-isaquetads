const differentials = [
  {
    icon: "🤖",
    title: "Workflow Agêntico",
    description: "Automação de tarefas e processos com AI",
  },
  {
    icon: "🎨",
    title: "AI para Código & Design",
    description: "Utilizo AI para acelerar desenvolvimento e criar designs",
  },
  {
    icon: "🏗️",
    title: "Clean Architecture",
    description: "Código bem estruturado seguindo princípios SOLID",
  },
]

export function Differentials() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-baseline gap-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          O que me diferencia
        </h2>
        <div className="h-px flex-1 bg-border/50" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {differentials.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/40 bg-secondary/70 p-6 transition-all duration-200 hover:border-border hover:bg-secondary"
          >
            <span className="absolute top-4 right-5 font-mono text-7xl leading-none font-bold text-foreground/3 select-none">
              0{index + 1}
            </span>

            <span className="relative text-2xl">{item.icon}</span>
            <div className="relative flex flex-col gap-1.5">
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
