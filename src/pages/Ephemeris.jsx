import { useState } from 'react'

import { RiAiGenerate, RiSideBarLine } from 'react-icons/ri'
import { useEphemerisStore } from '../store/Ephemeris'
import {
  CsvTableMobile,
  CsvTable,
  EphemerisAside,
  EphemerisMobileAside,
  Loader,
} from '../components/index'
export function Ephemeris() {
  const isLargeScreen = window.innerWidth > 768
  const [active, setActive] = useState(true)
  const [open, setOpen] = useState(false)
  const { ephemeris, loading } = useEphemerisStore()
  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  const handleActive = () => {
    setActive((prev) => !prev)
  }
  return (
    <div className="relative flex flex-col h-full">
      <div className="flex items-center px-5 py-2 mxd:justify-end toolbar h-14 dark:bg-gray-800 dark:border-gray-700">
        <button
          className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:hidden focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleClick}
        >
          <RiAiGenerate /> Crear Efemérides
        </button>
      </div>
      <div className="flex">
        {isLargeScreen ? (
          <EphemerisAside handleActive={handleActive} active={active} />
        ) : (
          <EphemerisMobileAside handleClick={handleClick} open={open} />
        )}
        <div className="flex-[3]  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 relative pb-5">
          {loading ? (
            <Loader className="absolute" />
          ) : ephemeris === null ? (
            <div className="flex items-center justify-center h-[calc(100vh-80px)] flex-col">
              <img
                src="/images/dinace_logo.png"
                alt="dinace logo"
                width={'250px'}
                height={'250px'}
              />
              <p className="px-5 font-medium">
                Para comenzar, por favor ingresa la fecha y/o lugar para generar
                efemérides.
              </p>
            </div>
          ) : isLargeScreen ? (
            <CsvTable info={ephemeris?.result} />
          ) : (
            <CsvTableMobile info={ephemeris?.result} />
          )}
        </div>
      </div>
    </div>
  )
}
