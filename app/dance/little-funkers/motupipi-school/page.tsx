import Link from 'next/link'

export default async function HomePage() {
  return (
    <div className='w-full flex bg-funk-lime flex-col items-center h-full justify-center space-y-6'>
      <header className='flex flex-col space-y-2 items-center justify-center'>
        <h2 className='font-pacifico text-lg'>
          Home of the creative mahi of Milo Haigh
        </h2>
        <h1 className={` text-8xl text-slate-900 font-bungee`}>
          The Funkisphere
        </h1>
      </header>
      <div className='flex flex-row justify-center space-x-6 items-center w-full'>
        <Link href='/dance'>
          <h3 className=' text-slate-900 font-bungee text-2xl px-4 py-2 rounded-md'>
            Dance
          </h3>
        </Link>
        <h3 className=' text-slate-900 font-bungee text-2xl px-4 py-2 rounded-md'>
          Videography
        </h3>
        <h3 className=' text-slate-900 font-bungee text-2xl px-4 py-2 rounded-md'>
          Yoga
        </h3>
      </div>
    </div>
  )
}
