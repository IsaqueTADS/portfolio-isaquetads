"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="flex flex-col gap-8 rounded-2xl border border-border/40 bg-secondary/40 p-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Contato
        </p>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-sm text-muted-foreground max-w-md">
          Estou disponível para projetos freelance e oportunidades de colaboração.
        </p>
      </div>

      <div className="flex gap-3">
        <Button size="lg" className="gap-2">
          <Mail className="h-4 w-4" />
          Hire Me
          <ArrowRight className="h-3.5 w-3.5 opacity-70" />
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <Download className="h-4 w-4" />
          Download CV
        </Button>
      </div>
    </section>
  )
}