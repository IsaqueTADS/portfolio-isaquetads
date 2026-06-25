"use client"

import Image from "next/image"

export function HeroIllustration() {
  return (
    <div className="relative">
      <div className="relative h-80 w-72 overflow-hidden rounded-3xl sm:h-112 sm:w-96">
        <div className="absolute inset-0 rounded-3xl ring-1 ring-border/50" />
        <Image
          src="/foto-perfil-isaquetads.jpg"
          alt="Isaque Rodrigues"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
