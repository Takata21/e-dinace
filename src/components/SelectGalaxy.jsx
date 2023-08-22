import React from 'react'

export function SelectGalaxy() {
  return (
    <div className="lg:w-64">
      <label
        htmlFor="small"
        className="block mt-5 mb-3 text-sm font-medium text-gray-900 dark:text-white"
      >
        Ordenar
      </label>
      <select
        id="small"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg lg:mb-0 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="all">Nombre</option>
        <option value="red">Corrimiento al Rojo</option>
        <option value="constellation">Constelación</option>
        <option value="mass">Masa</option>
      </select>
    </div>
  )
}
