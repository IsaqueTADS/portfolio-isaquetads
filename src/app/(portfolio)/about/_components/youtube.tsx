import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function YoutubeSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-bold text-foreground">
        Conteúdo Educativo
      </h2>

      <Link
        href="https://www.youtube.com/channel/UC1ZcpOjaVvdP5d1Z0Z_HKsw"
        target="_blank"
        className="flex w-fit items-center gap-4 rounded-2xl bg-secondary p-6 transition-colors hover:bg-accent"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-foreground transition-transform duration-200 group-hover:scale-105">
          <svg
            className="h-7 w-7 text-background"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-foreground">Acompanhe no YouTube</p>
          <p className="text-sm text-muted-foreground">Ver Canal</p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground" />
      </Link>
    </section>
  )
}
