"use client"

import { useEffect, useState } from "react"
import { useScroll } from "motion/react"

import { Particles } from "../../blocks/Backgrounds/Particles"

export function ParticlesBackground() {
  const [showBackground, setShowBackground] = useState(true)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    if (scrollYProgress.get() >= 1) {
      setShowBackground(false)
      console.log("fullScroll")
    } else {
      setShowBackground(true)
    }
  }, [scrollYProgress])

  if (!showBackground) {
    return null
  }

  return (
    <Particles
      particleColors={["#620038", "#bc75ff"]}
      particleCount={500}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={400}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  )
}
