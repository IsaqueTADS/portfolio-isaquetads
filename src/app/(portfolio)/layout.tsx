import { Footer } from "./_components/footer"
import { Header } from "./_components/header"

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col">
      <Header />

      <main className="mt-10 flex-1 sm:mt-30">{children}</main>

      <Footer />
    </div>
  )
}
