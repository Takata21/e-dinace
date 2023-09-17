import React from 'react'
import { Slider } from '../components'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Slider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 my-5 g font-Space p-4">
        <article className="relative flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow xl:gap-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-5 capitalize dark:text-white">
            <h5 className="text-xl font-bold">Fase lunar actual</h5>
            <img src="./images/moon.png" alt="" width={150} />
            <span className="text-lg font-bold ">waning crescent</span>
          </div>
          <div className="">
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Inicio</span>
              <p className="text-[#a4b0c0] font-semibold">23/09/2023</p>
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Finaliza</span>
              <p className="text-[#a4b0c0] font-semibold">23/10/2023</p>
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Días Totales</span>
              <p className="text-[#a4b0c0] font-semibold">12</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 self-end text-white link-gradient">
            <Link to="/" className="block px-6 py-3 font-semibold uppercase ">
              siguiente fase
            </Link>
          </div>
        </article>
        <article className="relative flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow xl:gap-5 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="flex flex-col items-center justify-center gap-5 capitalize dark:text-white ">
            <h5 className="text-xl font-bold">Proximo Eclipse Solar</h5>
            <img
              src="./images/eclipse-solar.jpg"
              alt=""
              width={150}
              className="rounded-full"
            />
            <span className="text-lg font-bold ">Annular</span>
          </div>
          <div className="">
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Fecha</span>
              <p className="text-[#a4b0c0] font-semibold">14/10/2023</p>
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Hora</span>
              <p className="text-[#a4b0c0] font-semibold">18:01</p>
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Duración</span>
              <p className="text-[#a4b0c0] font-semibold">5m 17s</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 self-end text-white link-gradient">
            <Link to="/" className="block px-6 py-3 font-semibold uppercase ">
              Ver Más
            </Link>
          </div>
        </article>
        <article className="relative flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow xl:gap-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-5 capitalize dark:text-white">
            <h5 className="text-xl font-bold">Proximo Eclipse Lunar</h5>
            <img
              src="./images/eclipse-solar.jpg"
              alt=""
              width={150}
              className="rounded-full"
            />
            <span className="text-lg font-bold ">parcial</span>
          </div>
          <div className="">
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Fecha</span>
              <p className="text-[#a4b0c0] font-semibold">23/10/2023</p>
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Hora</span>
              <p className="text-[#a4b0c0] font-semibold">20:15</p>
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Duración</span>
              <p className="text-[#a4b0c0] font-semibold">01h 17m</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 self-end text-white link-gradient">
            <Link to="/" className="block px-6 py-3 font-semibold uppercase ">
              Ver Más
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
