"use client"

import { useScroll } from "motion/react"

import { Logo } from "./Logo"

export function Footer(): React.ReactElement {
  const { scrollYProgress } = useScroll()

  return (
    <footer className="bg-foreground fixed bottom-0 flex w-full items-center justify-between p-10">
      <Logo colour="salmon" />
      <p className="text-background text-sm font-bold">
        Made with ❤️ by Lumirari
      </p>
    </footer>
  )
}
