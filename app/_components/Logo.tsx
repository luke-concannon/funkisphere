import type { ReactElement } from "react"

export function Logo(): ReactElement {
  return (
    <div className="relative flex aspect-square h-full w-full shrink-0 flex-row flex-wrap">
      {Array.from({ length: 9 }, (element, index) => index).map((id) => (
        <div key={id} className="bg-funk-lime h-1/3 w-1/3 rounded-full" />
      ))}
    </div>
  )
}
