import type { ReactElement } from "react"

export default function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>
}): ReactElement {
  return <main></main>
}
