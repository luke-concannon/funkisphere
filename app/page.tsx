import Link from 'next/link'
import { XMarkIcon, BoltIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import ParallaxBackground from './_components/ParallaxBackground'
import { Logo } from './_components'
import {
  ModalWrapper,
  RegistrationBtnMobile,
  RegistrationBtnDesktop,
  NavBtnMobile,
  RegistrationMenuDesktop,
} from './_components'
import { Suspense } from 'react'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: String }
}) {
  return (
    <>
      <ParallaxBackground />
      {/* <NavBtnMobile /> */}
      <div className='flex flex-row space-x-4 items-start lg:justify-between fixed z-40 top-0 left-0 w-full px-6 py-10 lg:px-10 lg:pt-10 lg:pb-0'>
        <div className='flex flex-row w-full lg:w-fit lg:space-x-4 items-center'>
          <div className='lg:w-32 lg:flex hidden'>
            <Logo />
          </div>
          <div className='flex flex-col justify-center lg:justify-start text-center w-full relative items-center lg:items-start lg:text-left'>
            <h1 className='font-bungee w-full text-2xl lg:text-4xl text-white whitespace-nowrap'>
              THE FUNKISPHERE
            </h1>
            <h2 className='font-openSans lg:text-2xl text-xl text-slate-900 whitespace-nowrap'>
              The Creative Mahi of Milo Haigh
            </h2>

            <Link
              href='mailto:funkisphere@gmail.com'
              className='inline-flex lg:relative lg:mt-1 fixed bottom-6 lg:bottom-0 group gap-2 items-center'
            >
              <EnvelopeIcon className='w-6 h-6 text-white group-hover:scale-110 transition-all' />
              <p className='text-base lg:text:lg font-bold text-funk-lime group-hover:text-funk-green transition-all'>
                funkisphere@gmail.com
              </p>
            </Link>
            {/* <RegistrationBtnMobile />
            <Suspense>
              <MobileRegistrationMenu />
            </Suspense> */}
          </div>
        </div>
        <nav className='lg:flex lg:items-center lg:justify-center hidden'>
          {/* <ul className='items-center text-center flex flex-row space-x-8 text-slate-900  '>
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
              <RegistrationBtnDesktop>
                <RegistrationMenuDesktop />
              </RegistrationBtnDesktop>
            </li>
          </ul> */}
        </nav>
      </div>
      {/* <Suspense>
        <MobileNavMenu />
      </Suspense> */}
    </>
  )
}

function MobileNavMenu() {
  return (
    <ModalWrapper modalName='mobileNavMenu'>
      <nav
        className={`w-full h-full absolute top-0 left-0 bg-white animate-fadeInFromSmall z-40`}
      >
        <ul className={`w-full h-full flex flex-col items-center`}>
          <Link
            href={{ pathname: `/dance`, query: { close_modal: 'true' } }}
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
      </nav>
    </ModalWrapper>
  )
}

function MobileRegistrationMenu() {
  return (
    <ModalWrapper modalName='mobileRegistrationMenu'>
      <div className='animate-fadeInFromSmall absolute top-0 left-0 w-screen h-[100dvh] bg-funk-pink bg-opacity-80 backdrop-blur-sm'>
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
    </ModalWrapper>
  )
}
