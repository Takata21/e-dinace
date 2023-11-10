import { Link } from 'react-router-dom'
import { CardSkeleton } from './CardSkeleton'
import { useState } from 'react'

export default function PlanetsCard({ info }) {
  const { id, name, original } = info
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Link
      to={`/planets/${original}`}
      className="h-56 group xl:flex-grow"
      data-test-id="planet-card"
    >
      <div className="relative h-full font-semibold tracking-wider text-white uppercase font-Bellefair">
        {isLoading && <CardSkeleton />}
        <img
          src={`/images/planets/${original.toLowerCase()}.png`}
          alt={`${name} planet`}
          loading="lazy"
          className="object-contain w-full h-full"
          onLoad={() => setIsLoading((prev) => !prev)}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto text-xl transition duration-500 ease-in ">
          <h5 className="transition duration-500 ease-in group-hover:scale-125 font-Bellefair">
            {!isLoading && name}
          </h5>
        </div>
      </div>
    </Link>
  )
}
