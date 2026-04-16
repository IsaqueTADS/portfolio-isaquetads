import { Footer } from "./_components/footer"
import { Header } from "./_components/header"

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="flex flex-col mx-auto max-w-7xl min-h-screen">
    <Header />

    <main className="flex-1 border-b">
      {children}
    </main>

    <Footer />
  </div>
}