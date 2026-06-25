import type { Metadata } from "next"
import { Mail, Link2, ArrowRight } from "lucide-react"
import { Badge } from "../_components/bagde"
import { EmailCta } from "./_components/email-cta"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Isaque Rodrigues para projetos freelance, colaborações e oportunidades.",
}

const contactMethods = [
  {
    id: "email",
    title: "Email",
    value: "isaqueservicedev@gmail.com",
    href: "mailto:isaqueservicedev@gmail.com",
    icon: Mail,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "Isaque Rodrigues",
    href: "https://www.linkedin.com/in/isaque-rodriguestads/",
    icon: Link2,
  },
]

export default function Page() {
  return (
    <div className="flex px-4 min-h-screen">
      <div className="flex w-full flex-col gap-16">
        <section className="flex flex-col gap-6">
          <Badge>Contato</Badge>

          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-foreground sm:text-7xl">
              Entre em Contato
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Estou aberto a novos projetos, colaborações e oportunidades.
              Mande uma mensagem e vamos conversar!
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <method.icon className="h-5 w-5 text-primary" />
              </div>

              <div className="flex flex-1 flex-col gap-0.5">
                <p className="text-sm font-medium text-muted-foreground">
                  {method.title}
                </p>
                <p className="text-base font-semibold text-foreground">
                  {method.value}
                </p>
              </div>

              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </a>
          ))}
        </section>

        <section className="flex flex-col items-start gap-5 rounded-2xl border border-border/40 bg-secondary/40 p-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Vamos trabalhar juntos?
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Tem um projeto em mente? Me envie um email e retornarei o mais
              breve possível.
            </p>
          </div>

          <EmailCta />
        </section>
      </div>
    </div>
  )
}
