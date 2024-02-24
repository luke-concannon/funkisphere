import Link from 'next/link'
import {
  BoltIcon,
  XMarkIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid'

export default async function DancePage() {
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
