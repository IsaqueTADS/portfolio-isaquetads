import type { Metadata } from "next"
import { HeroAbout } from "./_components/hero"
import { Skills } from "./_components/skills"
import { Timeline } from "./_components/timeline"
import { Differentials } from "./_components/differentials"
import { YoutubeSection } from "./_components/youtube"
import { CTA } from "./_components/cta"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Saiba mais sobre Isaque Rodrigues — estudante de ADS no IFNMG, desenvolvedor Full Stack com foco em TypeScript, React e Node.js.",
}

export default function Page() {
  return (
    <div className="flex px-4 ">
      <div className="flex w-full flex-col gap-16">
        <HeroAbout />
        <Skills />
        <Timeline />
        <Differentials />
        <YoutubeSection />
        <CTA />
      </div>
    </div>
  )
}
