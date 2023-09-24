import SortSelect from '../components/SortSelect'
import { EclipseCard, Loader } from '../components/index'
import { solarEclipseTypesOptions } from '../assets/constant'
import { useState } from 'react'
import { useSolarEclipses } from '../hooks/useSolarEclipses'
export function SolarEclipses() {
  const [filter, setFilter] = useState('')
  // eslint-disable-next-line no-unused-vars
  const { eclipses, error, loading } = useSolarEclipses({ filter })
  // console.log(eclipses)
  const handleSortChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div className="py-5">
      <section className="mx-5 mb-5">
        <h2 className="text-xl font-semibold ">Eclipses Solares</h2>
        <SortSelect
          filter={filter}
          handleSortChange={handleSortChange}
          options={solarEclipseTypesOptions}
          title="Filtrar"
        />
        <h3 className="font-semibold">Totales: {eclipses?.length}</h3>
      </section>
      <div className=" justify-center grid gap-5 xl:gap-10 px-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {loading ? (
          <div className="relative h-full">
            <Loader />
          </div>
        ) : (
          eclipses?.map((eclipse) => {
            return <EclipseCard key={eclipse.seq_num} eclipse={eclipse} />
          })
        )}
      </div>
    </div>
  )
}
