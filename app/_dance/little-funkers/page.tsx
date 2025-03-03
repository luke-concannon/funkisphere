import type { ReactElement } from "react"
import Link from "next/link"

// import { BoltIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

// import { Logo } from "@/app/_components/Logo"

export default function HomePage(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between bg-white">
      <div className="relative max-w-7xl">
        <nav className="flex h-32 w-full flex-row items-center justify-between px-10">
          <Link
            className="relative flex"
            href={{ pathname: `/`, query: { close_modal: "true" } }}
          >
            <div className="w-24">{/* <Logo /> */}</div>
            <div className="absolute top-0 left-2 flex flex-col space-y-1 text-[1.2rem]">
              <h1 className="font-openSans font-bold">THE</h1>
              <h1 className="font-openSans font-bold">FUNKIS</h1>
              <h1 className="font-openSans font-bold">PHERE</h1>
            </div>
          </Link>

          <div className="font-bungee text-right text-4xl text-slate-900">
            <h2 className="lg:text-7xl lg:whitespace-nowrap">Little Funkers</h2>
          </div>
        </nav>
        <div className="relative flex flex-col">
          <div className="bg-funk-pink flex flex-col items-center rounded p-10 lg:flex-row">
            <p className="mb-6 text-xl leading-relaxed text-white lg:mb-0 lg:pr-20">
              Little Funkers in-school therapeutic dance classes focus on
              building expression, confidence, connection and well being. The
              program aims to increase access, awareness and equity for tamariki
              attending professional dance classes. Weekly Juniors (5-7yrs) and
              Seniors (8-11yrs) classes are run at TPS, Motupipi and Central
              Schools.
            </p>
            <a
              className="border-funk-lime bg-funk-pink font-openSans flex w-fit flex-row items-center space-x-1 rounded border-4 px-4 py-2 text-center font-bold text-white duration-150 ease-in-out hover:scale-95"
              href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
              rel="noreferrer"
              target="_blank"
            >
              <p className="whitespace-nowrap">Register for Term 1</p>
              {/* <ChevronRightIcon className="h-4 w-4 fill-white" /> */}
            </a>
          </div>

          <div className="mt-10 flex w-full flex-col lg:flex-row lg:justify-evenly">
            <div className="lg:border-funk-pink relative rounded p-10 lg:w-[30%] lg:border-4">
              <h2 className="font-bungee border-funk-lime bg-funk-pink mb-4 rounded border-4 p-2 text-center text-2xl text-white">
                Wriggle & Jump
              </h2>
              <p className="text-lg text-slate-900">
                This class is all about supporting akonga who need to wriggle,
                jump and express themselves. For many tamariki, having the
                opportunity to do this during their school day can make a huge
                difference to their health, happiness and learning.
              </p>
            </div>

            <div className="flex h-px w-full flex-row items-center justify-center lg:hidden">
              <span className="bg-funk-pink h-full w-3/4" />
            </div>

            <div className="lg:border-funk-pink relative rounded p-10 lg:w-[30%] lg:border-4">
              <h2 className="font-bungee border-funk-lime bg-funk-pink mb-4 rounded border-4 p-2 text-center text-2xl text-white">
                Easier for Whanau
              </h2>
              <p className="text-lg text-slate-900">
                We know from experience that classes can be a big commitment for
                families. By incorporating classes into their regular schooling
                week and removing the pressure to rehearse/perform/buy gear/buy
                costumes, we aim to make life a little easier for whanau.
              </p>
            </div>

            <div className="flex h-px w-full flex-row items-center justify-center lg:hidden">
              <span className="bg-funk-pink h-full w-3/4" />
            </div>

            <div className="lg:border-funk-pink relative rounded p-10 lg:w-[30%] lg:border-4">
              <h2 className="font-bungee border-funk-lime bg-funk-pink mb-4 rounded border-4 p-2 text-center text-2xl text-white">
                Celebrate Talent
              </h2>
              <p className="text-lg text-slate-900">
                We have an amazing arts community here in Golden Bay. Little
                Funkers aim to share a safe space for our talented young dancers
                to build confidence, improvise and learn conventional dance
                movements, whilst building strength and flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-funk-yellow border-funk-pink flex w-full flex-row items-center justify-center space-x-2 border-t-4 px-10 py-6">
        <Link className="flex flex-row items-center space-x-2" href="/">
          {/* <BoltIcon className="fill-funk-pink border-funk-yellow stroke-funk-pink h-12 w-12 shrink-0 border-2" /> */}
          <div className="flex flex-col justify-center">
            <h1 className="text-funk-pink text-2xl whitespace-nowrap">
              THE FUNKISPHERE
            </h1>
            <p className="whitespace-nowrap">The Creative Mahi of Milo Haigh</p>
          </div>
        </Link>
      </footer>
    </div>
  )
}
