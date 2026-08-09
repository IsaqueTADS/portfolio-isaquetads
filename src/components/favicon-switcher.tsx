"use client"

import * as React from "react"
import { useTheme } from "next-themes"

function getFaviconLink() {
  return (
    document.querySelector<HTMLLinkElement>(
      'link[rel="icon"][type="image/png"]'
    ) ?? document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  )
}

function FaviconSwitcher() {
  const { resolvedTheme } = useTheme()

  React.useEffect(() => {
    const link = getFaviconLink()

    if (!link) {
      return
    }

    const dark = resolvedTheme === "dark"
    link.href = dark
      ? "/favicons/favicon-isaque-portfolio-dark.png"
      : "/favicons/favicon-isaque-portfolio-light.png"
  }, [resolvedTheme])

  return null
}

export { FaviconSwitcher }
