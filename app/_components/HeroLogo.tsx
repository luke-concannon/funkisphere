"use client"

import { motion } from "motion/react"

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
  return (
    <motion.div
      className="relative flex aspect-square flex-1 flex-wrap items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-foreground size-1/3 rounded-full shadow-xl"
          variants={logoVariants}
        />
      ))}
    </motion.div>
  )
}
