import { Loader } from '../components'

export function Ephemeris() {
  return (
    <div className="flex">
      <aside className="flex-1 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <form className="px-5 py-3">
          <div className="">
            <h3 className="mb-3 font-medium">
              Especificar el Cuerpo Celestial
            </h3>
            {/* <label
              htmlFor="small"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cuerpo Celestial Objetivo
            </label> */}
            <select
              id="small"
              className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option defaultValue value="The Sun and Planets">
                El Sol y los Planetas
              </option>
              <option value="Jovian Satellites">Satélites Jovianos</option>
              <option value="Saturnian Satellites">Satélites de Saturno</option>
              <option value="Uranian Satellites">Satélites de Urano</option>
              <option value="Neptunian Satellites">Satélites de Neptuno</option>
              <option value="Other Planetary Satellites">
                Otros Satélites Planetarios
              </option>
              <option value="Spacecraft">Naves Espaciales</option>
              <option value="Special Objects">Objetos Especiales</option>
              <option value="Dynamic Points">Puntos Dinámicos</option>
            </select>

            <select
              id="small"
              className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Sun">El Sol</option>
              <option value="Mercury">Mercurio</option>
              <option value="Venus">Venus</option>
              <option value="Earth">Tierra</option>
              <option value="Mars">Marte</option>
              <option value="Jupiter">Júpiter</option>
              <option value="Saturn">Saturno</option>
              <option value="Uranus">Urano</option>
              <option value="Neptune">Neptuno</option>
            </select>
          </div>
          <div className="">
            <h3 className="mb-3 font-medium">
              Especificar la Ubicación del Observador
            </h3>
            <div className="mb-4">
              <label
                htmlFor="latitud"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Latitud:
              </label>
              <input
                type="number"
                id="latitud"
                name="latitud"
                step="0.00001"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="40.7128"
                required
                pattern="-?\d{1,3}(?:\.\d{0,5})?"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="longitud"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Longitud:
              </label>
              <input
                type="number"
                id="longitud"
                name="longitud"
                step="0.00001"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="-74.0060"
                required
                pattern="-?\d{1,3}(?:\.\d{0,5})?"
              />
            </div>
          </div>
          <div className="">
            <h3 className="mb-3 font-medium">Especificación de Tiempo</h3>
            <div className="mb-3">
              <label
                htmlFor="start-time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fecha de inicio:
              </label>
              <input
                type="date"
                name="start time"
                id="start-time"
                className="text-gray-900 dark:bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 rounded rounded-r-none "
              />
            </div>
            <div>
              <label
                htmlFor="stop-time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fecha final:
              </label>
              <input
                type="date"
                name="stop time"
                id="stop-time"
                className="text-gray-900 dark:bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 rounded rounded-r-none "
              />
            </div>
          </div>
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5"
          >
            Generar Efemérides
          </button>
        </form>
      </aside>
      <div className="flex-[3]  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 relative">
        <Loader className="absolute" />
      </div>
    </div>
  )
}
