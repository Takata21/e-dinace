import { Link } from 'react-router-dom'

/* eslint-disable camelcase */
export function EclipseCard({ eclipse }) {
  const { seq_num, calendar_date, ecl_type, central_dur } = eclipse
  const formatDate = calendar_date
    ? new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(new Date(calendar_date))
    : null

  return (
    <article className="relative flex justify-center p-6 bg-white border border-gray-200 rounded-lg shadow lg:gap-5 dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/solar-eclipses/${seq_num}`} className="flex flex-col gap-5">
        <div className="">
          <img
            src={`/images/solarEclipses/${seq_num}.webp`}
            alt={`Mapa de la Tierra que muestra la ubicación geográfica para el eclipse solar del ${calendar_date}.`}
            width={'300px'}
            height={'300px'}
            className="lg:w-[350px] lg:h-auto"
          />
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex justify-between gap-10 lg:gap-2 lg:whitespace-nowrap">
            <span className="text-[#6e7884] font-medium">Fecha</span>
            <p className="text-[#a4b0c0] font-semibold">{formatDate}</p>
          </div>
          <div className="flex justify-between gap-10 lg:gap-2 lg:whitespace-nowrap">
            <span className="text-[#6e7884] font-medium">Tipo</span>
            <p className="text-[#a4b0c0] font-semibold">{ecl_type}</p>
          </div>
          <div className="flex justify-between gap-10 lg:gap-2 lg:whitespace-nowrap">
            <span className="text-[#6e7884] font-medium">Duración</span>
            <p className="text-[#a4b0c0] font-semibold">
              {central_dur?.length === 0 ? 'Sin Datos' : central_dur}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}
