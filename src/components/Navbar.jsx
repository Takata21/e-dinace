import { Menu } from './index'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { useState } from 'react'
import { DarkThemeToggle } from './DarkThemeToggle'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [menu, setMenu] = useState(false)
  // const MenuBtn = useRef()
  const handleClick = () => {
    setMenu((prev) => !prev)
    // MenuBtn.current.classList.toggle('active')
  }

  return (
    <header className="h-20 p-4 bg-white border-gray-200 dark:bg-gray-900">
      <div className="relative z-50 flex flex-wrap items-center justify-between h-full mx-auto xl:flex-row xl:flex-nowrap dark:text-white">
        <div className="flex items-center justify-between w-full xl:w-auto xl:flex-1">
          <Link to="/" className="flex items-center">
            <img
              src="/images/dinace_logo.png"
              className="h-16 mr-1"
              height="64px"
              width="64px"
              alt="dinace Logo"
            />
            <div>
              <span className="self-center text-[8px] font-medium whitespace-nowrap ">
                Universidad Tecnológica de Panamá
              </span>
              <h2 className="text-[9px] font-semibold text-[#29166F] dark:text-white">
                Dirección Nacional de Ciencias <br className="xl:hidden" />{' '}
                Espaciales
              </h2>
            </div>
          </Link>
          <div className="xl:mr-4">
            <DarkThemeToggle />
            <button
              className="p-2 text-gray-500 rounded cursor-pointer xl:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
              onClick={() => handleClick()}
              name="menu-button"
              aria-label="Menu"
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
