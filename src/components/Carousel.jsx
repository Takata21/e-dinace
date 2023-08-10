import { Carousel } from 'flowbite-react'
import { VideoBackground } from './index'
import { ArrowRight } from './Icons'
import { Link } from 'react-router-dom'
export const Slider = () => {
  return (
    <div className="relative h-80">
      <Carousel slideInterval={6000} className="relative h-80 carousel">
        <div className="flex flex-col items-end justify-end h-full pl-5 text-left pb-9 dark:text-white">
          <VideoBackground source="/videos/milky_way_glowing_at_night.mp4" />
          <h3 className="text-[#da374f] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px]">
            {/* DESCUBRE CONFINES ESTELARES. */}
            Efemérides
          </h3>
          <Link
            to="/"
            className="text-2xl font-semibold text-white text-gradient"
          >
            Explorando el Calendario Cósmico, Tras los Pasos de los Astros
            <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end h-full pl-5 text-left pb-9 dark:text-white ">
          <VideoBackground source="/videos/constellations.mp4" />
          <h3 className="text-[#da374f] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px]">
            Constelaciones
          </h3>
          <Link className="w-full text-2xl font-semibold text-left text-white">
            Las Constelaciones nos Guían <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end h-full pl-5 text-left pb-9 dark:text-white ">
          <VideoBackground source="/videos/galaxy.mp4" />
          <h3 className="text-[#da374f] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px]">
            Galaxias
          </h3>
          <Link className="w-full text-2xl font-semibold text-left text-white">
            NAVEGA ENTRE LAS CONSTELACIONES DE GALAXIAS
            <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end h-full pl-5 text-left pb-9 dark:text-white ">
          <VideoBackground source="/videos/eclipse.mp4" />
          <h3 className="text-[#da374f] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px]">
            Eclipses
          </h3>
          <Link className="w-full text-2xl font-semibold text-left text-white">
            ENTRE LUZ Y SOMBRA <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end h-full pl-5 text-left pb-9 dark:text-white ">
          <VideoBackground source="/videos/MoonPhase.mp4" />
          <h3 className="text-[#da374f] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px]">
            Fases de la Luna
          </h3>
          <Link className="w-full text-2xl font-semibold text-left text-white">
            EXPLORA LAS FASES OCULTAS DE LA LUNA <ArrowRight />
          </Link>
        </div>
      </Carousel>
    </div>
  )
}
