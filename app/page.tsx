import Link from 'next/link'
import {
  BoltIcon,
  XMarkIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid'
import {
  ArrowDownCircleIcon,
  ArrowLeftCircleIcon,
  EllipsisHorizontalCircleIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/outline'
import { FadeOutWrapper } from '@components/FadeOutWrapper'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: String }
}) {
  const { main_menu, menu_open } = searchParams

  return (
    <div className='w-full flex flex-col relative items-center justify-center h-full overflow-hidden '>
      <div className='h-[100vw] max-h-[100vh] flex-wrap flex flex-row aspect-square relative'>
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
              <p className='w-full font-bungeeOutline text-7xl sm:text-8xl md:text-9xl 2xl:text-[9rem]'>
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
      <Link
        href={`?main_menu=open`}
        className='absolute bottom-6 left-1/2 -ml-12'
      >
        <BoltIcon className='h-24 w-24 fill-funk-pink stroke-funk-lime ' />
      </Link>

      {main_menu && <MainMenu />}
      {menu_open === 'dance' && <DanceMenu />}
    </div>
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
          className={`w-full h-1/3 bg-funk-pink`}
        >
          <li
            className={`font-bungee text-white  w-full h-full flex flex-col items-center justify-center`}
          >
            <p className='w-full mb-1 text-center  text-5xl text-white'>
              DANCE
            </p>
          </li>
        </Link>
        <Link href={`#`} className={`w-full h-1/3 bg-funk-mango`}>
          <li
            className={`font-bungee text-white  w-full h-full flex flex-col items-center justify-center`}
          >
            <p className='w-full mb-1 text-center text-white text-5xl'>YOGA</p>
            <p className='text-base font-sans text-white'>- Coming Soon -</p>
          </li>
        </Link>
        <Link href={`#`} className={`w-full h-1/3 bg-funk-green`}>
          <li
            className={`font-bungee text-white w-full h-full flex flex-col items-center justify-center`}
          >
            <p className='w-full mb-1 text-center text-4xl sm:text-5xl text-white'>
              VIDEOGRAPHY
            </p>
            <p className='text-base font-sans text-white'>- Coming Soon -</p>
          </li>
        </Link>
      </ul>
      <Link href={`/`} className='absolute h-20 top-6 right-6'>
        <XMarkIcon className='h-10 w-10 fill-white' />
      </Link>
    </nav>
    // </FadeOutWrapper>
  )
}

function DanceMenu() {
  return (
    <nav
      className={`w-full h-full absolute top-0 left-0 bg-white animate-slideRight`}
    >
      <ul className={`w-full h-full flex flex-col`}>
        <Link
          href={`#`}
          className={`text-white text-4xl w-full h-1/4 flex p-6 bg-funk-pink shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <p className='whitespace-nowrap font-bungee'>BIG SHAPES</p>
            <p className='text-xl font-source'>
              After school contemporary dance classes for 12-18 year old
              students
            </p>
          </li>
        </Link>
        <Link
          href={`#`}
          className={` text-4xl w-full h-1/4 flex p-6 bg-white shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <p className='whitespace-nowrap font-bungee'>DOVES</p>
            <p className='text-xl font-source'>
              After school contemporary dance classes for 8-12 year old
              students, run by DCM
            </p>
          </li>
        </Link>
        <Link
          href={`/dance/little-funkers`}
          className={` text-white relative text-4xl w-full h-1/4 flex p-6 bg-funk-pink shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <p className='whitespace-nowrap font-bungee'>LITTLE FUNKERS</p>
            <p className='text-xl font-source'>
              In school therapeutic dance classes covering a range of styles
            </p>

            <ArrowRightCircleIcon className='h-10 w-10 fill-white absolute right-6 bottom-4' />
          </li>
        </Link>
        <Link
          href={`#`}
          className={`text-4xl w-full h-1/4 flex p-6 bg-white shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <p className=' whitespace-nowrap font-bungee'>MOTHER FUNKERS</p>
            <p className='text-xl font-source'>
              Wild dance classes for grown ups. Covering a range of styles and
              finishing with flexibility and mindfulness
            </p>
          </li>
        </Link>
      </ul>
      <Link href={`/?main_menu=open`} className='absolute top-6 right-6'>
        <ArrowUturnLeftIcon className='h-10 w-10 stroke-white' />
      </Link>
    </nav>
  )
}
