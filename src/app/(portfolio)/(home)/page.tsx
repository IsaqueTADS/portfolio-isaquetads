import type { Metadata } from "next"
import { HeroContent } from "./_components/hero-content"
import { HeroIllustration } from "./_components/hero-illustration"

export const metadata: Metadata = {
  title: "Início",
  description:
    "Isaque Rodrigues — Desenvolvedor Full Stack especializado em TypeScript, React e Node.js. Conheça meu portfólio e projetos.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex justify-center px-4">
        <div className="flex w-full flex-col justify-center items-center gap-12 sm:flex-row sm:justify-between">
          <HeroContent />
          <HeroIllustration />
        </div>
      </main>
    </div>
  )
}
