"use client"

import { useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"

import { Logo } from "./Logo"

export function Header(): React.ReactElement {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(true)

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    const diff = current - previous
    setIsVisible(diff < 0)
  })

  return (
    <header
      className={`bg-foreground fixed top-0 z-50 flex w-full items-center justify-between p-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Logo colour="salmon" />
    </header>
  )
}
