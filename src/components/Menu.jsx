import { Link } from 'react-router-dom'

export const Menu = ({ Menuref }) => {
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
            Inicio
          </a>
        </li>
        <li>
          <Link
            href="#"
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Efemérides
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Constelaciones
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Galaxias
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Fases De La Luna
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block py-4 text-[#0c163b] font-medium text-xl md:py-0 links-transitions md:relative"
          >
            Eclipses
          </Link>
        </li>
      </ul>
    </nav>
  )
}
