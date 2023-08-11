import { Link } from 'react-router-dom'

export function ConstellationCard({ constellation }) {
  return (
    <Link
      to={`./${constellation.replace(/\s+/g, '-')}`}
      className="h-56 group lg:flex-grow"
    >
      <div className="relative h-full font-semibold tracking-wider text-white font-Space">
        <img
          src={`/images/constellations/${constellation}.webp`}
          alt={`${constellation} constellation`}
          loading="lazy"
          className="w-full h-full"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto text-xl transition duration-500 ease-in group-hover:bg-black/50">
          <h5 className="transition duration-500 ease-in group-hover:scale-150">
            {constellation}
          </h5>
        </div>
      </div>
    </Link>
  )
}
