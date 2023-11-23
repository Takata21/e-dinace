import { useGalaxy } from '../hooks/useGalaxy'
import { Loader, InfoCard } from '../components'
import Zoom from 'react-medium-image-zoom'
import '../image-zoom.css'
import {clsx} from 'clsx'
export function Galaxy() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const id = urlSearchParams.get('id')
  const { galaxyInfo, loading } = useGalaxy(id)
  const galaxy = galaxyInfo[0]
  return (
    <div className={clsx(
      {"flex justify-center items-center":loading!==true},
      "px-5 dark:text-white xl:px-24 constellation bg-[#fafafa] dark:bg-gray-800 h-full min-h-[calc(100vh-80px)]"
    )}>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div className="gap-28 xl:flex xl:my-5">
            <Zoom>
              <img
                src={`/images/galaxies/${galaxy?.id}.webp`}
                alt=""
                className="xl:min-w-[350px] xl:min-h-[300px] rounded"
                data-testid="galaxy-img"
              />
            </Zoom>
            <div>
              <h2 className="mb-5 text-4xl font-bold text-center uppercase font-Antonio xl:text-left xl:text-7xl ">
                {galaxy?.galaxy?.original}
              </h2>
              <p
                className="font-Metropolis dark:text-white xl:leading-7"
                data-testid="galaxy-desc"
              >
                {galaxy?.desc?.translation}
              </p>
            </div>
          </div>
          <ul
            className="flex flex-col flex-wrap gap-3 my-5 xl:flex-row"
            data-testid="galaxy-info-list"
          >
            {galaxy?.galaxyData?.map((info) => {
              return (
                <InfoCard
                  key={`${crypto.randomUUID()}`}
                  label={info?.label.es}
                  desc={info?.info}
                />
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
