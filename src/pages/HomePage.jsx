import { ImageSkeleton, Slider } from '../components'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  findNextEclipses,
  getLunarPhaseDescription,
} from '../utils/astronomyUtils'
import { useMoon } from '../hooks/useMoon'
export function HomePage() {
  const { loading, moonPhases, days, hours, minutes } = useMoon()
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [nextEclipses, setNextEclipses] = useState([])
  useEffect(() => {
    return async () => {
      const eclipses = await findNextEclipses()
      setNextEclipses(eclipses)
      console.log(nextEclipses)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <Slider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 my-5 g font-Space p-4">
        <article className="relative flex justify-between p-3 bg-white border border-gray-200 rounded-lg shadow xl:gap-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-5 capitalize dark:text-white">
            <h5 className="text-xl font-bold">Fase lunar </h5>
            <div className="relative h-full my-5 min-h-[150px] min-w-[150px]">
              {isImageLoading && (
                <ImageSkeleton
                  classes={'h-full absolute top-0 bottom-0 left-0 right-0 '}
                />
              )}
              {moonPhases !== null && (
                <img
                  src={`/images/moon/${getLunarPhaseDescription(
                    moonPhases?.age
                  ).en.replace(/\s+/g, '')}.png`}
                  alt={moonPhases?.image.alt_text}
                  className=""
                  width={150}
                  height={150}
                  onLoad={() => setIsImageLoading(false)}
                />
              )}
            </div>

            <span className="text-lg font-bold ">
              {loading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
              ) : (
                getLunarPhaseDescription(moonPhases?.age).es
              )}
            </span>
          </div>
          <div className="">
            <div className="flex items-center justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Ángulo</span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">
                  {moonPhases?.posangle}°
                </p>
              )}
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Fase</span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">
                  {moonPhases?.phase} %
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-10 mb-8 xl:gap-5 ">
              <span className="text-[#6e7884] font-medium">Edad </span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse "
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">{`${days}d ${hours}h ${minutes}m`}</p>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 self-end text-white link-gradient">
            <Link
              to="/moon-phases"
              className="block px-6 py-3 font-semibold uppercase "
            >
              Ver Más
            </Link>
          </div>
        </article>
        <article className="relative flex justify-between p-3 bg-white border border-gray-200 rounded-lg shadow xl:gap-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-5 capitalize dark:text-white mxd:max-w-[150px]">
            <h5 className="text-lg font-bold">Proximo Eclipse Solar </h5>
            <div className="relative h-full my-5 min-h-[150px] min-w-[150px]">
              {isImageLoading && (
                <ImageSkeleton
                  classes={'h-full absolute top-0 bottom-0 left-0 right-0 '}
                />
              )}
              {moonPhases !== null && (
                <img
                  src="/images/eclipse-solar.jpg"
                  alt="solar eclipse images"
                  className="rounded-full"
                  width={150}
                  height={150}
                  onLoad={() => setIsImageLoading(false)}
                />
              )}
            </div>

            <span className="text-lg font-bold ">
              {loading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
              ) : (
                nextEclipses[0]?.elipseType
              )}
            </span>
          </div>
          <div className="">
            <div className="flex items-center justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Fecha</span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-medium">
                  {nextEclipses[0]?.calendar_date}
                </p>
              )}
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Hora</span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">
                  {nextEclipses[0]?.td_of_greatest_eclipse}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-10 mb-8 xl:gap-5 ">
              <span className="text-[#6e7884] font-medium">Duración </span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse "
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">
                  {' '}
                  {nextEclipses[0]?.duration}
                </p>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 self-end text-white link-gradient">
            <Link
              to="/moon-phases"
              className="block px-6 py-3 font-semibold uppercase "
            >
              Ver Más
            </Link>
          </div>
        </article>
        <article className="relative flex justify-between p-3 bg-white border border-gray-200 rounded-lg shadow xl:gap-5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center gap-5 capitalize dark:text-white mxd:max-w-[150px]">
            <h5 className="text-lg font-bold">Proximo Eclipse Lunar </h5>
            <div className="relative h-full my-5 min-h-[150px] min-w-[150px]">
              {isImageLoading && (
                <ImageSkeleton
                  classes={'h-full absolute top-0 bottom-0 left-0 right-0 '}
                />
              )}
              {moonPhases !== null && (
                <img
                  src="/images/moonEclipse.webp"
                  alt={moonPhases?.image.alt_text}
                  className="rounded-full"
                  width={150}
                  height={150}
                  onLoad={() => setIsImageLoading(false)}
                />
              )}
            </div>

            <span className="text-lg font-bold ">
              {loading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
              ) : (
                nextEclipses[1]?.elipseType
              )}
            </span>
          </div>
          <div className="">
            <div className="flex items-center justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Fecha</span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-medium">
                  {nextEclipses[1]?.calendar_date}
                </p>
              )}
            </div>
            <div className="flex justify-between gap-10 mb-8 xl:gap-5">
              <span className="text-[#6e7884] font-medium">Hora</span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">
                  {nextEclipses[1]?.td_of_greatest_eclipse}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-10 mb-8 xl:gap-5 ">
              <span className="text-[#6e7884] font-medium">Duración </span>
              {loading ? (
                <div
                  role="status"
                  className="grid items-center h-full max-w-sm animate-pulse "
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
                </div>
              ) : (
                <p className="text-[#a4b0c0] font-semibold">
                  {nextEclipses[1]?.duration}
                </p>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 self-end text-white link-gradient">
            <Link
              to="/moon-phases"
              className="block px-6 py-3 font-semibold uppercase "
            >
              Ver Más
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
