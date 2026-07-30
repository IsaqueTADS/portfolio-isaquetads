"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type TechCarouselSize = "sm" | "md" | "lg"
type TechCarouselVariant = "square" | "rectangle"

interface TechCarouselProps {
  size?: TechCarouselSize
  variant?: TechCarouselVariant
}

const config: Record<
  TechCarouselSize,
  { icon: string; gap: string; negativeGap: string }
> = {
  sm: {
    icon: "size-12 sm:size-14",
    gap: "pl-[5px] md:pl-[6px]",
    negativeGap: "-ml-[5px] md:-ml-[6px]",
  },
  md: {
    icon: "size-14 sm:size-16",
    gap: "pl-3 md:pl-4",
    negativeGap: "-ml-3 md:-ml-4",
  },
  lg: {
    icon: "size-16 sm:size-20",
    gap: "pl-4 md:pl-5",
    negativeGap: "-ml-4 md:-ml-5",
  },
}

const skillIcons = [
  { name: "React", id: "react" },
  { name: "TypeScript", id: "ts" },
  { name: "Next.js", id: "nextjs" },
  { name: "Node.js", id: "nodejs" },
  { name: "Tailwind CSS", id: "tailwind" },
  { name: "Prisma", id: "prisma" },
  { name: "PostgreSQL", id: "postgres" },
  { name: "Docker", id: "docker" },
  { name: "Git", id: "git" },
  { name: "Express", id: "express" },
]

const externalIcons = [
  {
    name: "Fastify",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg",
  },
  {
    name: "React Native",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
  },
]

const variantClass: Record<TechCarouselVariant, string> = {
  square: "aspect-square",
  rectangle: "aspect-[4/3]",
}

export function TechCarousel({
  size = "md",
  variant = "square",
}: TechCarouselProps) {
  const { icon: iconClass, gap, negativeGap } = config[size]
  const baseContainer = `flex items-center justify-center rounded-2xl w-fit ${variantClass[variant]}`
  const externalContainer = `${baseContainer} border border-border bg-secondary/40`

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
        duration: 50,
      }}
      plugins={[
        Autoplay({
          delay: 800,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className={negativeGap}>
        {skillIcons.map((tech) => (
          <CarouselItem
            key={tech.name}
            className={`basis-1/4 flex justify-center md:basis-1/5 lg:basis-1/6 ${gap}`}
          >
            <div className={baseContainer}>
              <Image
                src={`https://skillicons.dev/icons?i=${tech.id}`}
                alt={tech.name}
                width={80}
                height={80}
                className={iconClass}
                unoptimized
              />
            </div>
          </CarouselItem>
        ))}
        {externalIcons.map((tech) => (
          <CarouselItem
            key={tech.name}
            className={`basis-1/4 flex justify-center md:basis-1/5 lg:basis-1/6 ${gap}`}
          >
            <div className={externalContainer}>
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}
                height={80}
                className={iconClass}
                unoptimized
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
