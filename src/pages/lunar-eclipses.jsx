import eclipsesData from '../assets/lunarEclipses.json'
import { LunarEclipseCard } from '../components/index'

export function LunarEclipses() {
  return (
    <div className="py-5">
      <div className=" justify-center grid gap-5 lg:gap-10 px-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {eclipsesData?.map((eclipse) => {
          return <LunarEclipseCard key={eclipse.seq_num} eclipse={eclipse} />
        })}
      </div>
    </div>
  )
}
