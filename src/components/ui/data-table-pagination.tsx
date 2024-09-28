import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className='mt-2 flex w-full items-center justify-between px-2'>
      {/*Enable if you need selected rows count functionality*/}
      {/*<div className='flex-1 text-sm text-muted-foreground'>*/}
      {/*  {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.*/}
      {/*</div>*/}

      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                <SelectItem className='text-[#0B0367]' key={pageSize} value={`${pageSize}`}>
                  <span className='text-[#0B0367]'>{pageSize}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className='text-sm font-medium text-[#0B0367]'>بيان في الصفحة</p>
        </div>

        <div className='flex items-center space-x-2'>
          {/*To last page button */}
          {/*<Button*/}
          {/*  variant='outline'*/}
          {/*  className='hidden h-8 w-8 p-0 lg:flex'*/}
          {/*  onClick={() => table.setPageIndex(table.getPageCount() - 1)}*/}
          {/*  disabled={!table.getCanNextPage()}*/}
          {/*>*/}
          {/*  <span className='sr-only'>Go to last page</span>*/}
          {/*  <DoubleArrowRightIcon className='h-4 w-4' />*/}
          {/*</Button>*/}

          {/*Next button*/}
          <Button
            variant='outline'
            className='flex items-center justify-center'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon color={'#4C3CFA'} className='h-4 w-4' />
            <span className='sr-only'>Go to next page</span>
            <span className='text-sm font-light text-[#4C3CFA]'> التالي</span>
          </Button>

          {/*Current page indicator*/}
          <div className='flex items-center justify-center pr-1 text-sm font-medium text-[#0B0367]'>
            صفحة {table.getState().pagination.pageIndex + 1} من {table.getPageCount()}
          </div>

          {/*Previous button*/}
          <Button
            variant='outline'
            className='flex items-center justify-center'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Go to previous page</span>
            <span className='text-sm font-light text-[#4C3CFA]'> السابق</span>

            <ChevronLeftIcon color={'#4C3CFA'} className='h-4 w-4' />
          </Button>

          {/*To first page button*/}
          {/*<Button*/}
          {/*  variant='outline'*/}
          {/*  className='hidden h-8 w-8 p-0 lg:flex'*/}
          {/*  onClick={() => table.setPageIndex(0)}*/}
          {/*  disabled={!table.getCanPreviousPage()}*/}
          {/*>*/}
          {/*  <span className='sr-only'>Go to first page</span>*/}
          {/*  <DoubleArrowLeftIcon className='h-4 w-4' />*/}
          {/*</Button>*/}
        </div>
      </div>
    </div>
  )
}
