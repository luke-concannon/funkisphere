"use client"

import { motion } from "motion/react"

function PulsingElement() {
  return (
    <motion.div
      style={{
        width: 200,
        height: 200,
        background: "#3498db",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      whileHover={{
        background: ["#3498db", "#e74c3c", "#3498db"],
        transition: {
          duration: 1,
          repeat: Infinity,
        },
      }}
    >
      Hover me
    </motion.div>
  )
}

export default PulsingElement
