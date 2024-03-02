import Link from 'next/link'
import { ChevronRightIcon, BoltIcon } from '@heroicons/react/24/solid'
import { Logo } from '@/app/_components'

export default async function HomePage() {
  return (
    <div className='w-full flex  flex-col relative'>
      <nav className='w-full h-32 mb-4'>
        <Link className='flex w-full' href='/'>
          <div className='w-24 absolute left-6 top-6'>
            <Logo />
          </div>
          <div className='flex text-[1.2rem] pl-2 space-y-1 flex-col absolute left-7 top-[24px] '>
            <h1 className='font-openSans'>THE</h1>
            <h1 className='font-openSans'>FUNKIS</h1>
            <h1 className='font-openSans'>PHERE</h1>
          </div>
        </Link>

        <div className='w-1/2 text-right absolute top-8 right-6 text-4xl font-bungee text-slate-900'>
          <h2>Little Funkers</h2>
        </div>
      </nav>
      <div className='flex flex-col relative'>
        <div className='px-10 pb-14 flex flex-col items-end'>
          <p className='mb-8 text-slate-900 text-xl leading-relaxed'>
            Little Funkers in-school therapeutic dance classes focus on building
            expression, confidence, connection and well being. The program aims
            to increase access, awareness and equity for tamariki attending
            professional dance classes. Weekly Juniors (5-7yrs) and Seniors
            (8-11yrs) classes are run at TPS, Motupipi and Central Schools.
          </p>
          <a
            target='_blank'
            href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
            className='px-4 shadow-[5px_5px_0px_0px_rgba(109,40,217)] text-white flex flex-row py-2 items-center space-x-1 font-bold bg-funk-pink rounded w-fit text-center font-openSans'
          >
            <p>Register for Term 1</p>
            <ChevronRightIcon className='h-4 w-4 fill-white' />
          </a>
        </div>
        <div className='w-full h-px flex flex-row items-center justify-center'>
          <span className='w-3/4 h-full bg-funk-pink ' />
        </div>

        <div className='px-10 py-14 relative'>
          <h2 className='font-bungee mb-4 text-2xl '>Wriggle & Jump</h2>
          <p className='text-slate-900 text-lg'>
            This class is all about supporting akonga who need to wriggle, jump
            and express themselves. For many tamariki, having the opportunity to
            do this during their school day can make a huge difference to their
            health, happiness and learning.
          </p>
        </div>
        <div className='w-full h-px flex flex-row items-center justify-center'>
          <span className='w-3/4 h-full bg-funk-pink ' />
        </div>

        <div className='px-10 py-14 relative'>
          <h2 className='font-bungee mb-4 text-2xl '>Easier for Whanau</h2>
          <p className='text-slate-900 text-lg'>
            We know from experience that classes can be a big commitment for
            families. By incorporating classes into their regular schooling week
            and removing the pressure to rehearse/perform/buy gear/buy costumes,
            we aim to make life a little easier for whanau.
          </p>
        </div>
        <div className='w-full h-px flex flex-row items-center justify-center'>
          <span className='w-3/4 h-full bg-funk-pink ' />
        </div>

        <div className='px-10 py-14 relative'>
          <h2 className='font-bungee mb-4 text-2xl '>Celebrate our Talent</h2>
          <p className='text-slate-900 text-lg'>
            We have an amazing arts community here in Golden Bay. Little Funkers
            aim to share a safe space for our talented young dancers to build
            confidence, improvise and learn conventional dance movements, whilst
            building strength and flexibility.
          </p>
        </div>
        <Link href='/'>
          <footer className='w-full py-6 px-10 flex flex-row space-x-2 items-center bg-funk-yellow border-t-4 border-funk-pink'>
            <BoltIcon className='h-12 w-12 fill-funk-pink border-2 border-funk-yellow stroke-funk-pink shrink-0' />
            <div className='flex flex-col justify-center '>
              <h1 className='text-2xl text-funk-pink whitespace-nowrap'>
                THE FUNKISPHERE
              </h1>
              <p className='whitespace-nowrap'>
                The Creative Mahi of Milo Haigh
              </p>
            </div>
          </footer>
        </Link>
      </div>
    </div>
  )
}
