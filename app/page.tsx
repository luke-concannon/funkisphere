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
    <div className='w-full flex flex-col bg-funk-pink relative items-center justify-center h-full overflow-hidden '>
      <div className='h-[100vw] max-h-[100vh] flex-wrap flex flex-row relative aspect-square'>
        <div className='absolute md:bottom-auto bottom-[120%] left-1/2 -ml-36 w-72 md:left-44 md:h-full md:w-20 flex '>
          <p className='text-white text-center md:-rotate-90 md:whitespace-nowrap font-bungee md:origin-center text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl'>
            The Creative Mahi of Milo Haigh
          </p>
        </div>

        <div className='absolute h-full w-full flex flex-col'>
          <div className='h-1/3  flex items-center flex-row justify-end w-full'>
            <div className='h-full relative flex items-center w-[85%]'>
              <p className='w-full text-slate-900 font-bungee text-7xl sm:text-[8rem] md:text-[9rem] 2xl:text-[10rem]'>
                THE
              </p>
            </div>
          </div>
          <div className='h-1/3 flex items-center flex-row justify-end w-full'>
            <div className='h-full relative flex items-center w-[85%]'>
              <p className='w-full text-slate-900 font-bungee text-7xl sm:text-[8rem] md:text-[9rem] 2xl:text-[10rem]'>
                FUNKIS
              </p>
            </div>
          </div>
          <div className='h-1/3 flex items-center flex-row justify-end w-full'>
            <div className='h-full flex items-center w-[85%]'>
              <p className='w-full text-slate-900 font-bungee text-7xl sm:text-[8rem] md:text-[9rem] 2xl:text-[10rem]'>
                PHERE
              </p>
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
      <Link
        href={`?main_menu=open`}
        className='absolute h-24 w-24 group sm:h-14 sm:w-14 sm:bottom-10 sm:right-10 bottom-4 right-1/2 -mr-12 sm:mr-0'
      >
        <BoltIcon className='h-full flex sm:hidden fill-funk-yellow' />
        <ArrowRightCircleIcon className='h-full ease-in-out duration-150 group-hover:scale-110 hidden sm:flex fill-slate-100 group-hover:fill-white' />
      </Link>
      {main_menu && <MainMenu />}
      {menu_open === 'dance' && <DanceMenu />}
      <ul className='md:flex hidden flex-col absolute right-6 space-y-4 text-white text-3xl text-right'>
        <li className=' ease-in-out duration-150 cursor-default'>ABOUT</li>
        <div className='w-full h-px bg-white' />
        <Link href={`?main_menu=open&menu_open=dance`}>
          <li className='hover:text-funk-yellow hover:-translate-x-2 ease-in-out duration-150'>
            DANCE
          </li>
        </Link>
        <div className='w-full h-px bg-white' />
        <li className='cursor-default ease-in-out duration-150'>YOGA</li>
        <div className='w-full h-px bg-white' />
        <li className='cursor-default ease-in-out duration-150'>VIDEOGRAPHY</li>
      </ul>
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

function DanceMenu() {
  return (
    <nav
      className={`w-full h-full absolute top-0 left-0 bg-white animate-slideRight`}
    >
      <ul className={`w-full h-full flex flex-col`}>
        <Link
          href={`#`}
          className={`text-white opacity-40 cursor-default text-4xl w-full h-1/4 flex p-6 bg-funk-pink shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <h2 className='whitespace-nowrap'>BIG SHAPES</h2>
            <p className='text-xl openSans'>
              After school contemporary dance classes for 12-18 year old
              students
            </p>
          </li>
        </Link>
        <Link
          href={`#`}
          className={`opacity-20 cursor-default text-4xl w-full h-1/4 flex p-6 bg-white shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <h2 className='whitespace-nowrap'>DOVES</h2>
            <p className='text-xl openSans'>
              After school contemporary dance classes for kids aged 8 - 12 yrs,
              run by DCM
            </p>
          </li>
        </Link>
        <Link
          href={`/dance/little-funkers`}
          className={`group text-white relative text-4xl w-full h-1/4 flex flex-row items-center justify-between p-6 bg-funk-pink shrink-0 grow-0`}
        >
          <li className='h-full justify-center flex flex-col'>
            <div className='flex flex-row items-center space-x-2'>
              <BoltIcon className='h-28 w-28 hidden sm:flex fill-funk-lime' />
              <div>
                <h2 className='whitespace-nowrap'>LITTLE FUNKERS</h2>
                <p className='text-xl openSans'>
                  In-school therapeutic dance classes for kids aged 7 - 11 yrs
                </p>
              </div>
            </div>
          </li>
          <ArrowRightCircleIcon className='sm:h-14 hidden sm:flex sm:w-14 h-10 w-10 ease-in-out duration-150 sm:group-hover:scale-110 sm:-translate-x-6 sm:group-hover:-translate-x-0 fill-white absolute right-6 bottom-4 sm:bottom-1/2 sm:-mb-7 mb-0' />
        </Link>
        <Link
          href={`#`}
          className={`text-4xl opacity-20 cursor-default w-full h-1/4 flex p-6 bg-white shrink-0 grow-0`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <h2 className=' whitespace-nowrap'>MOTHER FUNKERS</h2>
            <p className='text-xl openSans'>
              Wild dance classes for grown ups. Covering a range of styles and
              finishing with flexibility and mindfulness
            </p>
          </li>
        </Link>
      </ul>
      <Link href={`/`} className='absolute group h-20 top-6 right-6'>
        <XMarkIcon className='fill-white h-10 w-10 group-hover:scale-110 ease-in-out duration-150' />
      </Link>
    </nav>
  )
}
