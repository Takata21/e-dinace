import { useEffect, useState } from 'react'

export function useGalaxy({ id }) {
  const [galaxyInfo, setGalaxyInfo] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    import('../assets/Galaxies.json')
      .then((module) => {
        const galaxies = module.default // Acceder al objeto JSON
        const foundedGalaxy = galaxies.find((galaxy) => galaxy.id === id)

        if (foundedGalaxy) {
          setGalaxyInfo({ ...foundedGalaxy })
        } else {
          // Manejar el caso en que no se encuentra la galaxia
        }

        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        // Manejar errores si ocurren durante la carga
        setLoading(false)
      })
  }, [id])

  return { galaxyInfo, loading }
}
