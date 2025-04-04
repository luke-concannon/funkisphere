"use client"

import { useEffect } from "react"
import { motion } from "motion/react"

import { TextPressure } from "../blocks/TextAnimations/TextPressure"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const logoVariants = {
  hidden: {
    opacity: 0,
    // scale: 0,
    // filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    // scale: 1,
    // filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

// const titleVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 1.5,
//     filter: "blur(10px)",
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     filter: "blur(0px)",
//     transition: {
//       delay: 0.5,
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// }

export function HeroLogo() {
  return (
    <motion.div
      className="relative flex aspect-square flex-1 flex-wrap items-center"
      // variants={containerVariants}
      // initial="hidden"
      // animate="visible"
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-foreground hover:bg-accent size-1/3 rounded-full shadow-xl transition-all hover:scale-95"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          // initial="hidden"
          // animate="visible"
        />
      ))}
      {/* <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <TextPressure
          text="Funkisphere"
          fontFamily="Open Sans"
          fontUrl="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000"
          strokeColor="#ff0000"
          // minFontSize={120}
        />
      </motion.div> */}
    </motion.div>
  )
}
