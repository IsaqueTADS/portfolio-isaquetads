"use client"

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
        <div className="flex-1 h-px bg-border/50" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {differentials.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-secondary/70 p-6 transition-all duration-200 hover:bg-secondary hover:border-border overflow-hidden"
          >
            <span className="absolute right-5 top-4 font-mono text-[64px] font-bold ttext-foreground/3 leading-none select-none">
              0{index + 1}
            </span>

            <span className="text-2xl relative">{item.icon}</span>
            <div className="flex flex-col gap-1.5 relative">
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}