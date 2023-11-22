import SortSelect from '../components/SortSelect'
import { Loader, LunarEclipseCard } from '../components/index'
import { lunarEclipseTypesOptions } from '../assets/constant'
import { useState } from 'react'
import { useLunarEclipses } from '../hooks/useLunarEclipses'
import { clsx } from "clsx";
export function LunarEclipses() {
  const [filter, setSort] = useState('')
  // eslint-disable-next-line no-unused-vars
  const { eclipses, error, loading } = useLunarEclipses({ filter })
  const handleSortChange = (event) => {
    setSort(event.target.value)
  }
  return (
    <div className="py-5">
      <section className="mx-5 mb-5">
        <h2 className="text-xl font-semibold ">Eclipses Lunares</h2>
        <SortSelect
          filter={filter}
          handleSortChange={handleSortChange}
          options={lunarEclipseTypesOptions}
          title="Filtrar"
        />
        <h3 className="font-semibold">Totales: {eclipses?.length}</h3>
      </section>

      {loading ? (
        <div className={clsx(
          {
            'justify-center':loading!==false
          },"relative flex w-full min-h-[calc(100vh-80px)]"
        )}>
          <Loader />
        </div>
      ) : (
        <div className=" justify-center grid gap-5 xl:gap-10 px-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-h-[calc(100vh-380px)]">
          {eclipses?.map((eclipse) => {
            return <LunarEclipseCard key={eclipse.seq_num} eclipse={eclipse} />
          })}
        </div>
      )}
    </div>
  )
}
