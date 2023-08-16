import { useState, useEffect } from 'react'
import constellations from '../assets/Constellations.json'

export function useConstellation({ name }) {
  const [constellationData, setConstellationData] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const foundConstellation = constellations.filter(
      (constellation) =>
        constellation.name.toLowerCase() ===
        name.replace('-', ' ').toLowerCase()
    )

    const {
      id,
      title,
      neighboringConstellations,
      description,
      mythology,
      mainStars,
      // eslint-disable-next-line no-unused-vars
      ...rest
    } = foundConstellation[0]
    const CleanInfo = {
      id,
      name: foundConstellation[0].name,
      title,
      neighboringConstellations,
      description,
      mythology,
      mainStars,
      constellationInfo: [
        { label: 'superficie', desc: foundConstellation[0].surface },
        {
          label: 'ascensionDerecha',
          desc: foundConstellation[0].rightAscension,
        },
        { label: 'declinacion', desc: foundConstellation[0].declination },
        { label: 'visibilidad', desc: foundConstellation[0].visibility },
        {
          label: 'numeroDeEstrellas',
          desc: foundConstellation[0].numberOfStars,
        },
        { label: 'objetosMessier', desc: foundConstellation[0].messierObjects },
        { label: 'objetosNGC', desc: foundConstellation[0].NGCObjects },
        {
          label: 'objetosCaldwell',
          desc: foundConstellation[0].caldwellObjects,
        },
        { label: 'mesParaVer', desc: foundConstellation[0].monthToSee },
      ],
    }
    setConstellationData({ ...CleanInfo })
    setLoading(false)
  }, [name])

  return { loading, constellationData }
}
