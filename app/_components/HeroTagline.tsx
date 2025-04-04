"use client"

import { motion } from "motion/react"

const taglineVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 1.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
}

export function HeroTagline() {
  return (
    <motion.div variants={taglineVariants} initial="hidden" animate="visible">
      <p className="font-sans font-bold text-white">
        The creative mahi of Milo Haigh
      </p>
    </motion.div>
  )
}
