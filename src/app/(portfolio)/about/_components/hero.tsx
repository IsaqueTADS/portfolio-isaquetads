import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import { Badge } from "../../_components/bagde"

export function HeroAbout() {
  return (
    <section className="flex flex-col sm:gap-12 sm:flex-row">
      <div className="flex flex-col gap-2 sm:w-[60%] sm:gap-6">
        <Badge>Desenvolvedor Full Stack</Badge>
        <h1 className="mt-5 text-4xl leading-none font-extrabold tracking-tight text-foreground sm:mt-0 sm:font-heading sm:text-7xl">
          Sobre Mim
        </h1>

        <div className="flex items-center gap-6">
          <h2 className="font-heading text-3xl font-extrabold text-foreground sm:text-5xl">
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

      <div className="flex items-start justify-center sm:w-[40%]">
        <div className="relative h-200 w-200 overflow-hidden rounded-full">
          <Image
            src="/foto-isaque-about.png"
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
