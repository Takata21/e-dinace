import { create } from 'zustand'
const URL = 'https://flat-hare-60.deno.dev/'
export const useEphemerisStore = create((set) => {
  return {
    loading: false,
    ephemeris: null,
    empty: true,

    fetchEphemeris: async ({
      targetBody,
      latitud,
      longitud,
      startTime,
      stopTime,
    }) => {
      set({ loading: true })
      console.log(
        `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='${targetBody}'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='coord@399'&SITE_COORD='${longitud},${latitud},0'&START_TIME='${startTime}'&STOP_TIME='${stopTime}'&CSV_FORMAT='YES'&STEP_SIZE='1%20d'&QUANTITIES='1,9,20,23,24,29'&COORD_TYPE=GEODETIC`
      )
      const dataToSend = {
        url: `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='${targetBody}'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='coord@399'&SITE_COORD='${longitud},${latitud},0'&START_TIME='${startTime}'&STOP_TIME='${stopTime}'&CSV_FORMAT='YES'&STEP_SIZE='1%20d'&QUANTITIES='1,9,20,23,24,29'&COORD_TYPE=GEODETIC`,
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      }

      try {
        const response = await fetch(URL, requestOptions)
        if (!response.ok) {
          throw new Error('La solicitud no se completó correctamente')
        }
        const data = await response.json()
        set({ ephemeris: data, empty: false })
        return data
      } catch (error) {
        set({ empty: true })
        console.log(error)
      } finally {
        set({ loading: false })
      }
    },
  }
})
