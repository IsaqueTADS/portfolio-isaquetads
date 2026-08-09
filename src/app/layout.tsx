import { Geist, Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Isaque Rodrigues",
    default: "Isaque Rodrigues | Fullstack Developer",
  },
  description:
    "Portfólio de Isaque Rodrigues — Desenvolvedor Full Stack especializado em TypeScript, React e Node.js.",
  metadataBase: new URL("https://portfolio.isaque.dev.br"),
  openGraph: {
    title: "Isaque Rodrigues | Fullstack Developer",
    description:
      "Desenvolvedor Full Stack especializado em TypeScript, React e Node.js.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon-isaque-portfolio-light.png",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-isaque-portfolio-light.webp",
        type: "image/webp",
      },
      {
        url: "/favicons/favicon-isaque-portfolio-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicons/favicon-isaque-portfolio-dark.webp",
        type: "image/webp",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
