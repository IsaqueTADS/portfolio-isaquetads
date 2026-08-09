"use client"

import * as React from "react"
import { useTheme } from "next-themes"

const DARK_ICON = "/favicons/favicon-isaque-portfolio-dark.png"
const LIGHT_ICON = "/favicons/favicon-isaque-portfolio-light.png"

function applyFavicon(theme: string | undefined) {
  const dark = theme === "dark"
  const href = `${dark ? DARK_ICON : LIGHT_ICON}?v=${Date.now()}`

  document
    .querySelectorAll('link[rel="icon"]')
    .forEach((link) => link.remove())

  const link = document.createElement("link")
  link.rel = "icon"
  link.type = "image/png"
  link.href = href
  document.head.appendChild(link)
}

function FaviconSwitcher() {
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    applyFavicon(resolvedTheme)
  }, [resolvedTheme])

  return null
}

export { FaviconSwitcher }
