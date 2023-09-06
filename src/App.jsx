import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './layout'
import {
  HomePage,
  Constellations,
  Constellation,
  Galaxies,
  Galaxy,
  LunarEclipses,
  MoonPhases,
  SolarEclipses,
  SolarEclipse,
  LunarEclipse,
} from './pages/index'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/constellations',
          element: <Constellations />,
        },
        {
          path: '/constellations/:name',
          element: <Constellation />,
        },
        {
          path: '/galaxies',
          element: <Galaxies />,
        },
        {
          path: '/galaxies/:name',
          element: <Galaxy />,
        },
        {
          path: '/moon-phases',
          element: <MoonPhases />,
        },

        {
          path: '/lunar-eclipses',
          element: <LunarEclipses />,
        },
        {
          path: '/lunar-eclipses/:seq',
          element: <LunarEclipse />,
        },

        {
          path: '/solar-eclipses',
          element: <SolarEclipses />,
        },
        {
          path: '/solar-eclipses/:seq',
          element: <SolarEclipse />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
