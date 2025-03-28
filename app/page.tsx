import type { ReactElement } from "react"

import PulsingElement from "./_components/Test"

export default function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>
}): ReactElement {
  return (
    <main>
      <PulsingElement />
    </main>
  )
}
