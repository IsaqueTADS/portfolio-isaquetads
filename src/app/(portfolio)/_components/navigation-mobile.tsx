"use client"

import Link from "next/link"
import { MenuMobile } from "./menu-mobile"
import { NavItems } from "./navigation"

export function NavigationMobile({ navItems }: { navItems: NavItems }) {
  return (
    <nav className="flex w-full justify-between">
      <MenuMobile navItems={navItems} />{" "}
      <Link href={"/"} className="text-lg font-bold px-3">
        IsaqueTADS
      </Link>
    </nav>
  )
}
