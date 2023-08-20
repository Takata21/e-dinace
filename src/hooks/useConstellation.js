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
              {
                label: 'Superficie',
                desc: foundConstellation.surface,
              },
              {
                label: 'Ascensión Recta',
                desc: foundConstellation.rightAscension,
              },
              {
                label: 'Declinación',
                desc: foundConstellation.declination,
              },
              {
                label: 'Visibilidad',
                desc: foundConstellation.visibility,
              },
              {
                label: 'Número de Estrellas',
                desc: foundConstellation.numberOfStars,
              },
              {
                label: 'Objetos Messier',
                desc: foundConstellation.messierObjects,
              },
              {
                label: 'Objetos NGC',
                desc: foundConstellation.NGCObjects,
              },
              {
                label: 'Objetos Caldwell',
                desc: foundConstellation.caldwellObjects,
              },
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
