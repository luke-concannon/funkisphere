export function Logo() {
  return (
    <div className='flex-wrap w-full flex flex-row aspect-square relative'>
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className='rounded-full bg-funk-lime h-1/3 w-1/3' />
      ))}
    </div>
  )
}
