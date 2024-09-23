import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login-page/login-page.tsx'
import Layout from '@/containers/layout.tsx'
import Home from '@/pages/home.tsx';

export const browserRouter = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  { path: '/home', element: <Layout />, children: [{index: true, element: <Home/>}] },
])

export default browserRouter
