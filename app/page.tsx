import type { ReactElement } from "react"

export default function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}): ReactElement {
  return <main>Weeee one three</main>
}
