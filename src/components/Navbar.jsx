import { useRef } from 'react'
import { Menu } from './index'
export const Navbar = () => {
  const MenuBtn = useRef(null)
  const handleClick = () => {
    MenuBtn.current.classList.toggle('active')
  }
  return (
    <header className="h-20 bg-white border-gray-200 ">
      <div className="relative z-50 flex flex-wrap items-center justify-between max-w-screen-xl mx-auto md:flex-row md:flex-nowrap">
        <div className="flex items-center justify-between w-full p-4 pb-0 md:w-auto md:flex-1">
          <a
            href="https://dinace.utp.ac.pa/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/dinace_logo.png"
              className="h-16 mr-3"
              alt="dinace Logo"
            />
            <div>
              <span className="self-center text-xs font-medium whitespace-nowrap ">
                Universidad Tecnológica de Panamá
              </span>
              <h2 className="text-xs font-semibold text-[#29166F]">
                Dirección Nacional de Ciencias <br className="md:hidden" />{' '}
                Espaciales
              </h2>
            </div>
          </a>
          <div className="relative w-10 md:hidden">
            <button className="btn" onClick={() => handleClick()}>
              <div className=""></div>
            </button>
          </div>
        </div>
        <Menu Menuref={MenuBtn} handleClick={handleClick} />
      </div>
    </header>
  )
}
