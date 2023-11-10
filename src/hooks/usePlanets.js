import { useEffect } from 'react'
import { usePlanets } from '../store/Planets'
export function usePlanet({ name }) {
  const { loading, messageError, planetInfo, getPlanetInfo } = usePlanets()

  useEffect(() => {
    getPlanetInfo({ name })
  }, [name])

  return { planetInfo, loading, messageError }
}
