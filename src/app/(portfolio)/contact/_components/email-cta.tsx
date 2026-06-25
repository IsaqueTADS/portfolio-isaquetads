"use client"

import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmailCta() {
  return (
    <Button
      nativeButton={false}
      size="lg"
      className="rounded-xl px-6"
      render={(props) => (
        <Link {...props} href="mailto:isaqueservicedev@gmail.com">
          <Mail className="h-4 w-4" />
          Enviar Email
          <ArrowRight className="h-3.5 w-3.5 opacity-70" />
        </Link>
      )}
    />
  )
}
