"use client"

import Image from "next/image"
import { MapPin, Clock } from "lucide-react"

export function HeroAbout() {
  return (
    <section className="flex gap-12">
      <div className="flex w-[60%] flex-col gap-6">
        <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          <span className="text-xs font-medium text-foreground">
            Desenvolvedor Full Stack
          </span>
        </div>

        <h1 className="font-heading text-[72px] leading-none font-extrabold tracking-[-1.8px] text-foreground">
          Sobre Mim
        </h1>

        <div className="flex items-center gap-6">
          <h2 className="font-heading text-[48px] font-extrabold text-foreground">
            Isaque Rodrigues
          </h2>
          <div className="h-12 w-px bg-border" />
        </div>

        <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas pelo IFNMG e
            Desenvolvedor Full Stack focado na construção de aplicações web
            escaláveis e seguras.
          </p>
          <p>
            Experiência no ecossistema moderno de JavaScript/TypeScript, atuando
            com Node.js (Express, Fastify) no backend e React.js no frontend.
          </p>
          <p>
            Conhecimento em bancos de dados relacionais como MySQL e PostgreSQL,
            utilizando Prisma e Drizzle ORM para modelagem de dados e otimização
            de performance.
          </p>
          <p>
            Focado em arquitetura limpa, boas práticas de desenvolvimento e
            autenticação baseada em JWT. Em constante evolução técnica, buscando
            projetar e entregar soluções robustas, sustentáveis e prontas para
            produção.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Brasil</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>IFNMG + Freelance</span>
          </div>
        </div>
      </div>

      <div className="flex w-[40%] items-start justify-center">
        <div className="relative h-100 w-100 overflow-hidden rounded-full">
          <Image
            src="/foto-perfil-isaquetads.jpg"
            alt="Isaque Rodrigues"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
