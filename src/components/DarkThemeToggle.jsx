import React from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'
import { useTheme } from '../context/provider/ThemeContext'
export function DarkThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      id="theme-toggle"
      type="button"
      name="theme-toggle"
      aria-label="Cambiar tema"
      className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      onClick={() => toggleTheme()}
    >
      {theme === 'light' ? <BiSolidMoon /> : <BiSolidSun />}
    </button>
  )
}
