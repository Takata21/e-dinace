import { Navbar, Footer } from './components/index'
import { Outlet } from 'react-router-dom'
import { useTheme } from './context/provider/ThemeContext'

export const Layout = () => {
  const { theme } = useTheme()
  document.documentElement.className = theme
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] dark:bg-[#18202b] dark:text-white bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
