import { create } from 'zustand'

export const usePlanets = create((Set) => ({
  planetInfo: [],
  loading: true,
  messageError: '',
  getPlanetInfo: async ({ name }) => {
    try {
      const module = await import('../assets/planets.json')
      const planets = module.default
      const foundPlanetInfo = planets.find(
        (planet) => planet.englishName.toLowerCase() === name.toLowerCase()
      )
      if (foundPlanetInfo) {
        Set({ planetInfo: foundPlanetInfo })
      } else {
        Set({
          messageError: 'No se encontró el planeta',
        })
      }
    } catch (error) {
      Set({
        messageError: 'Ocurrió un error al cargar los datos.',
      })
      console.log(error)
    } finally {
      Set({
        loading: false,
      })
    }
  },
}))
