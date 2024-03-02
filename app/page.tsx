import Link from 'next/link'
import { XMarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import ParallaxBackground from './_components/ParallaxBackground'
import { Logo } from './_components'

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: String }
}) {
  const { main_menu, registration_dropdown } = searchParams

  return (
    <>
      <ParallaxBackground />
      <Link
        href={`?main_menu=open`}
        className='fixed bottom-6 left-1/2 -ml-10 lg:hidden'
      >
        <EllipsisHorizontalIcon className='h-20 w-20 fill-funk-yellow' />
      </Link>
      <div className='flex flex-row space-x-4 items-center lg:justify-between fixed z-50 top-0 left-0 w-full px-6 py-10 lg:px-10 lg:pt-10 lg:pb-0'>
        <div className='flex flex-row w-full lg:w-fit lg:space-x-4 items-center'>
          <div className='lg:w-24 lg:flex hidden'>
            <Logo />
          </div>
          <div className='flex flex-col justify-center lg:justify-start text-center w-full items-center lg:items-start lg:text-left'>
            <h1 className='font-bungee w-full text-3xl lg:text-4xl text-white whitespace-nowrap'>
              THE FUNKISPHERE
            </h1>
            <h2 className='font-openSans lg:text-2xl text-xl text-slate-900 whitespace-nowrap'>
              The Creative Mahi of Milo Haigh
            </h2>
          </div>
        </div>
        <nav className=' lg:flex lg:items-center lg:justify-center hidden'>
          <ul className=' text-center flex flex-row space-x-8 text-slate-900  '>
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
                className='px-4 py-2 font-bold bg-funk-lime rounded font-openSans group-active:shadow-none shadow-[5px_5px_0px_0px_rgba(109,40,217)] ease-in-out duration-150'
              >
                Registration
              </Link>
              {!!registration_dropdown && (
                <>
                  <Link
                    href='/'
                    className='fixed top-0 left-0 w-screen h-screen z-40'
                  />
                  <ul className='p-6 bg-funk-lime w-80 absolute rounded top-[130%] right-0  z-50 text-left font-bungee '>
                    <li className='group/mother '>
                      <Link href='/'>
                        <h2 className='group-hover/mother:text-funk-pink ease-in-out duration-150'>
                          Mother Funkers
                        </h2>
                        <p>Wild dance classes for grown-ups</p>
                      </Link>
                    </li>
                    <div className='w-full h-px my-6 flex flex-row items-center shrink-0 justify-center'>
                      <span className='w-11/12 h-full bg-funk-pink ' />
                    </div>
                    <li className=' group/shapes'>
                      <Link href='/' className=''>
                        <h2 className='group-hover/shapes:text-funk-pink ease-in-out duration-150'>
                          Big Shapes
                        </h2>
                        <p>
                          After school contemporary dance classes for teens 12 -
                          18 yrs
                        </p>
                      </Link>
                    </li>
                    <div className='w-full h-px my-6 flex flex-row items-center shrink-0 justify-center'>
                      <span className='w-11/12 h-full bg-funk-pink ' />
                    </div>
                    <li className=' group/funk'>
                      <a
                        target='_blank'
                        href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
                        className='group-hover/funk:bg-funk-pink ease-in-out duration-150 bg-opacity-20'
                      >
                        <h2 className='group-hover/funk:text-funk-pink ease-in-out duration-150'>
                          Little Funkers
                        </h2>

                        <p>
                          In-school therapeutic dance classes for kids 7 - 11
                          yrs
                        </p>
                      </a>
                    </li>
                  </ul>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {main_menu && <MainMenu />}
    </>
  )
}

function MainMenu() {
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
        <XMarkIcon className='fill-white h-10 w-10 group-hover:scale-110 ease-in-out duration-150' />
      </Link>
    </nav>
  )
}
