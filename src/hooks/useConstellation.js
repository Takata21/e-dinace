import { useState, useEffect } from 'react'

export function useConstellation({ name }) {
  const [constellationData, setConstellationData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    import('../assets/Constellations.json')
      .then((module) => {
        const constellations = module.default // Acceder al objeto JSON
        const foundConstellation = constellations.find(
          (constellation) =>
            constellation.name.toLowerCase() ===
            name.replace('-', ' ').toLowerCase()
        )

        if (foundConstellation) {
          const {
            id,
            title,
            neighboringConstellations,
            description,
            mythology,
            mainStars,
            // eslint-disable-next-line no-unused-vars
            ...rest
          } = foundConstellation

          const CleanInfo = {
            id,
            name: foundConstellation.name,
            title,
            neighboringConstellations,
            description,
            mythology,
            mainStars,
            constellationInfo: [
              { label: 'superficie', desc: foundConstellation.surface },
              // ... otras propiedades ...
            ],
          }

          setConstellationData({ ...CleanInfo })
        } else {
          // Manejar el caso en que no se encuentra la constelación
        }

        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        // Manejar errores si ocurren durante la carga
        setLoading(false)
      })
  }, [name])

  return { loading, constellationData }
}
