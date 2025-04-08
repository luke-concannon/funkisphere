"use client"

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react"

import { useHeaderStore } from "../_store/HeaderStore"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const logoVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
}

export function HeroLogo() {
  const { scrollY } = useScroll()
  const { setHeaderIsShowable, setShowHeader } = useHeaderStore(
    (state) => state
  )

  // Shrink the circles as the user scrolls
  const scale = useTransform(scrollY, [0, 500], [1, 0.2])

  // Move the circles to the top-left corner
  const top = useTransform(scrollY, [0, 500], [0, -300])
  const left = useTransform(scrollY, [0, 500], [0, -300])

  // const y = useMotionValue(0)

  // useMotionValueEvent(y, "animationStart", () => {
  //   console.log("animation started on y")
  // })

  // useMotionValueEvent(y, "change", (latest) => {
  //   console.log("y changed to", latest)
  // })

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0
    const diff = current - previous

    console.log(previous)
  })

  return (
    <motion.div
      className="flex aspect-square size-full max-w-[800px] flex-wrap items-center"
      // style={{ scale, top, left }}

      // onViewportEnter={() => {
      //   setShowHeader(false)
      //   setHeaderIsShowable(false)
      // }}
      // onViewportLeave={() => {
      //   setHeaderIsShowable(true)
      // }}
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-foreground size-1/3 rounded-full"
          // variants={logoVariants}
          // drag
          // dragMomentum={false}
          // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // dragElastic={0.1}
        />
      ))}
    </motion.div>
  )
}
