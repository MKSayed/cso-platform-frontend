import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login-page/login-page.tsx'
import Layout from '@/containers/layout.tsx'
import Home from '@/pages/home.tsx'
import CsoApps from '@/pages/cso-apps.tsx'
import BirthApp from '@/pages/birth-app/page.tsx'
import PersonFullDetails from '@/pages/person-full-details.tsx'

export const browserRouter = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      {
        path: 'cso-apps',
        children: [
          { index: true, element: <CsoApps /> },
          { path: 'birth', element: <BirthApp /> },
          {
            path: 'birth/:idnum',
            element: <PersonFullDetails />,
          },
        ],
      },
    ],
  },
])

export default browserRouter
