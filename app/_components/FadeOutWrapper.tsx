'use client'

import { useState } from 'react'

export const FadeOutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [shouldExit, setShouldExit] = useState(false)

  const handleExit = () => {
    setShouldExit(true)

    setTimeout(() => {}, 500) // Ensure this matches the duration of animation in tailwind.config.js
  }

  return (
    <div
      className={`transition-opacity ${shouldExit ? 'animate-fadeOut' : ''}`}
    >
      <button onClick={handleExit}>Close</button>
      {children}
    </div>
  )
}
