export function RegistrationMenuDesktop() {
  return (
    <ul className='py-10 px-14 bg-funk-pink border-4 border-funk-lime w-[500px] bg-opacity-80 backdrop-blur absolute rounded top-[130%] right-0 text-center font-bungee '>
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
  )
}
