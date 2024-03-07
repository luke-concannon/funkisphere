'use client'

import { useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useModalStoreActions, useOpenModal } from '../_store'
import { useSearchParams } from 'next/navigation'

export function ModalWrapper({
  children,
  modalName,
}: {
  children: React.ReactNode
  modalName: string
}) {
  const openModal = useOpenModal()
  const { setOpenModal } = useModalStoreActions()
  const showModal = openModal === modalName

  const searchParams = useSearchParams()
  const closeModal = !!searchParams.get('close_modal')

  useEffect(() => {
    if (closeModal) {
      console.log('close modal')

      setOpenModal('')
    }
  }, [closeModal])

  if (!showModal) return null

  return (
    <div className='w-screen h-[100dvh] z-40 fixed top-0 left-0'>
      <XMarkIcon
        className='fill-white z-50 absolute group top-6 right-6 opacity-50 h-10 w-10 group-hover:scale-110 ease-in-out duration-150'
        onClick={() => setOpenModal('')}
      />
      {children}
    </div>
  )
}
