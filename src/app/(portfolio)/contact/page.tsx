import type { Metadata } from "next"
import { Badge } from "../_components/bagde"
import { Mail, Link2, ArrowRight } from "lucide-react"

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
    href: "https://linkedin.com/in/isaquetads",
    icon: Link2,
  },
]

export default function Page() {
  return (
    <div className="flex px-4">
      <div className="flex w-full flex-col gap-16 min-h-screen">
        <section className="flex flex-col gap-6">
          <Badge>Contato</Badge>

          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-5xl sm:text-7xl leading-tight font-extrabold tracking-tight text-foreground">
              Vamos trabalhar juntos?
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Estou disponível para projetos freelance e oportunidades de
              colaboração. Entre em contato!
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Canais de Contato
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
              >
                <method.icon className="h-6 w-6 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-muted-foreground">
                    {method.title}
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-2xl border border-border/40 bg-secondary/40 p-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Mande uma mensagem
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Prefere enviar um email diretamente? Clique no botão abaixo!
            </p>
          </div>

          <a
            href="mailto:isaqueservicedev@gmail.com"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80"
          >
            <Mail className="h-4 w-4" />
            Enviar Email
            <ArrowRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </section>
      </div>
    </div>
  )
}