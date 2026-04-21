"use client"

import Link from "next/link"
import { MenuMobile } from "./menu-mobile"
import { NavItems } from "./navigation"
import { ModeToggle } from "./mode-toggle"

export function NavigationMobile({ navItems }: { navItems: NavItems }) {
  return (
    <nav className="flex w-full justify-between">
      <MenuMobile navItems={navItems} />{" "}
      <Link href={"/"} className="px-3 text-lg font-bold">
        IsaqueTADS
      </Link>
      <ModeToggle />
    </nav>
  )
}
