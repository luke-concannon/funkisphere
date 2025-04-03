export function Logo() {
  return (
    <div className="relative flex aspect-square shrink-0 flex-row flex-wrap">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="bg-funk-lime size-1/3 shrink-0 rounded-full"
        />
      ))}
    </div>
  )
}
