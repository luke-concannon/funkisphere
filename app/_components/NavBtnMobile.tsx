'use client'

import { BoltIcon } from '@heroicons/react/24/solid'
import { useModalStoreActions } from '../_store'

export function NavBtnMobile() {
  const { setOpenModal } = useModalStoreActions()
  return (
    <button onClick={() => setOpenModal('mobileNavMenu')} className='lg:hidden'>
      <BoltIcon className='h-10 w-10 z-40 fill-funk-pink bg-funk-yellow bottom-10 left-1/2 -ml-5 absolute p-1 rounded-full' />
    </button>
  )
}
