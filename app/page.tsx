import Link from 'next/link'
import {
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  BoltIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'
import ParallaxBackground from './_components/ParallaxBackground'
import { Logo } from './_components'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: String }
}) {
  const {
    mobile_nav_menu,
    registration_dropdown,
    mobile_registration_dropdown,
  } = searchParams

  return (
    <>
      <ParallaxBackground />
      <Link href={'?mobile_nav_menu=true'} className='lg:hidden'>
        <BoltIcon className='h-10 w-10 z-50 fill-funk-pink bg-funk-yellow bottom-10 left-1/2 -ml-5 absolute p-1 rounded-full' />
      </Link>
      <div className='flex flex-row space-x-4 items-center lg:justify-between fixed z-50 top-0 left-0 w-full px-6 py-10 lg:px-10 lg:pt-10 lg:pb-0'>
        <div className='flex flex-row w-full lg:w-fit lg:space-x-4 items-center'>
          <div className='lg:w-24 lg:flex hidden'>
            <Logo />
          </div>
          <div className='flex flex-col justify-center lg:justify-start text-center w-full relative items-center lg:items-start lg:text-left'>
            <h1 className='font-bungee w-full text-3xl lg:text-4xl text-white whitespace-nowrap'>
              THE FUNKISPHERE
            </h1>
            <h2 className='font-openSans lg:text-2xl text-xl text-slate-900 whitespace-nowrap'>
              The Creative Mahi of Milo Haigh
            </h2>

            <Link
              href={
                !!mobile_registration_dropdown
                  ? `/`
                  : `?mobile_registration_dropdown=open`
              }
              className='bg-funk-pink bg-opacity-50 py-2  border-y-2 w-full border-funk-yellow mt-4 lg:hidden flex flex-row items-center justify-center text-white'
            >
              <ChevronRightIcon className='h-6 w-6 fill-funk-yellow' />
              <p className=' font-bold'>REGISTRATION</p>
              <ChevronLeftIcon className='h-6 w-6 fill-funk-yellow' />
            </Link>
            {!!mobile_registration_dropdown && <MobileRegistrationMenu />}
          </div>
        </div>
        <nav className='lg:flex lg:items-center lg:justify-center hidden'>
          <ul className='items-center text-center flex flex-row space-x-8 text-slate-900  '>
            <Link href={`/dance`}>
              <li className='text-xl hover:translate-y-1 hover:scale-105 font-bungee hover:text-funk-yellow ease-in-out duration-150'>
                DANCE
              </li>
            </Link>
            <li className=' text-xl font-bungee cursor-default ease-in-out duration-150'>
              YOGA
            </li>
            <li className='text-xl font-bungee cursor-default ease-in-out duration-150'>
              VIDEOGRAPHY
            </li>
            <li className='group relative'>
              <Link
                href={
                  !!registration_dropdown ? `/` : `?registration_dropdown=open`
                }
                className='px-4 flex flex-row border-4 border-funk-lime items-center space-x-1 py-2 font-bold bg-funk-pink bg-opacity-50 backdrop-blur-sm text-slate-900 rounded font-openSans group-active:shadow-none ease-in-out duration-150'
              >
                <SparklesIcon className='h-6 w-6 group-hover:scale-105 ease-in-out duration-150 fill-white' />
                <p className='font-bungee text-white'>Registration</p>
              </Link>
              {!!registration_dropdown && <DesktopRegistrationDropdown />}
            </li>
          </ul>
        </nav>
      </div>
      {mobile_nav_menu && <MobileNavMenu />}
    </>
  )
}

function MobileNavMenu() {
  return (
    <nav
      className={`w-full h-full absolute top-0 left-0 bg-white animate-fadeInFromSmall z-50`}
    >
      <ul className={`w-full h-full flex flex-col items-center`}>
        <Link
          href={`/dance`}
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
        <XMarkIcon className='fill-white h-10 opacity-60 w-10 group-hover:scale-110 ease-in-out duration-150' />
      </Link>
    </nav>
  )
}

function MobileRegistrationMenu() {
  return (
    <div className='animate-fadeInFromSmall fixed top-0 left-0 w-screen h-screen  bg-funk-pink bg-opacity-80 backdrop-blur-sm'>
      <Link href={`/`} className='absolute group h-20 top-6 right-6'>
        <XMarkIcon className='fill-white opacity-50 h-10 w-10 group-hover:scale-110 ease-in-out duration-150' />
      </Link>
      <ul className='p-6 w-full h-full flex flex-col justify-evenly z-10 left-0 text-center font-bungee '>
        <li className='group/mother '>
          <a
            target='_blank'
            href='https://airtable.com/app28ABXN7BKl5b0o/pag1KDOykt511tABA/form'
          >
            <p className='text-sm'>Tuesdays, 9:30 - 11am, Kotinga Hall</p>
            <h2 className=' ease-in-out duration-150 text-3xl text-white'>
              Muther Funkers
            </h2>

            <p className='text-lg font-bold'>
              Wild dance classes for grown-ups
            </p>
          </a>
        </li>

        <div className='w-full h-px flex flex-row justify-center '>
          <span className='bg-white w-3/4 h-full' />
        </div>

        <li className=' group/shapes'>
          <a
            target='_blank'
            href='https://airtable.com/app28ABXN7BKl5b0o/pagoFYF3F7u0y1nmt/form'
            className=''
          >
            <p className='text-sm'>Thursdays, 3:30 - 4.45pm, Motupipi Hall</p>

            <h2 className=' ease-in-out duration-150 text-3xl text-white'>
              Big Shapes
            </h2>
            <p className='text-lg font-bold'>
              After school contemporary dance classes for teens 12 - 18 yrs
            </p>
          </a>
        </li>

        <div className='w-full h-px flex flex-row justify-center '>
          <span className='bg-white w-3/4 h-full' />
        </div>

        <li className='group/funk'>
          <a
            target='_blank'
            href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
            className=' ease-in-out duration-150 bg-opacity-20'
          >
            <p className='text-sm'>Tues - Thurs, 1:30pm & 2pm</p>

            <h2 className=' ease-in-out duration-150 text-3xl text-white'>
              Little Funkers
            </h2>

            <p className='text-lg font-bold'>
              In-school therapeutic dance classes for kids 7 - 11 yrs @ TPS,
              Central and Motupipi
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}

function DesktopRegistrationDropdown() {
  return (
    <>
      <Link href='/' className='fixed top-0 left-0 w-screen h-screen z-40' />
      <ul className='py-10 px-14 bg-funk-pink border-4 border-funk-lime w-[500px] bg-opacity-80 backdrop-blur absolute rounded top-[130%] right-0  z-50 text-center font-bungee '>
        <li className='group/mother '>
          <a
            target='_blank'
            href='https://airtable.com/app28ABXN7BKl5b0o/pag1KDOykt511tABA/form'
          >
            <p className='text-sm'>Tuesdays, 9:30 - 11am, Kotinga Hall</p>
            <h2 className='whitespace-nowrap ease-in-out duration-150 text-3xl text-white'>
              Muther Funkers
            </h2>

            <p className='text-lg font-bold whitespace-nowrap'>
              Wild dance classes for grown-ups
            </p>
          </a>
        </li>

        <div className='w-full h-px flex flex-row justify-center my-6'>
          <span className='bg-white w-3/4 h-full' />
        </div>

        <li className=' group/shapes'>
          <a
            target='_blank'
            href='https://airtable.com/app28ABXN7BKl5b0o/pagoFYF3F7u0y1nmt/form'
            className=''
          >
            <p className='text-sm'>Thursdays, 3:30 - 4.45pm, Motupipi Hall</p>

            <h2 className='whitespace-nowrap ease-in-out duration-150 text-3xl text-white'>
              Big Shapes
            </h2>
            <p className='text-lg font-bold'>
              After school contemporary dance classes for teens 12 - 18 yrs
            </p>
          </a>
        </li>

        <div className='w-full h-px flex flex-row justify-center my-6'>
          <span className='bg-white w-3/4 h-full' />
        </div>

        <li className='group/funk'>
          <a
            target='_blank'
            href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
            className=' ease-in-out duration-150 bg-opacity-20'
          >
            <p className='text-sm'>Tues - Thurs, 1:30pm & 2pm</p>

            <h2 className='whitespace-nowrap ease-in-out duration-150 text-3xl text-white'>
              Little Funkers
            </h2>

            <p className='text-lg font-bold'>
              In-school therapeutic dance classes for kids 7 - 11 yrs @ TPS,
              Central and Motupipi
            </p>
          </a>
        </li>
      </ul>
    </>
  )
}
