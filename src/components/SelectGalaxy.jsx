import React from 'react'

export function SelectGalaxy() {
  return (
    <div className="lg:w-64">
      <label
        htmlFor="small"
        className="block mt-5 mb-3 text-sm font-medium text-gray-900 dark:text-white"
      >
        Filtrar
      </label>
      <select
        id="small"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg lg:mb-0 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue>Todas</option>
        <option value="1">Nombre</option>
        <option value="2">Corrimiento al Rojo</option>
        <option value="3">Constelación</option>
        <option value="4">Masa</option>
      </select>
    </div>
  )
}
