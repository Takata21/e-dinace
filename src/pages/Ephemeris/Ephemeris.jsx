import { useState } from 'react'
import styles from './Ephemeris.module.css'
import { RiAiGenerate } from 'react-icons/ri'
import { Aside } from './Aside'

export function Ephemeris() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="h-[calc(100vh-80px)] p-5">
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:hidden focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => handleClick()}
        >
          <RiAiGenerate /> Crear Efemérides
        </button>
      </div>
      <div className="left">
        <Aside isVisible={open} setVisible={handleClick} />
      </div>
      <div className="content h-full">
        <EmptyContent />
      </div>
    </div>
  )
}

export function EmptyContent() {
  return (
    <div className=" w-full h-full flex justify-center items-center flex-col">
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
  )
}

export function Content() {
  return <div>Ephemeris</div>
}
