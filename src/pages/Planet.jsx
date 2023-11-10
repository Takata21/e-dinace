import { useParams } from 'react-router-dom'
import { usePlanet } from '../hooks/usePlanets'
import { Loader } from '../components'
import Zoom from 'react-medium-image-zoom'
import '../image-zoom.css'
export function Planet() {
  const { name } = useParams()
  const { planetInfo, loading, messageError } = usePlanet({ name })
  return (
    <div className="px-5 dark:text-white xl:px-24 planets bg-[#fafafa] dark:bg-gray-800 min-h-[calc(100vh-80px)]">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div className="gap-8 xl:flex xl:my-5">
            <Zoom>
              <img
                src={`/images/planets/${planetInfo.englishName.toLowerCase()}.png`}
                alt=""
                className="xl:min-w-[350px] xl:min-h-[300px]"
                data-testid="planet-img"
              />
            </Zoom>
            <div>
              <h2 className="mb-5 text-4xl font-bold text-center text-white uppercase font-Antonio xl:text-left xl:text-7xl">
                {planetInfo?.name}
              </h2>
              <p
                className="text-white font-Metropolis xl:leading-7"
                data-testid="planet-desc"
              >
                {planetInfo?.overview}
              </p>
            </div>
          </div>
          <ul
            className="flex flex-col flex-wrap gap-3 my-5 xl:flex-row"
            data-testid="planet-info-list"
          >
            <li className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center xl:flex-col xl:justify-start xl:items-start xl:w-64  rounded-sm bg-gray-800">
              <span className="text-lg font-semibold text-white uppercase opacity-50">
                Rotación
              </span>
              <span className="w-1/2 text-right text-white uppercase font-Antonio xl:text-left xl:w-auto xl:text-xl">
                {planetInfo?.rotation}
              </span>
            </li>
            <li className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center xl:flex-col xl:justify-start xl:items-start xl:w-64  rounded-sm bg-gray-800">
              <span className="text-lg font-semibold text-white uppercase opacity-50">
                Período orbital
              </span>
              <span className="w-1/2 text-right text-white uppercase font-Antonio xl:text-left xl:w-auto xl:text-xl">
                {planetInfo?.revolution}
              </span>
            </li>
            <li className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center xl:flex-col xl:justify-start xl:items-start xl:w-64  rounded-sm bg-gray-800">
              <span className="text-lg font-semibold text-white uppercase opacity-50">
                Radio
              </span>
              <span className="w-1/2 text-right text-white uppercase font-Antonio xl:text-left xl:w-auto xl:text-xl">
                {planetInfo?.radius}
              </span>
            </li>
            <li className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center xl:flex-col xl:justify-start xl:items-start xl:w-64  rounded-sm bg-gray-800">
              <span className="text-lg font-semibold text-white uppercase opacity-50">
                Temperatura
              </span>
              <span className="w-1/2 text-right text-white uppercase font-Antonio xl:text-left xl:w-auto xl:text-xl">
                {planetInfo?.temperature}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
