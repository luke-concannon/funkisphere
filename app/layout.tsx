import "../styles/globals.css"

import type { ReactElement } from "react"
import { Bungee, Bungee_Outline, Open_Sans } from "next/font/google"

import { Logo } from "./_components/Logo"
import { SquiggleWorm } from "./_components/SquiggleWorm"

const openSans = Open_Sans({
  display: "swap",
  variable: "--font-openSans",
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
      className={`${openSans.variable} ${bungee.variable} ${bungeeOutline.variable}`}
      lang="en"
    >
      <body className="w-screen overflow-x-hidden">
        <div className="flex w-full flex-col items-center">
          <div className="bg-background flex h-dvh w-full items-center justify-center">
            {/* <SquiggleWorm colour="lime" className="min-w-[640px]" /> */}
            {/* <div className="flex size-1/3"> */}
            <Logo />
            {/* </div> */}
          </div>
          {/* <div className="bg-foreground h-dvh"></div> */}
          {/* <Header /> */}

          {children}
        </div>
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
