import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './layout'
import {
  HomePage,
  Constellations,
  Constellation,
  Galaxies,
  Galaxy,
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
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
