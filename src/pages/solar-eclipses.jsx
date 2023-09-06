import eclipsesData from '../assets/SolarEclipses.json'
import { EclipseCard } from '../components/index'
export function SolarEclipses() {
  return (
    <div className="py-5">
      <div className=" justify-center grid gap-5 lg:gap-10 px-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {eclipsesData?.map((eclipse) => {
          return <EclipseCard key={eclipse.seq_num} eclipse={eclipse} />
        })}
      </div>
    </div>
  )
}
