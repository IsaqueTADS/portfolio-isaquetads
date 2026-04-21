"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItems } from "./navigation"

export function MenuMobile({ navItems }: { navItems: NavItems }) {
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={(props) => (
          <Button
            {...props}
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-xl border-border/60 bg-background/80 shadow-sm backdrop-blur-sm"
          >
            <Menu className="h-4 w-4 text-foreground" />
          </Button>
        )}
      />

      <DropdownMenuContent
        className="w-52 rounded-2xl border border-border/50 bg-background/95 p-1.5 shadow-xl backdrop-blur-md"
        align="start"
        sideOffset={8}
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <DropdownMenuItem
              key={item.href}
              className="rounded-xl p-0 focus:bg-transparent"
              render={(props) => (
                <Link
                  {...props}
                  href={item.href}
                  style={{ animationDelay: `${index * 40}ms` }}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150",
                    "animate-in fade-in slide-in-from-top-1",
                    isActive
                      ? "bg-primary text-background"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-6 w-6 items-center justify-center rounded-md transition-colors",
                      isActive ? "text-background" : "text-muted-foreground",
                    ].join(" ")}
                  >
                    <item.icon size={14} />
                  </span>

                  <span>{item.label}</span>

                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-background/60" />
                  )}
                </Link>
              )}
            />
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
