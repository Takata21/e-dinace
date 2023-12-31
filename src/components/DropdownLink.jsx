import { useState } from 'react'
import { ArrowDown } from './Icons'
import { Link } from 'react-router-dom'

export function DropdownLink({ title, close }) {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow((prev) => !prev)
    close()
  }
  return (
    <li className="">
      <button
        className="flex items-center justify-between mx-auto text-xl font-medium text-gray-900 rounded md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700"
        onClick={() => setShow((prev) => !prev)}
      >
        <span>{title}</span>
        <ArrowDown />
      </button>
      <div
        className={`${
          show
            ? 'block z-10  font-normal bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700 dark:divide-gray-600 absolute   w-56 right-0 '
            : 'hidden'
        } `}
      >
        <ul className="py-2 text-xl font-medium text-gray-700 dark:text-white">
          <li>
            <Link
              to="/moon-phases"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                handleClick()
              }}
            >
              Fases de la Luna
            </Link>
          </li>
          <li>
            <Link
              to="/lunar-eclipses"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                handleClick()
              }}
            >
              Eclipses Lunares
            </Link>
          </li>
          <li>
            <Link
              to="/solar-eclipses"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                handleClick()
              }}
            >
              Eclipses Solares
            </Link>
          </li>
        </ul>
      </div>
    </li>
  )
}
