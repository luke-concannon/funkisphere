import Link from 'next/link'
import {
  BoltIcon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid'

export default async function DancePage() {
  return (
    <div
      className={`w-full h-full flex flex-col animate-fadeInFromSmall max-w-7xl`}
    >
      <Link
        href={{ pathname: `/`, query: { close_modal: 'true' } }}
        className='w-full group h-12 flex flex-row items-center justify-end px-4 pt-6'
      >
        <XMarkIcon className='fill-slate-500 shrink-0 h-8 w-8 group-hover:scale-110 ease-in-out duration-150' />
      </Link>
      <ul className={`w-full h-full flex flex-col px-10`}>
        <Link
          href={`#`}
          className={`group text-slate-900 relative text-4xl w-full h-1/4 flex flex-row items-center justify-between shrink-0 grow-0 opacity-20 space-x-1`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <h2 className='whitespace-nowrap text-2xl lg:text-5xl'>
              BIG SHAPES
            </h2>
            <p className='text-lg lg:text-2xl openSans'>
              After school contemporary dance classes for teens 12 - 18 yrs
            </p>
          </li>
          <ChevronRightIcon className='h-10 w-10 flex shrink-0 fill-funk-pink' />
        </Link>
        <div className='w-full h-px flex flex-row items-center my-1 shrink-0 justify-center'>
          <span className='w-11/12 h-full bg-funk-pink ' />
        </div>
        <Link
          href={`#`}
          className={`group text-slate-900 relative text-4xl w-full h-1/4 flex flex-row items-center justify-between shrink-0 grow-0 opacity-20 space-x-1`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <h2 className='whitespace-nowrap text-2xl lg:text-5xl'>DOVES</h2>
            <p className='text-lg lg:text-2xl openSans'>
              After school contemporary dance classes for kids 8 - 12 yrs
            </p>
          </li>
          <ChevronRightIcon className='h-10 w-10 flex shrink-0 fill-funk-pink' />
        </Link>
        <div className='w-full h-px flex flex-row items-center my-1 shrink-0 justify-center'>
          <span className='w-11/12 h-full bg-funk-pink ' />
        </div>
        <Link
          href={`/dance/little-funkers`}
          className={`group text-slate-900 relative text-4xl w-full h-1/4 flex flex-row items-center justify-between shrink-0 grow-0 space-x-1`}
        >
          <li className='h-full justify-center flex flex-col'>
            <h2 className='whitespace-nowrap text-2xl lg:text-5xl'>
              LITTLE FUNKERS
            </h2>
            <p className='text-lg lg:text-2xl openSans'>
              In-school therapeutic dance classes for kids 7 - 11 yrs
            </p>
          </li>
          <ChevronRightIcon className='h-10 w-10 flex shrink-0 fill-funk-pink' />
        </Link>
        <div className='w-full h-px flex flex-row items-center my-1 shrink-0 justify-center'>
          <span className='w-11/12 h-full bg-funk-pink ' />
        </div>
        <Link
          href={`#`}
          className={`group text-slate-900 relative text-4xl w-full h-1/4 flex flex-row items-center justify-between shrink-0 grow-0 opacity-20 space-x-1`}
        >
          <li className='h-full w-full justify-center flex flex-col'>
            <h2 className='text-2xl lg:text-5xl whitespace-nowrap'>
              MOTHER FUNKERS
            </h2>
            <p className='text-lg lg:text-2xl openSans'>
              Wild dance classes for grown ups.
            </p>
          </li>
          <ChevronRightIcon className='h-10 w-10 flex shrink-0 fill-funk-pink' />
        </Link>
      </ul>
      <footer className='h-12 w-full'></footer>
    </div>
  )
}
