import { Badge } from "../../_components/bagde"

export function ExperienceHero() {
  return (
    <section className="flex flex-col gap-6">
      <Badge>Experiência</Badge>

      <div className="flex flex-col gap-4 mb-5">
        <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-foreground sm:text-7xl">
          Minha Jornada
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Projetos práticos que desenvolvi para aplicar conhecimentos e
          resolver problemas reais. Cada projeto representa um marco na minha
          evolução como desenvolvedor.
        </p>
      </div>
    </section>
  )
}