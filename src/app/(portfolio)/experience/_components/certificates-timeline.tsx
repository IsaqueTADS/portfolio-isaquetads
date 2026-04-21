import { FileText } from "lucide-react"
import { certificates } from "@/data/certificates"

export function CertificatesTimeline() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Certificados
      </h2>

      <div className="flex flex-col gap-3">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:bg-secondary/50"
          >
            <FileText className="h-5 w-5 shrink-0 text-primary" />
            <div className="flex flex-1 flex-col gap-0.5">
              <h3 className="text-base font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.institution} · {cert.date}
              </p>
            </div>
            {cert.technologies && cert.technologies.length > 0 && (
              <div className="hidden flex-wrap gap-1.5 sm:flex">
                {cert.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}