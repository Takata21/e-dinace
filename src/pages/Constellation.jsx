import { useParams } from 'react-router-dom'
import { useConstellation } from '../hooks/useConstellation'
import { InfoCard, Loader } from '../components/index'
import Zoom from 'react-medium-image-zoom'
import '../image-zoom.css'
export function Constellation() {
  const { name } = useParams()
  const { constellationData, loading } = useConstellation({
    name,
  })
  console.log(constellationData)
  return (
    <div className="px-5 text-white lg:px-24 constellation">
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <div className="gap-8 lg:flex lg:my-5">
            <Zoom>
              <img
                src={`/images/constellations/${constellationData.name}.webp`}
                alt=""
                className="lg:min-w-[350px] lg:min-h-[300px]"
              />
            </Zoom>
            <div>
              <h2 className="my-5 text-4xl font-bold text-center uppercase font-Antonio lg:text-left lg:text-7xl ">
                {constellationData?.name}
              </h2>
              <p className="font-Metropolis text-[#ffffffbf] lg:leading-7">
                {constellationData?.description}
              </p>
            </div>
          </div>
          <ul className="flex flex-col flex-wrap gap-3 my-5 lg:flex-row">
            {constellationData?.constellationInfo.map((info, index) => {
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
