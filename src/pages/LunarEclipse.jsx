import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEclipse } from '../hooks/useEclipses'
import { LUNAR_ECLIPSE, LUNAR_ECLIPSE_TYPES } from '../assets/constant'
import { ImageSkeleton, Loader } from '../components'
import { convertMinutesToHMS, formatEclipseDate } from '../utils/astronomyUtils'

export function LunarEclipse() {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const { seq } = useParams()

  const { eclipseInfo, loading, messageError } = useEclipse({
    id: seq,
    eclipseType: LUNAR_ECLIPSE,
  })
  const {
    calendar_date: calendarDate,
    td_of_greatest_eclipse: tdOfGreatestEclipse,
    Δt: deltaT,
    luna_num: lunaNum,
    ecl_type: eclType,
    qse,
    gamma,
    pen_mag: penMag,
    um_mag: umMag,
    phase_duration: phaseDuration,
  } = eclipseInfo

  return (
    <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-white lg:flex-row dark:bg-gray-800">
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="p-3 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 lg:h-max">
            <div className="dark:text-white">
              <h2>Fecha:</h2>
              <p>{formatEclipseDate({ calendarDate, type: 'long' })}</p>
              <div>
                <h2>Tipo:</h2>

                <p className="text-lg font-semibold lg:font-bold lg:text-2xl">
                  {LUNAR_ECLIPSE_TYPES[eclType]}
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
              src={`/images/lunarEclipse/${seq}.webp`}
              alt=""
              className="h-full rounded"
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
          <section className="flex flex-col gap-8 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700">
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
                  Diferencia de Tiempo(ΔT):
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
                <h2 className="font-semibold dark:text-gray-200">
                  Valor de Posición o Geometría:
                </h2>
                <p>{qse}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">Gamma:</h2>
                <p>{gamma}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Magnitud del Eclipse Penumbral:
                </h2>
                <p>{penMag}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Magnitud de la Zona Umbral:
                </h2>
                <p>{umMag}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold dark:text-gray-200">
                  Duración de las Fases:
                </h2>
                <div>
                  <p>
                    Penumbral:{' '}
                    <span>
                      {phaseDuration?.pen_m.length === 0
                        ? 'Sin Datos'
                        : convertMinutesToHMS(phaseDuration?.pen_m)}
                    </span>
                  </p>
                  <p>
                    Parcial:{' '}
                    <span>
                      {phaseDuration?.par_m.length === 0
                        ? 'Sin Datos'
                        : convertMinutesToHMS(phaseDuration?.par_m)}
                    </span>
                  </p>
                  <p>
                    Total:{' '}
                    <span>
                      {phaseDuration?.total_m.length === 0
                        ? 'Sin Datos'
                        : convertMinutesToHMS(phaseDuration?.total_m_m)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
