import Link from 'next/link'
import { Bars3Icon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

export default async function HomePage() {
  return (
    <div className='w-full flex flex-col relative items-center justify-center h-full'>
      <div className='h-[100vw] max-h-[100vh] min-h-[400px] flex-wrap flex flex-row aspect-square relative'>
        <div className='absolute h-full w-full flex flex-col'>
          <div className='h-1/3  flex items-center flex-row justify-end w-full'>
            <div className='h-full relative flex items-center w-[85%]'>
              <p className='w-full font-bungeeOutline text-7xl sm:text-8xl md:text-9xl 2xl:text-[9rem]'>
                THE
              </p>
              <div className='absolute bottom-0 whitespace-nowrap left-0 font-bungee text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
                The Creative Mahi
              </div>
            </div>
          </div>
          <div className='h-1/3 flex items-center flex-row justify-end w-full'>
            <div className='h-full relative flex items-center w-[85%]'>
              <p className='w-full font-bungeeOutline  text-7xl sm:text-8xl md:text-9xl 2xl:text-[9rem]'>
                FUNKIS
              </p>
              <div className='absolute whitespace-nowrap  bottom-0 left-0 font-bungee text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
                of Milo Haigh
              </div>
            </div>
          </div>
          <div className='h-1/3 flex items-center flex-row justify-end w-full'>
            <div className='h-full flex items-center w-[85%]'>
              <p className='w-full font-bungeeOutline text-7xl sm:text-8xl md:text-9xl 2xl:text-[9rem]'>
                PHERE
              </p>
            </div>
          </div>
        </div>

        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className='rounded-full bg-funk-lime h-1/3 w-1/3' />
        ))}
      </div>
      <footer className='absolute bottom-0 left-0 w-full flex flex-row items-center justify-end p-10'>
        <button>
          <ChevronDoubleUpIcon className='h-8 w-8 text-slate-900' />
        </button>
        {/* <h3 className=''>DANCE</h3>
        <h3>YOGA</h3>
        <h3>VIDEOGRAPHY</h3> */}
      </footer>

      {/* <nav className='absolute top-0 flex flex-row justify-end items-center w-full px-10 py-4'>
        <button>
          <Bars3Icon className='h-8 w-8 text-slate-900' />
        </button>
      </nav>
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
      </div> */}
    </div>
  )
}
