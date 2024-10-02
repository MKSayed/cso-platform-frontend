import { cn } from '@/lib/utils.ts'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { type SidebarItem } from '@/types/types.ts'

type props = {
  isOpen: boolean
  data: SidebarItem
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
                variant='ghost'
                className={cn(
                  'mb-1 h-10 w-full justify-start rounded-full hover:bg-blue-600/70',
                  data.active ? 'bg-white/10' : '',
                )}
                asChild
              >
                <Link to={data.to}>
                  <p
                    className={cn(
                      'max-w-[200px] truncate text-sm font-normal text-white',
                      !isOpen ? 'hidden opacity-0' : '',
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
              <TooltipContent className={'-translate-x-[20px] bg-blue-900'} side='left'>
                {data.label}
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </li>
  )
}
