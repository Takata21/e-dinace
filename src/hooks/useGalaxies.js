import { useEffect, useState } from 'react'
import galaxies from '../assets/Galaxies.json'
export function useGalaxy({ id }) {
  const [galaxyInfo, setGalaxyInfo] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundedGalaxy = galaxies.filter((galaxy) => galaxy.id === id)
    setGalaxyInfo({ ...foundedGalaxy[0] })
    // console.log(foundedGalaxy)
    setLoading(false)
  }, [id])

  return { galaxyInfo, loading }
}
