import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/sidebar/sidebar.tsx'
import { useSidebarStore } from '@/stores/sidebar-store.ts'
import { cn } from '@/lib/utils.ts'
import { Toaster } from '@/components/ui/sonner.tsx'

export default function Layout() {
  const sidebar = useSidebarStore()
  return (
    <div>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out',
          !sidebar?.isOpen ? 'mr-[90px]' : 'mr-72',
        )}
      >
        <Outlet />
        <Toaster />
      </main>
    </div>
  )
}
