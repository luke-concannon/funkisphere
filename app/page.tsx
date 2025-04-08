import { Card } from "@/components/ui/card"

import { HeroSection } from "./_components/HeroSection"
import { SquiggleWorm1 } from "./_components/squiggles/SquiggleWorm1"
import { SquiggleWorm2 } from "./_components/squiggles/SquiggleWorm2"
import { SquiggleWorm3 } from "./_components/squiggles/SquiggleWorm3"
import { SquiggleWorm4 } from "./_components/squiggles/SquiggleWorm4"
import { SquiggleWorm5 } from "./_components/squiggles/SquiggleWorm5"
import { SquiggleWorm6 } from "./_components/squiggles/SquiggleWorm6"
import { SquiggleWorm7 } from "./_components/squiggles/SquiggleWorm7"

export default function HomePage(): React.ReactElement {
  return (
    <main className="">
      <HeroSection />

      <div className="flex h-dvh w-full flex-col items-center justify-start" />
      <div className="h-dvh w-full" />
      <div className="h-dvh w-full" />
      {/* 
      <div className="w-full">
        <SquiggleWorm1 colour="purple" />
      </div>
      <div className="w-full">
        <SquiggleWorm2 colour="lime" />
      </div>
      <div className="w-full">
        <SquiggleWorm3 colour="burgundy" />
      </div>
      <div className="w-full">
        <SquiggleWorm4 />
      </div>
      <div className="w-full">
        <SquiggleWorm5 colour="lime" />
      </div>
      <div className="w-full">
        <SquiggleWorm6 colour="burgundy" />
      </div>
      <div className="w-full">
        <SquiggleWorm7 />
      </div> */}
    </main>
  )
}
