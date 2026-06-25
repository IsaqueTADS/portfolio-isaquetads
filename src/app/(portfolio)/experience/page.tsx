import type { Metadata } from "next"
import { ExperienceHero } from "./_components/experience-hero"
import { ExperienceTimeline } from "./_components/experience-timeline"
import { EducationTimeline } from "./_components/education-timeline"
import { CertificatesTimeline } from "./_components/certificates-timeline"
import { SkillsSection } from "./_components/skills-section"

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Trajetória profissional de Isaque Rodrigues — formação acadêmica, certificados, projetos e habilidades técnicas.",
}

export default function Page() {
  return (
    <div className="flex px-4">
      <div className="flex w-full flex-col gap-16">
        <ExperienceHero />
        <EducationTimeline />
        <CertificatesTimeline />
        <ExperienceTimeline />
        <SkillsSection />
      </div>
    </div>
  )
}