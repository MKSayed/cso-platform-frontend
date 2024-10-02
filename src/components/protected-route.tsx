import { Navigate } from 'react-router-dom'
import { useUserStore } from '@/stores/user'
import { ReactNode } from 'react'

export function ProtectedRoute({ children, requiredRole }: { children: ReactNode; requiredRole: unknown }) {
  const user = useUserStore((state) => state.user)

  if (!user) {
    // TODO: Add Role-Based Access Control (RBAC) as well
    // if (!user.roles.includes(requiredRole)){
    //   return // Add and return unauthorized page
    // }

    // Redirect unauthenticated users to the login page
    return <Navigate to='/' />
  }

  // If authenticated, render the child components (protected pages)
  return children
}
