'use client'

import { useState } from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { useOutsideClick } from '../_hooks'

export function RegistrationBtnDesktop({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  // const ref = useOutsideClick('click', () => setIsOpen(false))

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='px-4 flex flex-row border-4 border-funk-lime items-center space-x-1 py-2 font-bold bg-funk-pink bg-opacity-50 backdrop-blur-sm text-slate-900 rounded font-openSans group-active:shadow-none ease-in-out duration-150 z-540'
      >
        <SparklesIcon className='h-6 w-6 group-hover:scale-105 ease-in-out duration-150 fill-white' />
        <p className='font-bungee text-white'>Registration</p>
      </button>
      {isOpen && <div>{children}</div>}
    </>
  )
}
