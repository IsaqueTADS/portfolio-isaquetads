"use client"

import Image from "next/image"

export function HeroIllustration() {
  return (
    <div className="relative h-100 w-90 sm:h-125 sm:w-138">
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
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
