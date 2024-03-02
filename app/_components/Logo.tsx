export function Logo() {
  return (
    <div className='flex-wrap w-full h-full flex flex-row aspect-square relative shrink-0'>
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className='rounded-full bg-funk-lime h-1/3 w-1/3' />
      ))}
    </div>
  )
}
