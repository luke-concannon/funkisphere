"use client"

import { useMotionValueEvent, useScroll } from "motion/react"

import { useHeaderStore } from "../_store/HeaderStore"
import { Logo } from "./Logo"

export function Header(): React.ReactElement {
  const { showHeader, setShowHeader, headerIsShowable } = useHeaderStore(
    (state) => state
  )
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    const diff = current - previous
    if (headerIsShowable) {
      setShowHeader(diff <= 0)
    }
  })

  return (
    <header
      className={`bg-background/50 fixed top-0 z-50 flex w-full items-center justify-between px-10 py-4 backdrop-blur transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="size-14">
        <Logo />
      </div>
      <h1 className="text-funk-burgundy text-3xl font-bold">FUNKISPHERE</h1>
    </header>
  )
}
