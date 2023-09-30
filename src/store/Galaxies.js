import { create } from 'zustand'

export const useGalaxyStore = create((Set) => ({
  galaxyInfo: [],
  loading: true,
  messageError: '',
  fetchGalaxyInfo: async (id) => {
    try {
      const module = await import('../assets/Galaxies.json')
      const galaxies = module.default
      const foundGalaxy = galaxies.filter((galaxy) => galaxy.id === id)
      if (foundGalaxy) {
        Set({ galaxyInfo: foundGalaxy })
      } else {
        Set({ messageError: 'No se encontró la galaxia.' })
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
