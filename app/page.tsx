import type { ReactElement } from "react"

export default function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}): ReactElement {
  return <main>check one three</main>
}
