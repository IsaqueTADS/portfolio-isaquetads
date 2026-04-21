"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import { NavItems } from "./navigation"

export function NavigationDesktop({ navItems }: { navItems: NavItems }) {
  const pathname = usePathname()

  return (
    <nav className="fixed hidden items-center justify-center gap-4 rounded-full border border-border bg-background px-2 py-1 shadow-[0_4px_17.5px_rgba(0,0,0,0.08)] sm:fixed sm:top-5 sm:z-50 sm:flex">
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
