"use client"

import Link from "next/link"
import { MenuMobile } from "./menu-mobile"
import { ModeToggle } from "./mode-toggle"
import { NavItems } from "./navigation"

export function NavigationMobile({ navItems }: { navItems: NavItems }) {
  return (
    <nav className="flex w-full justify-between sm:hidden">
      <MenuMobile navItems={navItems} />{" "}
      <Link href={"/"} className="px-3 text-lg font-bold">
        IsaqueTADS
      </Link>
      <ModeToggle />
    </nav>
  )
}
