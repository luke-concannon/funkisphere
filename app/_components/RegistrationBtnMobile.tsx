'use client'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useModalStoreActions } from '../_store'

export function RegistrationBtnMobile() {
  const { setOpenModal } = useModalStoreActions()
  return (
    <button
      onClick={() => setOpenModal('mobileRegistrationMenu')}
      className='bg-funk-pink bg-opacity-50 py-2  border-y-2 w-full border-funk-yellow mt-4 lg:hidden flex flex-row items-center justify-center text-white'
    >
      <ChevronRightIcon className='h-6 w-6 fill-funk-yellow' />
      <p className=' font-bold'>REGISTRATION</p>
      <ChevronLeftIcon className='h-6 w-6 fill-funk-yellow' />
    </button>
  )
}
