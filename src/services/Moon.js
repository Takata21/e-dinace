export async function getMoon(dateTimeValue) {
  const date = dateTimeValue
  const API_URL = 'https://svs.gsfc.nasa.gov/api/dialamoon'
  return fetch(`${API_URL}/${date}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data.')
      }
      return response.json()
    })
    .catch((error) => {
      console.log('Error', error)
      throw new Error('Failed to fetch data.')
    })
}
