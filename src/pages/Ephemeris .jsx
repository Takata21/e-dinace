import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from 'react-icons/tb'
import { Loader, EphemerisAside } from '../components'
import { CsvTable } from '../components/CsvTable'
import { useEphemerisStore } from '../store/Ephemeris'
import { useState } from 'react'

export function Ephemeris() {
  const [open, setOpen] = useState(true)
  const { ephemeris, loading } = useEphemerisStore()
  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="flex relative">
      <button
        type="button"
        className={`${open && 'hidden'} w-8 h-8 absolute left-5 top-5 z-10`}
        onClick={handleClick}
      >
        <TbLayoutSidebarLeftExpand size={32} />
      </button>
      <EphemerisAside handleClick={handleClick} open={open} />
      <div className="flex-[3]  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 relative">
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
            <p className="font-medium">
              Para comenzar, por favor ingresa la fecha y/o lugar para generar
              efemérides.
            </p>
          </div>
        ) : (
          <CsvTable info={ephemeris?.result} />
        )}
      </div>
    </div>
  )
}
