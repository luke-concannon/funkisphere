"use client"

import { HeroLogo } from "./HeroLogo"
import { HeroTitle } from "./HeroTitle"

export function HeroSection(): React.ReactElement {
  return (
    <div className="relative flex min-h-dvh">
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 p-10">
        <HeroLogo />
      </div>
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 p-10">
        <HeroTitle />
      </div>
    </div>
  )
}
