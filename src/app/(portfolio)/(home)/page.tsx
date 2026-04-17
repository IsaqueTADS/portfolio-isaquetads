import { HeroContent } from "./_components/hero-content"
import { HeroIllustration } from "./_components/hero-illustration"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex justify-center px-4">
        <div className="flex w-full items-center justify-between gap-12">
          <HeroContent />
          <HeroIllustration />
        </div>
      </main>
    </div>
  )
}
