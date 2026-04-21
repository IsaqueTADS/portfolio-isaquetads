"use client"

import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { Briefcase, Code, Home, Mail, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavigationMobile } from "./navigation-mobile"
import { ModeToggle } from "./mode-toggle"

const navItems = [
  { label: "Home", href: "/", icon: Home, size: 15 },
  { label: "About", href: "/about", icon: User, size: 15 },
  { label: "Projects", href: "/projects", icon: Code, size: 15 },
  { label: "Experience", href: "/experience", icon: Briefcase, size: 15 },
  { label: "Contact", href: "/contact", icon: Mail, size: 15 },
] as const

export type NavItems = typeof navItems

export function Navigation() {
  const pathname = usePathname()
  const isMobile = useIsMobile()

  if (isMobile) {
    return <NavigationMobile navItems={navItems} />
  }

  return (
    <nav className="flex items-center justify-center gap-4 rounded-full border border-border bg-background px-2 py-1 shadow-[0_4px_17.5px_rgba(0,0,0,0.08)] sm:fixed sm:top-5 sm:z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Button
            key={item.href}
            variant={isActive ? "default" : "ghost"}
            className={"rounded-3xl py-4"}
          >
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              data-active={isActive ? "true" : undefined}
            >
              <item.icon size={item.size} />
              <span>{item.label}</span>
            </Link>
          </Button>
        )
      })}
      <ModeToggle />
    </nav>
  )
}
