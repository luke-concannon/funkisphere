import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default async function DanceRegistrationPage() {
  return (
    <div className='w-full h-full flex flex-col animate-fadeInFromSmall px-6'>
      <Link
        href={`/`}
        className='w-full group h-12 flex flex-row items-center justify-end pt-6 mb-4'
      >
        <XMarkIcon className='fill-slate-500 shrink-0 h-8 w-8 group-hover:scale-110 ease-in-out duration-150' />
      </Link>

      <header className='mb-4'>
        <p className='text-2xl text-center font-bungee px-2'>THE FUNKISPHERE</p>
        <p className='text-base text-center font-openSans mb-2 px-2'>
          Dance Class Registration
        </p>
      </header>

      <form className='w-full h-full flex flex-col space-y-2'>
        <select
          name='class'
          id='class'
          required
          className='w-full h-12  border border-funk-pink rounded-md px-2'
        >
          <option value=''>Select a class</option>
          <option value='little-funkers'>Little Funkers</option>
          <option value='doves'>Doves</option>
          <option value='big-shapes'>Big Shapes</option>
          <option value='mother-funkers'>Mother Funkers</option>
        </select>

        <label
          htmlFor='name'
          className='text-slate-900 text-base flex flex-col space-y-1'
        >
          <span>Dancer&apos;s Name</span>
          <input
            type='text'
            name='name'
            id='name'
            required
            placeholder='Enter Name'
            className='w-full h-12 border  border-funk-pink rounded-md px-2'
          />
        </label>

        <label
          htmlFor='name'
          className='text-slate-900 text-base flex flex-col space-y-1'
        >
          <span>Parent&apos;s Name</span>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Name'
            className='w-full h-12 border  border-funk-pink rounded-md px-2'
          />
        </label>

        {/*         
        <label
          htmlFor='email'
          className='text-slate-900 text-2xl flex flex-row items-center space-x-2'
        >
          <span>Email</span>
          <input
            type='email'
            name='email'
            id='email'
            required
            className='w-1/2 h-12 border-2 border-slate-900 rounded-md px-2'
          />
        </label>
        <label
          htmlFor='phone'
          className='text-slate-900 text-2xl flex flex-row items-center space-x-2'
        >
          <span>Phone</span>
          <input
            type='tel'
            name='phone'
            id='phone'
            required
            className='w-1/2 h-12 border-2 border-slate-900 rounded-md px-2'
          />
        </label>
        <label
          htmlFor='class'
          className='text-slate-900 text-2xl flex flex-row items-center space-x-2'
        >
          <span>Class</span>
          <select
            name='class'
            id='class'
            required
            className='w-1/2 h-12 border-2 border-slate-900 rounded-md px-2'
          >
            <option value=''>Select a class</option>
            <option value='little-funkers'>Little Funkers</option>
            <option value='doves'>Doves</option>
            <option value='big-shapes'>Big Shapes</option>
            <option value='mother-funkers'>Mother Funkers</option>
          </select>
        </label>
        <button
          type='submit'
          className='w-1/2 h-12 bg-funk-yellow text-slate-900 text-2xl font-bold rounded-md'
        >
          Register
        </button> */}
      </form>
    </div>
  )
}
