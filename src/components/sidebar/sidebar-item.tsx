import { cn } from '@/lib/utils.ts'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { type sidebarItem } from '@/types/types.ts'

type props = {
  isOpen: boolean
  data: sidebarItem
}

export function SidebarItem({ isOpen, data }: props) {
  const Icon = data.icon
  return (
    <li>
      <div className='w-full'>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                variant={data.active ? 'secondary' : 'ghost'}
                className='mb-1 h-10 w-full justify-start hover:bg-blue-600/70'
                asChild
              >
                <Link to={data.to}>
                  <p
                    className={cn(
                      'max-w-[200px] truncate text-sm font-normal text-white',
                      !isOpen ? 'w-[20px] opacity-0' : '',
                    )}
                  >
                    {data.label}
                  </p>
                  <span className={cn(!isOpen ? '' : 'ml-4')}>
                    <Icon size={18} color={'white'} />
                  </span>
                </Link>
              </Button>
            </TooltipTrigger>
            {!isOpen && (
              <TooltipContent className={'bg-blue-900'} side='left'>
                {data.label}
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </li>
  )
}
