"use client"

import { MapPin, Clock, Download, Mail, Link2 } from "lucide-react"
import { Badge } from "../../_components/bagde"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/IsaqueTADS" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/isaque-rodriguestads",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC1ZcpOjaVvdP5d1Z0Z_HKsw",
  },
]

function SocialIcon({ name }: { name: string }) {
  if (name === "GitHub") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
  if (name === "LinkedIn") {
    return <Link2 className="h-5 w-5" />
  }
  if (name === "Twitter") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  if (name === "YouTube") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
  return null
}

export function HeroContent() {
  return (
    <div className="flex w-full flex-col gap-9">
      <Badge>Disponível para trabalhos</Badge>

      <div className="flex flex-col gap-1 sm:gap-6">
        <h1 className="w-full font-heading text-5xl leading-none font-extrabold tracking-tight text-foreground sm:text-7xl">
          Olá sou Isaque
          <br />
          Rodrigues
        </h1>

        <div className="flex h-14 w-full items-center gap-0">
          <span className="font-heading text-3xl font-extrabold text-foreground sm:text-5xl">
            Fullstack Developer
          </span>
          <div className="ml-6 h-14 w-px bg-border" />
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground sm:w-120">
        Full Stack Developer | ADS Student @ IFNMG | TypeScript • React •
        Node.js • Tailwind • shadcn/ui • MySQL • PostgreSQL • Prisma • Drizzle
      </p>

      <div className="flex h-5 w-full items-center gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-2.5 text-stone-600" />
          <span className="text-xs font-medium text-stone-600">Brasil</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-3 w-3 text-stone-600" />
          <span className="text-xs font-medium text-stone-600">
            Disponível Agora
          </span>
        </div>
      </div>

      <div className="flex w-full gap-3">
        <Button
          variant={"default"}
          className="flex items-center gap-2 rounded-2xl px-9 py-5 text-xs font-semibold text-background"
        >
          <Mail className="h-2 w-2.5" />
          Hire Me
        </Button>
        <Button className="flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-5 text-xs font-semibold text-stone-600">
          <Download className="h-3 w-3" />
          Download CV
        </Button>
      </div>

      <div className="flex w-full items-center gap-6 border-t border-border pt-6">
        <span className="text-sm font-semibold text-foreground">
          Follow me:
        </span>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 transition-colors hover:text-foreground"
            >
              <SocialIcon name={link.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
