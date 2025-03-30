import "../styles/globals.css"

import type { ReactElement } from "react"
import { Bungee, Bungee_Outline, Open_Sans } from "next/font/google"

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
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html
      className={`${openSans.variable} ${bungee.variable} ${bungeeOutline.variable}`}
      lang="en"
    >
      <body className="w-screen bg-white">
        <div className="flex h-dvh">
          <SquiggleWorm colour="lime" />
          {/* <SquiggleWorm colour="salmon" />
        <SquiggleWorm />

        <div className="bg-foreground">
          <SquiggleWorm colour="salmon" />
        </div> */}

          {children}
        </div>
      </body>
    </html>
  )
}
