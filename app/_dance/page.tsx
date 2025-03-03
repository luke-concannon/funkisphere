import type { ReactElement } from "react"
import Link from "next/link"
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid"

export default function DancePage(): ReactElement {
  return (
    <div
      className={`animate-fadeInFromSmall flex h-full w-full max-w-7xl flex-col`}
    >
      <Link
        className="group flex h-12 w-full flex-row items-center justify-end px-4 pt-6"
        href={{ pathname: `/`, query: { close_modal: "true" } }}
      >
        <XMarkIcon className="h-8 w-8 shrink-0 fill-slate-500 duration-150 ease-in-out group-hover:scale-110" />
      </Link>
      <ul className={`flex h-full w-full flex-col px-10`}>
        <Link
          className={`group relative flex h-1/4 w-full shrink-0 grow-0 flex-row items-center justify-between space-x-1 text-4xl text-slate-900 opacity-20`}
          href={`#`}
        >
          <li className="flex h-full w-full flex-col justify-center">
            <h2 className="text-2xl whitespace-nowrap lg:text-5xl">
              BIG SHAPES
            </h2>
            <p className="openSans text-lg lg:text-2xl">
              After school contemporary dance classes for teens 12 - 18 yrs
            </p>
          </li>
          <ChevronRightIcon className="fill-funk-pink flex h-10 w-10 shrink-0" />
        </Link>
        <div className="my-1 flex h-px w-full shrink-0 flex-row items-center justify-center">
          <span className="bg-funk-pink h-full w-11/12" />
        </div>
        <Link
          className={`group relative flex h-1/4 w-full shrink-0 grow-0 flex-row items-center justify-between space-x-1 text-4xl text-slate-900 opacity-20`}
          href={`#`}
        >
          <li className="flex h-full w-full flex-col justify-center">
            <h2 className="text-2xl whitespace-nowrap lg:text-5xl">DOVES</h2>
            <p className="openSans text-lg lg:text-2xl">
              After school contemporary dance classes for kids 8 - 12 yrs
            </p>
          </li>
          <ChevronRightIcon className="fill-funk-pink flex h-10 w-10 shrink-0" />
        </Link>
        <div className="my-1 flex h-px w-full shrink-0 flex-row items-center justify-center">
          <span className="bg-funk-pink h-full w-11/12" />
        </div>
        <Link
          className={`group relative flex h-1/4 w-full shrink-0 grow-0 flex-row items-center justify-between space-x-1 text-4xl text-slate-900`}
          href={`/dance/little-funkers`}
        >
          <li className="flex h-full flex-col justify-center">
            <h2 className="text-2xl whitespace-nowrap lg:text-5xl">
              LITTLE FUNKERS
            </h2>
            <p className="openSans text-lg lg:text-2xl">
              In-school therapeutic dance classes for kids 7 - 11 yrs
            </p>
          </li>
          <ChevronRightIcon className="fill-funk-pink flex h-10 w-10 shrink-0" />
        </Link>
        <div className="my-1 flex h-px w-full shrink-0 flex-row items-center justify-center">
          <span className="bg-funk-pink h-full w-11/12" />
        </div>
        <Link
          className={`group relative flex h-1/4 w-full shrink-0 grow-0 flex-row items-center justify-between space-x-1 text-4xl text-slate-900 opacity-20`}
          href={`#`}
        >
          <li className="flex h-full w-full flex-col justify-center">
            <h2 className="text-2xl whitespace-nowrap lg:text-5xl">
              MOTHER FUNKERS
            </h2>
            <p className="openSans text-lg lg:text-2xl">
              Wild dance classes for grown ups.
            </p>
          </li>
          <ChevronRightIcon className="fill-funk-pink flex h-10 w-10 shrink-0" />
        </Link>
      </ul>
      <footer className="h-12 w-full" />
    </div>
  )
}
