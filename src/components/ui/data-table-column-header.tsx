import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from '@radix-ui/react-icons'
import { Column } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
  titleClassName?: string
  buttonClassname?: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  titleClassName,
  buttonClassname,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className={cn('-mr-3 h-8 hover:bg-blue-900 data-[state=open]:bg-[#0B0367]/80', buttonClassname)}
          >
            <span className={cn('text-white', titleClassName)}>{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <ArrowDownIcon color={'#FFC000'} className='ml-r h-4 w-4' />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUpIcon color={'#FFC000'} className='ml-r h-4 w-4' />
            ) : (
              <CaretSortIcon color={'#FFC000'} className='ml-r h-4 w-4' />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            ترتيب تصاعدي
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
            ترتيب تنازلي
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
