import Link from 'next/link'
import { ChevronRightIcon, BoltIcon } from '@heroicons/react/24/solid'
import { Logo } from '@/app/_components'

export default async function HomePage() {
  return (
    <div className='w-full bg-white flex flex-col relative justify-between items-center h-full'>
      <div className='max-w-7xl relative'>
        <nav className='w-full h-32 flex flex-row justify-between items-center px-10'>
          <Link className='flex relative' href='/'>
            <div className='w-24'>
              <Logo />
            </div>
            <div className='flex text-[1.2rem] space-y-1 flex-col absolute left-2 top-0 '>
              <h1 className='font-openSans font-bold'>THE</h1>
              <h1 className='font-openSans font-bold'>FUNKIS</h1>
              <h1 className='font-openSans font-bold'>PHERE</h1>
            </div>
          </Link>

          <div className=' text-right text-4xl font-bungee text-slate-900'>
            <h2 className='lg:text-7xl lg:whitespace-nowrap'>Little Funkers</h2>
          </div>
        </nav>
        <div className='flex flex-col relative'>
          <div className='p-10 flex flex-col lg:flex-row items-center bg-funk-pink rounded'>
            <p className='lg:pr-20 mb-6 lg:mb-0 text-white text-xl leading-relaxed'>
              Little Funkers in-school therapeutic dance classes focus on
              building expression, confidence, connection and well being. The
              program aims to increase access, awareness and equity for tamariki
              attending professional dance classes. Weekly Juniors (5-7yrs) and
              Seniors (8-11yrs) classes are run at TPS, Motupipi and Central
              Schools.
            </p>
            <a
              target='_blank'
              href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
              className='px-4 border-4 border-funk-lime hover:scale-95 ease-in-out duration-150 text-white flex flex-row py-2 items-center space-x-1 font-bold bg-funk-pink rounded w-fit text-center font-openSans'
            >
              <p className='whitespace-nowrap'>Register for Term 1</p>
              <ChevronRightIcon className='h-4 w-4 fill-white' />
            </a>
          </div>

          <div className='flex lg:flex-row w-full lg:justify-evenly flex-col mt-10'>
            <div className='p-10 lg:w-[30%] relative rounded lg:border-4 lg:border-funk-pink'>
              <h2 className='font-bungee text-white mb-4 text-2xl p-2 rounded text-center border-4 border-funk-lime bg-funk-pink'>
                Wriggle & Jump
              </h2>
              <p className='text-slate-900 text-lg'>
                This class is all about supporting akonga who need to wriggle,
                jump and express themselves. For many tamariki, having the
                opportunity to do this during their school day can make a huge
                difference to their health, happiness and learning.
              </p>
            </div>

            <div className='w-full h-px flex lg:hidden flex-row items-center justify-center'>
              <span className='w-3/4 h-full bg-funk-pink ' />
            </div>

            <div className='p-10 lg:w-[30%] relative rounded lg:border-4 lg:border-funk-pink'>
              <h2 className='font-bungee text-white mb-4 text-2xl p-2 rounded text-center border-4 border-funk-lime bg-funk-pink'>
                Easier for Whanau
              </h2>
              <p className='text-slate-900 text-lg'>
                We know from experience that classes can be a big commitment for
                families. By incorporating classes into their regular schooling
                week and removing the pressure to rehearse/perform/buy gear/buy
                costumes, we aim to make life a little easier for whanau.
              </p>
            </div>

            <div className='w-full h-px flex lg:hidden flex-row items-center justify-center'>
              <span className='w-3/4 h-full bg-funk-pink ' />
            </div>

            <div className='p-10 lg:w-[30%] relative rounded lg:border-4 lg:border-funk-pink'>
              <h2 className='font-bungee text-white mb-4 text-2xl p-2 rounded text-center border-4 border-funk-lime bg-funk-pink'>
                Celebrate Talent
              </h2>
              <p className='text-slate-900 text-lg'>
                We have an amazing arts community here in Golden Bay. Little
                Funkers aim to share a safe space for our talented young dancers
                to build confidence, improvise and learn conventional dance
                movements, whilst building strength and flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className='w-full py-6 px-10 flex flex-row space-x-2 items-center justify-center bg-funk-yellow border-t-4 border-funk-pink'>
        <Link href='/' className='flex flex-row space-x-2 items-center'>
          <BoltIcon className='h-12 w-12 fill-funk-pink border-2 border-funk-yellow stroke-funk-pink shrink-0' />
          <div className='flex flex-col justify-center '>
            <h1 className='text-2xl text-funk-pink whitespace-nowrap'>
              THE FUNKISPHERE
            </h1>
            <p className='whitespace-nowrap'>The Creative Mahi of Milo Haigh</p>
          </div>
        </Link>
      </footer>
    </div>
  )
}
