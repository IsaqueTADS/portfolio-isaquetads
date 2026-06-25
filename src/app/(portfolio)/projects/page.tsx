import type { Metadata } from "next"
import { ProjectsHero } from "./_components/projects-hero"
import { ProjectsGrid } from "./_components/projects-grid"

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Conheça os projetos de Isaque Rodrigues: GymPass API, Focuz, Fintech Dashboard e mais.",
}

export default function Page() {
  return (
    <div className="flex px-4">
      <div className="flex w-full flex-col gap-16">
        <ProjectsHero />
        <ProjectsGrid />
      </div>
    </div>
  )
}
