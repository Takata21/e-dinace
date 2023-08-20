import { useGalaxy } from '../hooks/useGalaxies'
import { Loader, InfoCard } from '../components'
import Zoom from 'react-medium-image-zoom'
import '../image-zoom.css'
export function Galaxy() {
  const url = window.location.search.split('=')[1]
  const { galaxyInfo, loading } = useGalaxy({
    id: url,
  })

  return (
    <div className="px-5 dark:text-white lg:px-24 constellation bg-[#fafafa] dark:bg-gray-800">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div className="gap-28 lg:flex lg:my-5">
            <Zoom>
              <img
                src={`/images/galaxies/${galaxyInfo?.id}.webp`}
                alt=""
                className="lg:min-w-[350px] lg:min-h-[300px] rounded"
              />
            </Zoom>
            <div>
              <h2 className="mb-5 text-4xl font-bold text-center uppercase font-Antonio lg:text-left lg:text-7xl ">
                {galaxyInfo?.galaxy?.original}
              </h2>
              <p className="font-Metropolis dark:text-white lg:leading-7">
                {galaxyInfo?.desc?.translation}
              </p>
            </div>
          </div>
          <ul className="flex flex-col flex-wrap gap-3 my-5 lg:flex-row">
            {galaxyInfo?.galaxyData.map((info) => {
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
