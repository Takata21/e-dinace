import { create } from 'zustand'

export const useEclipses = create((Set) => ({
  solarEclipseInfo: [],
  lunarEclipseInfo: [],
  loading: true,
  messageError: '',
  getSolarEclipseInfo: async ({ id }) => {
    try {
      const module = await import('../assets/SolarEclipses.json')
      const solarEclipses = module.default
      const foundEclipseInfo = solarEclipses.find(
        (eclipse) => eclipse.seq_num === id
      )
      if (foundEclipseInfo) {
        Set({ solarEclipseInfo: foundEclipseInfo })
      } else {
        Set({
          messageError: 'No se encontró el eclipse',
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
  getLunarEclipseInfo: async ({ id }) => {
    try {
      const module = await import('../assets/lunarEclipses.json')
      const lunarEclipses = module.default

      const foundEclipseInfo = lunarEclipses.find((eclipse) => {
        return `${eclipse.seq_num}134` === id
      })
      if (foundEclipseInfo) {
        Set({ lunarEclipseInfo: foundEclipseInfo })
      } else {
        Set({
          messageError: 'No se encontró el eclipse',
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
