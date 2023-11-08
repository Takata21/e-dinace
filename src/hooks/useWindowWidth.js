import { useState, useEffect } from 'react'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    let animationFrameId

    const handleResize = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          setWindowWidth(window.innerWidth)
          animationFrameId = null
        })
      }
    }

    // Agrega un evento de escucha para el evento de redimensionamiento de la ventana.
    window.addEventListener('resize', handleResize)

    // Limpia el evento de escucha y el marco de animación cuando el componente se desmonta.
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return windowWidth
}

export default useWindowWidth
