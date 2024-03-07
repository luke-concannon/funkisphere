'use client'

import { useEffect, useRef } from 'react'

export const useOutsideClick = (eventType: string, callback: () => void) => {
  const ref = useRef<any>()

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener(eventType, handleClick)

    return () => {
      document.removeEventListener(eventType, handleClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])

  return ref
}
