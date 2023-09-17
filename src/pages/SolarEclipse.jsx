import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEclipse } from '../hooks/useEclipses'
import { SOLAR_ECLIPSE, SOLAR_ECLIPSE_TYPES } from '../assets/constant'
import { ImageSkeleton, Loader } from '../components'
import { convertMinutesToHMS, formatEclipseDate } from '../utils/astronomyUtils'

export function SolarEclipse() {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [showAlert, setShowAlert] = useState(true)
  const { seq } = useParams()

  const { eclipseInfo, loading, messageError } = useEclipse({
    id: seq,
    eclipseType: SOLAR_ECLIPSE,
  })
  const {
    seq_num: seqNum,
    calendar_date: calendarDate,
    td_of_greatest_eclipse: tdOfGreatestEclipse,
    ΔT: deltaT,
    luna_num: lunaNum,
    ecl_type: eclType,
    gamma,
    ecl_mag: eclMag,
    lat: latitude,
    long: longitude,
    sun_alt: sunAltitude,
    path_width_km: pathWidthKm,
    central_dur: centralDuration,
  } = eclipseInfo

  return (
    <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-white dark:bg-gray-800">
      {showAlert && (
        <div
          className="relative p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <p>
            <span className="font-medium">ADVERTENCIA!</span> No mires
            directamente al Sol durante un eclipse sin protección especializada.
            Puede causar graves lesiones oculares, excepto durante la fase
            total.
          </p>
          <button
            type="button"
            className="absolute top-0 right-0 ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-4"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-white xl:flex-row dark:bg-gray-800">
          <section className="p-3 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 xl:h-max">
            <div className="dark:text-white">
              <h2>Fecha:</h2>
              <p>{formatEclipseDate({ calendarDate, type: 'long' })}</p>
              <div>
                <h2>Tipo:</h2>

                <p className="text-lg font-semibold xl:font-bold xl:text-2xl">
                  {SOLAR_ECLIPSE_TYPES[eclType?.trim()]}
                </p>
              </div>
            </div>
          </section>

          <div className="relative h-full my-5 min-h-[298px]">
            {isImageLoading && (
              <ImageSkeleton
                classes={
                  'h-full absolute top-0 bottom-0 left-0 right-0 h-[298px]'
                }
              />
            )}
            <img
              src={`/images/solarEclipses/${seqNum}.webp`}
              alt=""
              className="h-full rounded"
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
          <section className="flex flex-col gap-3 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col gap-5 p-5 dark:text-white">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Fecha en el Calendario:
                </h2>
                <p>{formatEclipseDate({ calendarDate, type: 'long' })}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Tiempo Dinámico del Eclipse Más Grande:
                </h2>
                <p>{tdOfGreatestEclipse}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Diferencia de Tiempo (ΔT):
                </h2>
                <p>{deltaT}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Número de la Luna:
                </h2>
                <p>{lunaNum}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Tipo de Eclipse:
                </h2>
                <p>{eclType}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">Gamma:</h2>
                <p>{gamma}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Magnitud del Eclipse :
                </h2>
                <p>{eclMag}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">Latitud:</h2>
                <p>{latitude}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">Longitud:</h2>
                <p>{longitude}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Altitud del Sol:
                </h2>
                <p>{sunAltitude}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Ancho del Camino (km):
                </h2>
                <p>{pathWidthKm?.length === 0 ? 'Sin Datos' : pathWidthKm}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Duración del Eclipse :
                </h2>
                <p>
                  <span>
                    {centralDuration?.length === 0
                      ? 'Sin Datos'
                      : convertMinutesToHMS(centralDuration)}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
