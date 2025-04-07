import { HeroLogo } from "./_components/HeroLogo"
import { HeroTitle } from "./_components/HeroTitle"
import { SquiggleWorm1 } from "./_components/SquiggleWorm1"
import { SquiggleWorm2 } from "./_components/SquiggleWorm2"
import { SquiggleWorm3 } from "./_components/SquiggleWorm3"
import { SquiggleWorm4 } from "./_components/SquiggleWorm4"
import { SquiggleWorm5 } from "./_components/SquiggleWorm5"
import { SquiggleWorm6 } from "./_components/SquiggleWorm6"
import { SquiggleWorm7 } from "./_components/SquiggleWorm7"

export default function HomePage(): React.ReactElement {
  return (
    <main className="">
      <HeroSection />
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
      </div>
    </main>
  )
}

function HeroSection(): React.ReactElement {
  return (
    <div className="relative flex min-h-dvh">
      <div className="w-full p-10">
        <HeroLogo />
      </div>
      <div className="absolute flex min-h-dvh w-full flex-col justify-end p-10">
        <HeroTitle />
      </div>
    </div>
  )
}
