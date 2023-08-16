import { Link } from 'react-router-dom'

export const Menu = ({ Menuref, handleClick }) => {
  return (
    <nav className="menu md:flex-[2] md:justify-end" ref={Menuref}>
      <ul className="flex flex-col h-full p-4 text-center md:flex-row md:gap-5 md:justify-end ">
        <li>
          <a
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
            href="https://dinace.utp.ac.pa/"
            target="_blank"
            rel="noreferrer"
          >
            Dinace
          </a>
        </li>
        <li>
          <Link
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
            to="/"
            onClick={() => handleClick()}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Efemérides
          </Link>
        </li>
        <li>
          <Link
            to="/constellations"
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Constelaciones
          </Link>
        </li>
        <li>
          <Link
            to="/galaxies"
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Galaxias
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Fases De La Luna
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick()}
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Eclipses
          </Link>
        </li>
      </ul>
    </nav>
  )
}
