import Link from 'next/link'
import {
  BoltIcon,
  XMarkIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: String }
}) {
  const { main_menu } = searchParams

  return (
    <div className='w-full bg-funk-pink h-full items-center relative flex lg:flex-row overflow-hidden'>
      <div className='flex lg:flex-row lg:justify-between lg:items-center lg:w-full lg:p-20 flex-col relative'>
        <div className='fixed top-0 left-0 w-full p-12 lg:top-0 lg:left-0 lg:w-20 lg:h-full lg:flex lg:items-center lg:justify-center'>
          <p className='text-white lg:-rotate-90 origin-center text-center lg:whitespace-nowrap font-bungee text-2xl sm:text-4xl lg:text-4xl 2xl:text-5xl'>
            The Creative Mahi of Milo Haigh
          </p>
        </div>
        <div className='lg:h-[50vw] z-50 lg:min-h-[50vw] h-[100vw] flex-wrap flex flex-row relative aspect-square'>
          <div className='absolute h-full w-full flex flex-col text-slate-900 text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem]'>
            <div className='h-1/3  flex items-center flex-row justify-end w-full'>
              <div className='h-full relative flex items-center w-[85%]'>
                <p className='w-full '>THE</p>
              </div>
            </div>
            <div className='h-1/3 flex items-center flex-row justify-end w-full'>
              <div className='h-full relative flex items-center w-[85%]'>
                <p className='w-full'>FUNKIS</p>
              </div>
            </div>
            <div className='h-1/3 flex items-center flex-row justify-end w-full'>
              <div className='h-full flex items-center w-[85%]'>
                <p className='w-full'>PHERE</p>
              </div>
            </div>
          </div>

          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className='rounded-full hover:bg-funk-mango bg-funk-lime h-1/3 w-1/3'
            />
          ))}
        </div>
        <Image
          src='/images/angel-of-funk.png'
          alt='The Funkisphere'
          width={500}
          height={800}
          className='absolute top-0 right-0 w-1/2 h-full object-cover'
        />
        <nav className='fixed top-0 left-0 w-full p-12 lg:top-auto lg:left-auto lg:bottom-0 lg:right-0 lg:w-20 lg:h-full lg:flex lg:items-center lg:justify-center'>
          <ul className='rotate-90 origin-center text-center lg:flex hidden flex-row space-x-10 text-white text-3xl '>
            <Link href={`/dance`}>
              <li className=' font-bungee hover:text-funk-yellow ease-in-out duration-150'>
                DANCE
              </li>
            </Link>
            <li className='font-bungee cursor-default ease-in-out duration-150'>
              YOGA
            </li>
            <li className=' font-bungee cursor-default ease-in-out duration-150'>
              VIDEOGRAPHY
            </li>
          </ul>
        </nav>
      </div>

      {main_menu && <MainMenu />}
    </div>

    // <div className='w-full flex flex-row bg-funk-pink relative items-center justify-between h-full overflow-hidden '>
    // div className='flex flex-row'>
    //
    //
    // </div>

    // <Link
    //   href={`?main_menu=open`}
    //   className='absolute h-24 w-24 group sm:h-14 sm:w-14 sm:bottom-10 sm:right-10 bottom-4 right-1/2 -mr-12 sm:mr-0'
    // >
    //   <BoltIcon className='h-full flex sm:hidden fill-funk-yellow' />
    //   <ArrowRightCircleIcon className='h-full ease-in-out duration-150 group-hover:scale-110 hidden sm:flex fill-slate-100 group-hover:fill-white' />
    // </Link>

    // </div>
  )
}

function MainMenu() {
  return (
    // <FadeOutWrapper>
    <nav
      className={`w-full h-full absolute top-0 left-0 bg-white animate-slideRight`}
    >
      <ul className={`w-full h-full flex flex-col items-center`}>
        <Link
          href={`?main_menu=open&menu_open=dance`}
          className={`w-full h-1/3 sm:hover:bg-opacity-100 group ease-in-out duration-150 sm:bg-opacity-90 bg-funk-pink`}
        >
          <li
            className={`font-bungee text-white  w-full h-full flex flex-col items-center justify-center`}
          >
            <h2 className='my-2 text-center text-5xl text-white'>
              <span
                className={`group-hover:max-w-full hidden  max-w-0 bg-white sm:block h-2 transition-all duration-150 `}
              />
              DANCE
              <span
                className={`group-hover:max-w-full hidden max-w-0 bg-white sm:block h-2 transition-all duration-150 `}
              />
            </h2>
          </li>
        </Link>
        <Link
          href={`#`}
          className={`w-full opacity-50  cursor-default h-1/3 bg-funk-mango`}
        >
          <li
            className={`font-bungee text-white w-full h-full flex flex-col items-center justify-center`}
          >
            <h2 className='w-full mb-1 text-center text-white text-5xl'>
              YOGA
            </h2>
            <p className='text-base font-openSans text-white'>
              - Coming Soon -
            </p>
          </li>
        </Link>
        <Link
          href={`#`}
          className={`w-full opacity-50 cursor-default h-1/3 bg-funk-green`}
        >
          <li
            className={`font-bungee text-white w-full h-full flex flex-col items-center justify-center`}
          >
            <h2 className='w-full mb-1 text-center text-4xl sm:text-5xl text-white'>
              VIDEOGRAPHY
            </h2>
            <p className='text-base font-openSans text-white'>
              - Coming Soon -
            </p>
          </li>
        </Link>
      </ul>
      <Link href={`/`} className='absolute group h-20 top-6 right-6'>
        <XMarkIcon className='fill-white h-10 w-10 group-hover:scale-110 ease-in-out duration-150' />
      </Link>
    </nav>
    // </FadeOutWrapper>
  )
}
