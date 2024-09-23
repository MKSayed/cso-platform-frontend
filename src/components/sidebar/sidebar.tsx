import ahwalLogo from '@/assets/logo_big.png'

import { cn } from '@/lib/utils.ts'
import { useSidebarStore } from '@/stores/sidebar-store.ts'
import { Button } from '@/components/ui/button.tsx'
import { SidebarToggle } from '@/components/sidebar/sidebar-toggle.tsx'

export function Sidebar() {
  const sidebar = useSidebarStore()

  if (!sidebar) return null

  return (
    <aside
      className={cn(
        'fixed right-0 top-0 z-20 h-screen translate-x-0 bg-[#151357] transition-[width] duration-300 ease-in-out',
        !sidebar?.isOpen ? 'w-[90px]' : 'w-72',
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className='relative flex h-full flex-col overflow-y-auto overflow-x-hidden px-3 py-4 shadow-md dark:shadow-zinc-800'>
        <Button
          className={cn(
            'mb-1 transition-transform duration-300 ease-in-out',
            !sidebar?.isOpen ? 'translate-x-1' : 'translate-x-0',
          )}
          variant='link'
          asChild
        >
          <div>
            <img
              className={cn('size-[54px] min-w-[54px] ', !sidebar?.isOpen ? 'ml-0' : 'ml-4')}
              src={ahwalLogo}
              alt='Logo'
            />
            <h1
              className={cn(
                'whitespace-nowrap text-sm font-medium text-white transition-[transform,opacity,display] duration-300 ease-in-out',
                sidebar?.isOpen === false ? 'hidden -translate-x-96 opacity-0' : 'translate-x-0 opacity-100',
              )}
            >
              قطاع الاحوال المدنية
              <br />
              <span className={'text-xs font-light'}> وزارة الداخلية</span>
            </h1>
          </div>
        </Button>
      </div>
    </aside>
  )
}
