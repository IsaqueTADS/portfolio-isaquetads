import { certificates, type Certificate } from "@/data/certificates"

function CertificateItem({ cert, index, total }: { cert: Certificate; index: number; total: number }) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <span className="h-3 w-3 rounded-full bg-foreground" />
        {index < total - 1 && <div className="h-32 w-px bg-border" />}
      </div>
      <div className="flex flex-col gap-2 pb-8">
        <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
        <p className="text-sm font-medium text-primary">
          {cert.institution} · {cert.date}
        </p>
        {cert.technologies && cert.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {cert.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {cert.description && (
          <p className="text-sm text-muted-foreground">{cert.description}</p>
        )}
        <a
          href={cert.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
        >
          Ver Certificado →
        </a>
      </div>
    </div>
  )
}

export function CertificatesTimeline() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Certificados
      </h2>

      <div className="flex flex-col gap-8 pl-4">
        {certificates.map((cert, index) => (
          <CertificateItem
            key={cert.id}
            cert={cert}
            index={index}
            total={certificates.length}
          />
        ))}
      </div>
    </section>
  )
}