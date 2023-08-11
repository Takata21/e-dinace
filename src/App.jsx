import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './layout'
import { HomePage, Constellations, Constellation } from './pages/index'

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
          path: '/constellations/:id',
          element: <Constellation />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
