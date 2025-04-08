"use client"

import Image from "next/image"

import { HeroLogo } from "./HeroLogo"
import { HeroTitle } from "./HeroTitle"
import { SquiggleWorm6 } from "./squiggles/SquiggleWorm6"

export function HeroSection(): React.ReactElement {
  return (
    <div className="from-funk-salmon to-funk-salmon via-funk-purple/80 relative flex min-h-dvh max-w-screen flex-col bg-gradient-to-b">
      <div className="sticky top-0 z-50 flex w-full justify-between gap-10 overflow-hidden pt-10">
        <div className="w-1/2 sm:w-1/4">
          <Image
            src="/images/hand-pointing-right.png"
            alt="Funkisphere"
            width={600}
            height={600}
            style={{ objectFit: "contain" }}
            className="relative -left-6"
          />
        </div>
        <div className="w-1/2 sm:w-1/4">
          <Image
            src="/images/hand-pointing-left.png"
            alt="Funkisphere"
            width={600}
            height={600}
            style={{ objectFit: "contain" }}
            className="relative -right-6"
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 max-h-full w-4/5 -translate-x-1/2 -translate-y-1/2 md:w-1/2">
        <HeroLogo />
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          <HeroTitle />
        </div>
      </div>

      {/* <div className="flex items-center justify-center">
        <SquiggleWorm6 className="" colour="lime" />
      </div> */}
    </div>
  )
}
