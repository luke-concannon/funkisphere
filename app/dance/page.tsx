import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default async function HomePage() {
  return (
    <div className='w-full flex bg-funk-mango flex-col'>
      <nav className='flex flex-row justify-end items-center w-full px-10 py-4'>
        <button>
          <Bars3Icon className='h-8 w-8 text-slate-900' />
        </button>
      </nav>
      <div className='w-full flex flex-col space-y-10 px-20 pb-20 pt-10'>
        <section className='flex flex-row space-x-10 w-full'>
          <div className='w-2/3 flex flex-col'>
            <h1 className='font-bungeeOutline text-7xl'>Little Funkers</h1>
            <h2 className='font-bungee text-lg'>
              Kids dance classes in Schools
            </h2>
            <p className='pt-2'>
              Man-of-war capstan warp piracy mutiny belay lass. Broadside parrel
              Sea Legs yard lateen sail Admiral of the Black interloper. Capstan
              hearties scuppers lad crack Jennys tea cup Sink me jack. Nipper
              salmagundi skysail loot square-rigged hornswaggle lanyard. Skysail
              haul wind provost lass Corsair jack line. Yard rope&apos;s end
              smartly Admiral of the Black Yellow Jack trysail fire in the hole.
              Buccaneer Brethren of the Coast topsail Barbary Coast Yellow Jack
              log nipperkin. Keel ho parrel Yellow Jack lateen sail wench line.
            </p>
          </div>
          <div className='w-1/3 h-full bg-gray-200 rounded'></div>
        </section>
        <div className='w-full h-px bg-gray-200' />
        <section className='w-full flex flex-row space-x-10 items-center'>
          <div className='flex flex-col space-y-6 w-1/3'>
            {/* <div className='rounded w-full h-52 bg-gray-200' /> */}
            <Image
              src='/images/tps-logo.png'
              alt='Takaka Primary School'
              width={500}
              height={500}
              className='object-contain'
            />
            <div className='space-y-2'>
              {/* <h3 className='text-slate-900 text-2xl font-bungee'>
                Takaka Primary School
              </h3> */}
              <p className='text-slate-900 font-sans '>
                Man-of-war capstan warp piracy mutiny belay lass. Broadside
                parrel Sea Legs yard lateen sail Admiral of the Black
                interloper. Capstan hearties scuppers lad crack Jennys tea cup
                Sink me jack. Nipper salmagundi skysail loot square-rigged
                hornswaggle lanyard. Skysail haul wind provost lass Corsair jack
                line. Yard rope&apos;s end smartly Admiral of the Black Yellow
                Jack trysail fire in the hole. Buccaneer Brethren of the Coast
                topsail Barbary Coast Yellow Jack log nipperkin. Keel ho parrel
                Yellow Jack lateen sail wench line.
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-6 w-1/3'>
            {/* <div className='rounded h-52 w-full bg-gray-200' /> */}
            <Image
              src='/images/motupipi-school-logo.png'
              alt='Motupipi School'
              width={500}
              height={500}
              layout='responsive'
              className='object-contain'
            />
            <div className='space-y-2 '>
              {/* <h3 className='text-slate-900 text-2xl font-bungee'>
                Motupipi School
              </h3> */}
              <p className='text-slate-900 font-sans '>
                Man-of-war capstan warp piracy mutiny belay lass. Broadside
                parrel Sea Legs yard lateen sail Admiral of the Black
                interloper. Capstan hearties scuppers lad crack Jennys tea cup
                Sink me jack. Nipper salmagundi skysail loot square-rigged
                hornswaggle lanyard. Skysail haul wind provost lass Corsair jack
                line. Yard rope&apos;s end smartly Admiral of the Black Yellow
                Jack trysail fire in the hole. Buccaneer Brethren of the Coast
                topsail Barbary Coast Yellow Jack log nipperkin. Keel ho parrel
                Yellow Jack lateen sail wench line.
              </p>
            </div>
          </div>
          <div className='flex flex-col space-y-6 w-1/3'>
            <div className='rounded h-52 w-full bg-gray-200' />
            <div className='space-y-2 '>
              <h3 className='text-slate-900 text-2xl font-bungee'>
                Takaka Central School
              </h3>
              <p className='text-slate-900 font-sans '>
                Man-of-war capstan warp piracy mutiny belay lass. Broadside
                parrel Sea Legs yard lateen sail Admiral of the Black
                interloper. Capstan hearties scuppers lad crack Jennys tea cup
                Sink me jack. Nipper salmagundi skysail loot square-rigged
                hornswaggle lanyard. Skysail haul wind provost lass Corsair jack
                line. Yard rope&apos;s end smartly Admiral of the Black Yellow
                Jack trysail fire in the hole. Buccaneer Brethren of the Coast
                topsail Barbary Coast Yellow Jack log nipperkin. Keel ho parrel
                Yellow Jack lateen sail wench line.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
