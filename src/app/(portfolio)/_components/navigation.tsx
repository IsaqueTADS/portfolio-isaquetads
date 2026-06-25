"use client"

import { NavigationDesktop } from "./navigation-desktop"
import { Briefcase, Code, Home, Mail, User } from "lucide-react"
import { NavigationMobile } from "./navigation-mobile"

const navItems = [
  { label: "Início", href: "/", icon: Home, size: 15 },
  { label: "Sobre", href: "/about", icon: User, size: 15 },
  { label: "Projetos", href: "/projects", icon: Code, size: 15 },
  { label: "Experiência", href: "/experience", icon: Briefcase, size: 15 },
  { label: "Contato", href: "/contact", icon: Mail, size: 15 },
] as const

export type NavItems = typeof navItems

export function Navigation() {
  return (
    <>
      <NavigationDesktop navItems={navItems} />
      <NavigationMobile navItems={navItems} />
    </>
  )
}
