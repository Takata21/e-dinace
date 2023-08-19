import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CardSkeleton } from './CardSkeleton'

export function ConstellationCard({ constellation }) {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Link
      to={`./${constellation.toLowerCase().replace(/\s+/g, '-')}`}
      className="h-56 group lg:flex-grow"
    >
      <div className="relative h-full font-semibold tracking-wider text-white uppercase font-Bellefair">
        {isLoading && <CardSkeleton />}
        <img
          src={`/images/constellations/${constellation}.webp`}
          alt={`${constellation} constellation`}
          loading="lazy"
          className="w-full h-full"
          onLoad={() => setIsLoading((prev) => !prev)}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto text-xl transition duration-500 ease-in group-hover:bg-black/50">
          <h5 className="transition duration-500 ease-in group-hover:scale-150 font-Bellefair">
            {!isLoading && constellation}
          </h5>
        </div>
      </div>
    </Link>
  )
}
