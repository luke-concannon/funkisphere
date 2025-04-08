"use client"

import { motion } from "motion/react"

import { TextPressure } from "@/blocks/TextAnimations/TextPressure"

const titleVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
}

export function HeroTitle() {
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10"
    >
      <TextPressure
        text="Funkisphere"
        // fontFamily="Inter"
        // fontUrl="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        flex={true}
        alpha={false}
        stroke={false}
        width={false}
        weight={true}
        italic={true}
        textColor="black"
      />
    </motion.div>
  )
}
