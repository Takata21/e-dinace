import PlanetsCard from '../components/PlanetsCard'

export function Planets() {
  const PLANETS = [
    {
      id: 'a3a061c1-29a8-4442-b3a2-218f717ffc45',
      name: 'Mercurio',
      original: 'Mercury',
    },
    {
      id: '006abf5b-83d4-4af1-8ad4-651714d3e4bf',
      name: 'Venus',
      original: 'Venus',
    },
    {
      id: '4f102fd1-d697-4c80-8914-0104fcfa2086',
      name: 'Tierra',
      original: 'Earth',
    },
    {
      id: 'b6523636-844f-46f2-9b74-85738731edc6',
      name: 'Marte',
      original: 'Mars',
    },
    {
      id: 'c54c873b-45e9-4440-9205-0b3409176a6f',
      name: 'Jupiter',
      original: 'Jupiter',
    },
    {
      id: 'fae6d233-899d-49da-9cbb-f0480956bbc4',
      name: 'Saturno',
      original: 'Saturn',
    },
    {
      id: '09ee0cef-eea6-41a7-bb49-628ff78b0cf6',
      name: 'Neptuno',
      original: 'Neptune',
    },
    {
      id: '0fa79dd7-93c0-477f-89a2-757ae667e238',
      name: 'Urano',
      original: 'Uranus',
    },
  ]

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center w-full min-h-screen gap-5 p-5 dark:bg-[#18202b] planets">
      {PLANETS.map((planet) => (
        <PlanetsCard key={planet.id} info={planet} />
      ))}
    </div>
  )
}
