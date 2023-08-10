import React from 'react'
import { Slider } from '../components'

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* <h1 className="absolute z-10 w-full font-semibold text-center text-white uppercase font-Space">
        Descubre Efemérides, Galaxias,
        <br className="md:hidden" /> Eclipses y más
      </h1> */}
      <Slider />
    </div>
  )
}
