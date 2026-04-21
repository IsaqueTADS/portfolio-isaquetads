import { Badge } from "../../_components/bagde"

export function ProjectsHero() {
  return (
    <section className="flex flex-col gap-6">
      <Badge>Projetos</Badge>

      <div className="flex flex-col gap-4 mb-5">
        <h1 className="font-heading text-3xl sm:text-5xl leading-none font-extrabold tracking-tight text-foreground">
          Meus Projetos
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Uma coleção de projetos que desenvolvi para praticar e explorar
          diferentes tecnologias. Cada projeto traz desafios únicos e
          oportunidades de aprendizado.
        </p>
      </div>
    </section>
  )
}
