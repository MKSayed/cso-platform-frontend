import { Navigate } from 'react-router-dom'
import { useUserStore } from '@/stores/user'
import { ReactNode } from 'react'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = useUserStore((state) => state.user)

  if (!user) {
    // Redirect unauthenticated users to the login page
    return <Navigate to='/' />
  }

  // If authenticated, render the child components (protected pages)
  return children
}
