"use client"

import { motion } from "motion/react"

import { TextPressure } from "../../blocks/TextAnimations/TextPressure"

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
    <motion.div variants={titleVariants} initial="hidden" animate="visible">
      <TextPressure
        text="Funkisphere"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#000"
      />
    </motion.div>
  )
}
