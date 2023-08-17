import { Navbar, Footer } from './components/index'
import { Outlet } from 'react-router-dom'
import { Flowbite } from 'flowbite-react'

export const Layout = () => {
  return (
    <Flowbite>
      <Navbar />
      <main className="min-h-screen dark:bg-[#18202b] dark:text-white bg-white">
        <Outlet />
      </main>
      <Footer />
    </Flowbite>
  )
}
