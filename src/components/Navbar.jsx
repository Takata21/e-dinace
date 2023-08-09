import { useRef } from 'react'
import { Menu } from './index'
export const Navbar = () => {
  const MenuBtn = useRef(null)
  const handleClick = () => {
    MenuBtn.current.classList.toggle('active')
  }
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900 h-20 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  relative md:flex-row md:flex-nowrap">
        <div className="p-4 flex justify-between items-center w-full md:w-auto md:flex-1">
          <a
            href="https://dinace.utp.ac.pa/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/dinace_logo.png"
              className="h-16 mr-3"
              alt="dinace Logo"
            />
            <div>
              <span className="self-center  font-semibold text-base whitespace-nowrap dark:text-white">
                Universidad Tecnológica de Panamá
              </span>
              <h2 className="text-base font-bold text-[#29166F]">
                Dirección Nacional de Ciencias Espaciales
              </h2>
            </div>
          </a>
          <div className="relative w-10 md:hidden">
            <button className="btn" onClick={() => handleClick()}>
              <div className=""></div>
            </button>
          </div>
        </div>
        <Menu Menuref={MenuBtn} />
      </div>
    </header>
  )
}
