import { create } from 'zustand'

export const useConstellationStore = create((Set) => ({
  constellationData: null,
  loading: true,
  messageError: '',
  fetchConstellationData: async (id) => {
    try {
      const module = await import('../assets/Constellations.json')
      const constellations = module.default
      const foundConstellation = constellations.filter(
        (constellation) => constellation.id === id
      )
      console.log('--------------------', foundConstellation)
      if (foundConstellation) {
        const {
          id,
          title,
          neighboringConstellations,
          description,
          mythology,
          mainStars,
          surface,
          rightAscension,
          declination,
          visibility,
          numberOfStars,
          messierObjects,
          NGCObjects,
          caldwellObjects,
          // eslint-disable-next-line no-unused-vars
          ...rest
        } = foundConstellation[0]

        const constellationInfo = [
          {
            label: 'Superficie',
            desc: surface,
          },
          {
            label: 'Ascensión Recta',
            desc: rightAscension,
          },
          {
            label: 'Declinación',
            desc: declination,
          },
          {
            label: 'Visibilidad',
            desc: visibility,
          },
          {
            label: 'Número de Estrellas',
            desc: numberOfStars,
          },
          {
            label: 'Objetos Messier',
            desc: messierObjects,
          },
          {
            label: 'Objetos NGC',
            desc: NGCObjects,
          },
          {
            label: 'Objetos Caldwell',
            desc: caldwellObjects,
          },
        ]

        const cleanInfo = {
          id,
          name: foundConstellation.name,
          title,
          neighboringConstellations,
          description,
          mythology,
          mainStars,
          constellationInfo,
        }
        Set({ constellationData: cleanInfo })
      } else {
        Set({ constellationData: null })
      }
    } catch (error) {
      Set({
        messageError: 'Ocurrió un error al cargar los datos.',
      })
    } finally {
      Set({
        loading: false,
      })
    }
  },
}))
