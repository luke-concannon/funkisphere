"use client"

import { Bars2Icon } from "@heroicons/react/24/outline"
import { useMotionValueEvent, useScroll } from "motion/react"

import { Button } from "@/components/ui/button"

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
      className={`fixed top-0 z-50 flex w-full items-center justify-between bg-white/50 px-10 py-4 backdrop-blur-3xl transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="size-10">
        <Logo />
      </div>
      <Button
        className="h-10 w-10 border-none bg-transparent sm:hidden"
        variant="outline"
        onClick={() => { setShowHeader(!showHeader); }}
      >
        <Bars2Icon className="text-funk-lime size-6" />
      </Button>
    </header>
  )
}
