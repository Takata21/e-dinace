import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // Comenzamos con el tema "light" por defecto
  const [theme, setTheme] = useState('light')

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Detectar el modo preferido del sistema y establecer el tema en consecuencia
  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia(
  //     '(prefers-color-scheme: dark)'
  //   ).matches
  //   setTheme(prefersDarkMode ? 'dark' : 'light')
  // }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
