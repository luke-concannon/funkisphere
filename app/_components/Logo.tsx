import { SquiggleWorm } from "./SquiggleWorm"

export function Logo() {
  return (
    <div className="relative flex aspect-square flex-row flex-wrap">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="bg-foreground size-1/3 rounded-full" />
      ))}
    </div>
  )
}
