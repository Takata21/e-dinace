import { useConstellation } from '../hooks/useConstellation'
import { InfoCard, Loader } from '../components/index'
import Zoom from 'react-medium-image-zoom'
import '../image-zoom.css'
export function Constellation() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const id = urlSearchParams.get('id')
  const { constellationData, loading } = useConstellation({
    id,
  })

  return (
    <div className="px-5 dark:text-white xl:px-24 constellation bg-[#fafafa] dark:bg-gray-800">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-5">
          <div className="gap-8 xl:flex xl:my-5">
            <Zoom>
              <img
                src={`/images/constellations/${constellationData?.name}.webp`}
                alt=""
                className="xl:min-w-[350px] xl:min-h-[300px]"
                data-testid="constellation-img"
              />
            </Zoom>
            <div>
              <h2 className="mb-5 text-4xl font-bold text-center uppercase font-Antonio xl:text-left xl:text-7xl ">
                {constellationData?.name}
              </h2>
              <p
                className="font-Metropolis dark:text-white xl:leading-7"
                data-testid="constellation-desc"
              >
                {constellationData?.description}
              </p>
            </div>
          </div>
          <ul
            className="flex flex-col flex-wrap gap-3 my-5 xl:flex-row"
            data-testid="constellation-info-list"
          >
            {constellationData?.constellationInfo?.map((info, index) => {
              return (
                <InfoCard key={index} label={info.label} desc={info.desc} />
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
