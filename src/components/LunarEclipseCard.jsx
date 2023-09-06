/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import { formatEclipseDate, convertMinutesToHMS } from '../utils/astronomyUtils'
export function LunarEclipseCard({ eclipse }) {
  const { calendar_date, ecl_type, seq_num, phase_duration } = eclipse

  return (
    <article className="relative flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow lg:gap-5 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-bg duration-300">
      <Link
        to={`/lunar-eclipses/${seq_num}134`}
        className="flex flex-col gap-5"
      >
        <div className="">
          <img
            src={`/images/lunarEclipse/${seq_num}134.webp`}
            alt={`Mapa de la Tierra que muestra la ubicación geográfica para el eclipse lunar del ${calendar_date}.`}
            width={'300px'}
            height={'300px'}
            className="lg:w-[350px] lg:h-auto rounded"
          />
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex justify-between gap-10 lg:gap-2 lg:whitespace-nowrap">
            <span className="text-[#6e7884] font-medium">Fecha</span>
            <p className="text-[#a4b0c0] font-semibold">
              {formatEclipseDate(calendar_date)}
            </p>
          </div>
          <div className="flex justify-between gap-10 lg:gap-2 lg:whitespace-nowrap">
            <span className="text-[#6e7884] font-medium">Tipo</span>
            <p className="text-[#a4b0c0] font-semibold">{ecl_type}</p>
          </div>
          <div className="flex justify-between gap-10 lg:gap-2 lg:whitespace-nowrap">
            <span className="text-[#6e7884] font-medium">Duración</span>
            <p className="text-[#a4b0c0] font-semibold">
              {phase_duration?.total_m.length === 0
                ? 'Sin Datos'
                : convertMinutesToHMS(phase_duration?.total_m)}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}
