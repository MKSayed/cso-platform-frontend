import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login-page/login-page.tsx'

export const browserRouter = createBrowserRouter([
  {path: '/', element: <LoginPage />}

])

export default browserRouter
