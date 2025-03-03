import type { ReactElement } from "react"

export function RegistrationMenuDesktop(): ReactElement {
  return (
    <ul className="bg-funk-pink border-funk-lime bg-opacity-80 font-bungee absolute top-[130%] right-0 w-[500px] rounded border-4 px-14 py-10 text-center backdrop-blur">
      <li className="group/mother">
        <a
          href="https://airtable.com/app28ABXN7BKl5b0o/pag1KDOykt511tABA/form"
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-sm">Tuesdays, 9:30 - 11am, Kotinga Hall</p>
          <h2 className="text-3xl whitespace-nowrap text-white duration-150 ease-in-out">
            Muther Funkers
          </h2>

          <p className="text-lg font-bold whitespace-nowrap">
            Wild dance classes for grown-ups
          </p>
        </a>
      </li>

      <div className="my-6 flex h-px w-full flex-row justify-center">
        <span className="h-full w-3/4 bg-white" />
      </div>

      <li className="group/shapes">
        <a
          className=""
          href="https://airtable.com/app28ABXN7BKl5b0o/pagoFYF3F7u0y1nmt/form"
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-sm">Thursdays, 3:30 - 4.45pm, Motupipi Hall</p>

          <h2 className="text-3xl whitespace-nowrap text-white duration-150 ease-in-out">
            Big Shapes
          </h2>
          <p className="text-lg font-bold">
            After school contemporary dance classes for teens 12 - 18 yrs
          </p>
        </a>
      </li>

      <div className="my-6 flex h-px w-full flex-row justify-center">
        <span className="h-full w-3/4 bg-white" />
      </div>

      <li className="group/funk">
        <a
          className="bg-opacity-20 duration-150 ease-in-out"
          href={`https://airtable.com/app28ABXN7BKl5b0o/pagnsoyfjPF7LTMvi/form`}
          rel="noreferrer"
          target="_blank"
        >
          <p className="text-sm">Tues - Thurs, 1:30pm & 2pm</p>

          <h2 className="text-3xl whitespace-nowrap text-white duration-150 ease-in-out">
            Little Funkers
          </h2>

          <p className="text-lg font-bold">
            In-school therapeutic dance classes for kids 7 - 11 yrs @ TPS,
            Central and Motupipi
          </p>
        </a>
      </li>
    </ul>
  )
}
