import { User } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx'
import maleAvatar from '@/assets/male-avatar.jpg'

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { Link } from 'react-router-dom'
import { useUserStore } from '@/stores/user.ts'

export function UserNav() {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  return (
    <DropdownMenu dir={'rtl'}>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src={maleAvatar} alt='Avatar' />
                  <AvatarFallback className='bg-transpar  ent'>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side='bottom'>حسابك</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className='ml-1 w-56' align='center' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{user?.fullName ?? 'حدث خطأ'}</p>
            <p className='text-xs leading-none text-muted-foreground'>{user?.regCenDescr ?? 'حدث خطأ'}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:cursor-pointer' asChild>
            <Link to='/profile' className='flex items-center'>
              <User className='ml-3 h-4 w-4 text-muted-foreground' />
              حسابك
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
