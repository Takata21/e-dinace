import { Link } from 'react-router-dom'

export function GalaxiesCard({ galaxy, id }) {
  return (
    <Link
      to={`/galaxies/${galaxy.toLowerCase().replace(/\s+/g, '-')}?id=${id}`}
      className="h-56 group lg:flex-grow"
    >
      <div className="relative h-full font-semibold tracking-wider text-white uppercase font-Bellefair">
        <img
          src={`/images/galaxies/${id}.webp`}
          alt={`${galaxy} galaxy`}
          loading="lazy"
          className="w-full h-full"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto text-xl transition duration-500 ease-in group-hover:bg-black/50">
          <h5 className="transition duration-500 ease-in group-hover:scale-125 font-Bellefair">
            {galaxy}
          </h5>
        </div>
      </div>
    </Link>
  )
}
