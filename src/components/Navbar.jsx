import { Menu } from './index'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { useState } from 'react'
import { DarkThemeToggle } from 'flowbite-react'

export const Navbar = () => {
  const [menu, setMenu] = useState(false)
  // const MenuBtn = useRef()
  const handleClick = () => {
    setMenu((prev) => !prev)
    // MenuBtn.current.classList.toggle('active')
  }

  return (
    <header className="h-20 p-4 bg-white border-gray-200 dark:bg-gray-900">
      <div className="relative z-50 flex flex-wrap items-center justify-between h-full max-w-screen-xl mx-auto lg:flex-row lg:flex-nowrap dark:text-white">
        <div className="flex items-center justify-between w-full lg:w-auto lg:flex-1">
          <a
            href="https://dinace.utp.ac.pa/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/dinace_logo.png"
              className="h-16 mr-1"
              alt="dinace Logo"
            />
            <div>
              <span className="self-center text-[8px] font-medium whitespace-nowrap ">
                Universidad Tecnológica de Panamá
              </span>
              <h2 className="text-[9px] font-semibold text-[#29166F] dark:text-white">
                Dirección Nacional de Ciencias <br className="lg:hidden" />{' '}
                Espaciales
              </h2>
            </div>
          </a>
          <div className="lg:mr-4">
            <DarkThemeToggle />
            <button
              className="p-2 text-gray-500 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handleClick()}
            >
              {menu ? <CgClose size={24} /> : <CgMenuRightAlt size={24} />}
            </button>
          </div>
        </div>
        <Menu Menu={menu} handleClick={handleClick} />
      </div>
    </header>
  )
}
