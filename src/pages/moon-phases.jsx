import {
  convertAge,
  formatCoordinates,
  formatGeographicCoordinates,
  getLunarPhaseDescription,
} from '../utils/astronomyUtils'
import { BsSearch } from 'react-icons/bs'
import { Loader, ImageSkeleton } from '../components/index'
import { useState, useRef } from 'react'
import { useMoon } from '../hooks/useMoonPhases'
export function MoonPhases() {
  const inputRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 16)
  )
  const { isLoading, error, data, setDateTimeValue } = useMoon()
  const [isImageLoading, setIsImageLoading] = useState(true)
  const EARTH_DIAMETER = 12742

  const { days, hours, minutes } = convertAge(data?.age)

  const handleChange = (e) => {
    setSelectedDate(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
    setDateTimeValue(inputRef.current.value)
  }

  const handleKeyDown = (e) => {
    e.preventDefault() // Prevenir la entrada manual
  }

  return (
    <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-black xl:flex-row">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : (
        <>
          <section>
            <div className="rounded-md card">
              <h2>Hora (UTC):</h2>
              <p>{data?.time}</p>
              <div>
                <h2>Fase:</h2>
                <p className="text-2xl font-bold ">
                  {getLunarPhaseDescription(data?.age).es}
                </p>
                <pre></pre>
                <p>{`${data?.phase} % (${days}d ${hours}h ${minutes}m)`}</p>
              </div>
            </div>
          </section>
          <div className="relative h-full my-5 min-h-[388px] ">
            {isImageLoading && (
              <ImageSkeleton
                classes={'h-full absolute top-0 bottom-0 left-0 right-0 '}
              />
            )}
            <img
              src={data?.image.url}
              alt={data?.image.alt_text}
              className="h-full"
              onLoad={() => setIsImageLoading(false)}
            />
          </div>

          <section className="flex flex-col gap-8">
            <form className="">
              <div
                className="flex items-center p-1 mb-4 text-sm rounded text-blue bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <p className="">
                  {/* <span className="font-medium">Info alert!</span> */}
                  Fases lunares desde enero de 2012 hasta el año actual.
                </p>
              </div>
              <div className="flex items-stretch">
                <input
                  type="datetime-local"
                  name="datetime-input"
                  id="date-time-input"
                  className="bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded rounded-r-none "
                  ref={inputRef}
                  value={selectedDate}
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="flex items-center justify-center text-white bg-blue hover:bg-blue/80 focus:ring-4 focus:ring-blue-300 rounded text-sm px-5 py-2.5 xl:mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-l-none font-extrabold h-[46px] xl:h-full min-h-[46px]"
                  onClick={handleClick}
                >
                  <BsSearch />
                </button>
              </div>
            </form>

            <div className="flex flex-col gap-5 card">
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">Diámetro:</h2>
                <p>{data?.diameter} arcsec</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">Distancia:</h2>
                <p>
                  {data?.distance} km (
                  {(data?.distance / EARTH_DIAMETER).toFixed(2)}
                  &nbsp; diámetro(s) terrestres)
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">
                  Ascensión Recta y Declinación J2000:
                </h2>

                <p>{formatCoordinates(data?.j2000_ra, data?.j2000_dec)}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">Longitud y Latitud Sub-Solar:</h2>
                <p>
                  {formatGeographicCoordinates(
                    data?.subsolar_lon,
                    data?.subsolar_lat
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">
                  Longitud y Latitud Sub-Estrella:
                </h2>
                <p>
                  {formatGeographicCoordinates(
                    data?.subearth_lon,
                    data?.subearth_lat
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-gray-400">Ángulo de Posición:</h2>
                <p>{data?.posangle} °</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
