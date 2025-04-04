import "../styles/globals.css"

import type { ReactElement } from "react"
import { Bungee, Bungee_Outline, Inter, Open_Sans } from "next/font/google"

import { TextPressure } from "../blocks/TextAnimations/TextPressure"
import { HeroLogo } from "./_components/HeroLogo"
import { HeroTagline } from "./_components/HeroTagline"
import { HeroTitle } from "./_components/HeroTitle"
import { Logo } from "./_components/Logo"
import { ParticlesBackground } from "./_components/ParticlesBackground"
import { SquiggleWorm } from "./_components/SquiggleWorm"

const openSans = Open_Sans({
  display: "swap",
  variable: "--font-openSans",
  subsets: ["latin"],
})

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  subsets: ["latin"],
})

const bungee = Bungee({
  weight: "400",
  display: "swap",
  variable: "--font-bungee",
  subsets: ["latin"],
})

const bungeeOutline = Bungee_Outline({
  weight: "400",
  display: "swap",
  variable: "--font-bungeeOutline",
  subsets: ["latin"],
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "The Funkisphere | Keeping things funky",
  description:
    "Keeping things funky for kids in the Bay. Dance classes and other weird and wonderful good times.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): ReactElement {
  return (
    <html
      className={`${openSans.variable} ${bungee.variable} ${bungeeOutline.variable} ${inter.variable}`}
      lang="en"
    >
      <body className="w-screen overflow-x-hidden">
        <div className="bg-background relative flex min-h-dvh w-full items-center justify-center overflow-hidden">
          <div className="fixed h-screen w-screen">
            <ParticlesBackground />
          </div>
          <div className="absolute w-full">
            <HeroLogo />
          </div>

          <div className="w-3/4">
            <HeroTitle />
          </div>

          {/* <div className="fixed top-10 left-1/2 -translate-x-1/2">
            <HeroTagline />
          </div> */}

          {/* <SquiggleWorm colour="lime" className="min-w-[640px]" /> */}
          {/* <div className="flex size-1/3"> */}
          {/* <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-visible text-center">
              <h1 className="font-serif text-7xl text-black">Funkisphere</h1>
              <p className="font-sans text-3xl text-black/50">
                Keeping things funky for kids in the bay
              </p>
            </div> */}

          {/* </div> */}
          {/* </div> */}
          {/* <div className="bg-foreground h-dvh"></div> */}
          {/* <Header /> */}
        </div>
        <div className="bg-foreground relative flex min-h-dvh w-full items-center justify-center overflow-hidden">
          <SquiggleWorm colour="salmon" />
        </div>
        <div className="bg-background relative flex min-h-dvh w-full items-center justify-center overflow-hidden">
          <SquiggleWorm />
        </div>
        {children}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-background fixed top-0 left-0 flex h-20 w-full items-center justify-between px-8 py-4">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="font-family-serif text-2xl">The Funkisphere</h1>
      </div>
      <nav className="flex items-center gap-4">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}
