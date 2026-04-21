import { Navigation } from "./navigation"

export function Header() {
  return (
    <header className="fixed sm:relative flex w-full px-4 py-4 sm:items-center sm:justify-center bg-background  ">
      <Navigation />
    </header>
  )
}
