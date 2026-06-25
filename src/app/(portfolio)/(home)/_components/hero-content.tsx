"use client"

import Link from "next/link"
import { Download, Mail } from "lucide-react"
import { Badge } from "../../_components/bagde"
import { Button } from "@/components/ui/button"

export function HeroContent() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Badge>Disponível para freelas</Badge>

      <div className="flex flex-col gap-3">
        <h1 className="font-heading text-5xl leading-tight font-extrabold tracking-tight text-foreground sm:text-7xl">
          Isaque
          <br />
          Rodrigues
        </h1>

        <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
          Fullstack Developer
        </p>
      </div>

      <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
        Construo aplicações web escaláveis com TypeScript, React e Node.js.
        Foco em arquitetura limpa, APIs performáticas e código de qualidade.
      </p>

      <div className="flex gap-3">
        <Button
          nativeButton={false}
          size="lg"
          className="rounded-2xl px-8 py-5 text-xs font-semibold"
          render={(props) => (
            <Link {...props} href="/contact">
              <Mail className="h-3.5 w-3.5" />
              Fale Comigo
            </Link>
          )}
        />

        <Button
          variant="outline"
          size="lg"
          className="rounded-2xl px-6 py-5 text-xs font-semibold"
        >
          <Download className="h-3.5 w-3.5" />
          Download CV
        </Button>
      </div>
    </div>
  )
}
