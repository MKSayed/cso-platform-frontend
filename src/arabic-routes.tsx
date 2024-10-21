import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login-page/login-page.tsx'
import Layout from '@/containers/layout.tsx'
import Home from '@/pages/home.tsx'
import CsoApps from '@/pages/cso-apps.tsx'
import BirthApp from '@/pages/birth-app/page.tsx'
import Page from '@/pages/person-full-details/page.tsx'
import Statistics from '@/pages/statistics/page.tsx'
import { ProtectedRoute } from '@/components/protected-route.tsx'

export const browserRouter = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: 'cso-apps',
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <CsoApps />
              </ProtectedRoute>
            ),
          },
          {
            path: 'birth',
            element: (
              <ProtectedRoute>
                {' '}
                <BirthApp />{' '}
              </ProtectedRoute>
            ),
          },
          {
            path: 'birth/:idnum',
            element: (
              <ProtectedRoute>
                {' '}
                <Page />{' '}
              </ProtectedRoute>
            ),
          },
          {
            path: 'statistics',
            element: (
              <ProtectedRoute>
                {' '}
                <Statistics />{' '}
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
])

export default browserRouter
