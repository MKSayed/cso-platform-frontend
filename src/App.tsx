import '@/App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import browserRouter from '@/arabic-routes.tsx'
import { queryClient } from '@/api/api.ts'

export default function App() {
  return (
    // set the whole app direction to rtl
    <main className='font-readex' dir={'rtl'}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={browserRouter} />
      </QueryClientProvider>
    </main>
  )
}
