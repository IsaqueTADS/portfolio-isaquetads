import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="flex flex-col gap-8 rounded-2xl border border-border/40 bg-secondary/40 p-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Contato
        </p>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Vamos trabalhar juntos?
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Estou disponível para projetos freelance e oportunidades de
          colaboração.
        </p>
      </div>

      <Link
        href="/contact"
        className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
      >
        <Mail className="h-4 w-4" />
        Fale Comigo
        <ArrowRight className="h-3.5 w-3.5 opacity-70" />
      </Link>
    </section>
  )
}