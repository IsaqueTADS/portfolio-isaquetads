"use client"

import Link from "next/link"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/IsaqueTADS" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isaque-rodriguestads",
  },
]

export function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between gap-6 bg-background px-10 py-8 mt-10">
      <div className="flex w-full items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 Isaque Rodrigues, Todos os direitos reservados.
        </p>

        <div className="flex h-4 gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
