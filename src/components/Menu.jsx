import { Link } from 'react-router-dom'

export const Menu = ({ Menu, handleClick }) => {
  return (
    <nav
      className={`${
        Menu ? 'active' : ''
      } menu lg:flex-[2] lg:justify-end dark:bg-gray-900 dark:text-white`}
    >
      <ul className="flex flex-col h-full p-4 text-center lg:flex-row lg:gap-5 lg:justify-end ">
        <li>
          <a
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
            href="https://dinace.utp.ac.pa/"
            target="_blank"
            rel="noreferrer"
          >
            Dinace
          </a>
        </li>
        <li>
          <Link
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
            to="/"
            onClick={() => handleClick()}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
          >
            Efemérides
          </Link>
        </li>
        <li>
          <Link
            to="/constellations"
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
          >
            Constelaciones
          </Link>
        </li>
        <li>
          <Link
            to="/galaxies"
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
          >
            Galaxias
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
          >
            Fases De La Luna
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl lg:py-0 links-transitions lg:relative dark:text-white"
          >
            Eclipses
          </Link>
        </li>
      </ul>
    </nav>
  )
}
