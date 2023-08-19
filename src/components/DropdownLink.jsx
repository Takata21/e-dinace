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
    <li className="relative">
      <button
        className="flex items-center justify-between mx-auto text-xl font-medium text-gray-900 rounded md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700"
        onClick={() => handleClick()}
      >
        <span>{title}</span>
        <ArrowDown />
      </button>
      <div
        className={`${
          show
            ? 'block z-10  font-normal bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700 dark:divide-gray-600 absolute left-0 right-0 w-56 mx-auto'
            : 'hidden z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
        } `}
      >
        <ul className="py-2 text-xl font-medium text-gray-700 dark:text-white">
          <li>
            <Link
              to="moon-phases"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Fases de la Luna
            </Link>
          </li>
          <li>
            <Link
              to="/lunar-eclipses"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Eclipses Lunares
            </Link>
          </li>
          <li>
            <Link
              to="/solar-eclipses"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Eclipses Solares
            </Link>
          </li>
        </ul>
      </div>
    </li>
  )
}
