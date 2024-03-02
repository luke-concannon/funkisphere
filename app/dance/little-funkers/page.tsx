import Link from 'next/link'
import { BoltIcon } from '@heroicons/react/24/solid'
import { Logo } from '@/app/_components'

export default async function HomePage() {
  return (
    <div className='w-full flex  flex-col relative'>
      <nav className='w-full h-32'>
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
        <div className='absolute w-2/5 h-px bg-funk-pink right-0 top-0' />

        <ul className='pt-6 px-10 font-openSans text-right space-y-1 relative font-bold text-slate-900 text-lg mb-6'>
          <li>Term Fees, $10 per week</li>
          <li>TPS, Motupipi & Central</li>
          <li>Juniors 5-7yrs | Seniors 8-11yrs</li>
        </ul>
        <div className='w-2/3 mb-6 h-px bg-funk-pink' />
        <p className='p-10 text-slate-900 text-2xl  mb-6'>
          Little Funkers in-school therapeutic dance classes focus on building
          expression, confidence, connection and well being. The program aims to
          increase access, awareness and equity for tamariki attending
          professional dance classes. The classes cover a range of styles.
        </p>

        <div className='px-10 py-14 bg-funk-pink'>
          <h2 className='font-bungee mb-2 text-2xl text-white'>
            Wriggle & Jump
          </h2>
          <p className='text-slate-900 text-2xl'>
            This class is all about supporting akonga who need to wriggle, jump
            and express themselves. For many tamariki, having the opportunity to
            do this during their school day can make a huge difference to their
            health, happiness and learning.
          </p>
        </div>

        <div className='bg-funk-green px-10 py-14 '>
          <h2 className='font-bungee mb-2 text-2xl text-white'>
            Easier for Whanau
          </h2>
          <p className='text-slate-900 text-2xl'>
            We know from experience that classes can be a big commitment for
            families. By incorporating classes into their regular schooling week
            and removing the pressure to rehearse/perform/buy gear/buy costumes,
            we aim to make life a little easier for whanau.
          </p>
        </div>

        <div className='  bg-funk-mango px-10 py-14'>
          <h2 className='font-bungee mb-2 text-2xl text-white'>
            Celebrate our Talent
          </h2>
          <p className='text-slate-900 text-2xl'>
            We have an amazing arts community here in Golden Bay. Little Funkers
            aim to share a safe space for our talented young dancers to build
            confidence, improvise and learn conventional dance movements, whilst
            building strength and flexibility.
          </p>
        </div>
      </div>
    </div>
  )
}
