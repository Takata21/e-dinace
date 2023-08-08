import { Header } from '@/components/Header.jsx'
import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/Footer.jsx'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
