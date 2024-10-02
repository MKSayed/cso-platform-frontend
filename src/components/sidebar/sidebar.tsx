import ahwalLogo from '@/assets/logo_big.png'

import { cn } from '@/lib/utils.ts'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { Button } from '@/components/ui/button.tsx'
import { SidebarToggle } from '@/components/sidebar/sidebar-toggle.tsx'
import { ScrollArea } from '@/components/ui/scroll-area.tsx'
import { SidebarItem } from '@/components/sidebar/sidebar-item.tsx'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { LogOut } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'

export function Sidebar() {
  const sidebar = useSidebarStore()

  if (!sidebar) return null
  const isOpen = sidebar.isOpen
  const setIsOpen = sidebar.setIsOpen
  const sidebarItems = sidebar.items

  return (
    <aside
      className={cn(
        'fixed right-0 top-0 z-20 h-screen translate-x-0 bg-[#151357] transition-[width] duration-300 ease-in-out',
        !isOpen ? 'w-[90px]' : 'w-72',
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className='relative flex h-full flex-col overflow-y-auto overflow-x-hidden px-3 py-4 shadow-md dark:shadow-zinc-800'>
        {/* Logo and brand*/}
        <Button
          className={cn(
            'mb-1 transition-transform duration-300 ease-in-out',
            !isOpen ? 'translate-x-1' : 'translate-x-0',
          )}
          variant='link'
          asChild
        >
          <div>
            <img className={cn('size-[54px] min-w-[54px] ', !isOpen ? 'ml-0' : 'ml-4')} src={ahwalLogo} alt='Logo' />
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
        <Separator className={'mt-3 bg-[#2C2B68]'} orientation='horizontal' />
        {/*End of Logo and brand*/}

        {/* Navigation items within the sidebar */}
        <ScrollArea className='[&>div>div[style]]:!block'>
          <nav className='mt-8 h-full w-full'>
            <ul className='flex min-h-[calc(100vh-32px-40px-32px-14px)] flex-col items-end space-y-1 px-2'>
              {sidebarItems.map((item, index) => (
                <SidebarItem isOpen={isOpen} data={item} key={index} />
              ))}
              <Separator className={'mt-3 bg-[#2C2B68]'} orientation='horizontal' />

              {/*Sign out button*/}
              <li className='flex w-full grow items-end'>
                <TooltipProvider disableHoverableContent>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Button onClick={() => {}} variant='outline' className='mt-5 h-10 w-full justify-center'>
                        <span className={cn(isOpen === false ? '' : 'mr-4')}>
                          <LogOut color={'#E53C3C'} size={18} />
                        </span>
                        <p className={cn('whitespace-nowrap text-[#E53C3C]', !isOpen ? 'hidden' : '')}>تسجيل خروج</p>
                      </Button>
                    </TooltipTrigger>
                    {!isOpen && (
                      <TooltipContent className={'-translate-x-[20px] bg-blue-900'} side='left'>
                        تسجيل خروج
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}
