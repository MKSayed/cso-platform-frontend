import { ColumnDef } from '@tanstack/react-table'
import { type BirthData } from '@/types/types.ts'
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header.tsx'

export const columns: ColumnDef<BirthData>[] = [
  {
    accessorKey: 'governorate',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='محافظة'
        className={'flex -translate-y-2/3 translate-x-2  justify-center bg-[#0B0367] transition'}
      />
    ),
  },
  {
    id: 'normalBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'text-center text-white'} column={column} title='ميلاد عادي' />
    ),
    columns: [
      {
        accessorKey: 'issued',
        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
      },
      {
        accessorKey: 'repeated',
        header: ({ column }) => <DataTableColumnHeader column={column} title='معاد' />,
      },
      {
        accessorKey: 'canceled',
        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        accessorKey: 'taxed',
        header: ({ column }) => <DataTableColumnHeader column={column} title='برسوم' />,
      },
      {
        accessorKey: 'total',
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'bg-[#F1F0FF] text-[#0B0367] -mr-3'}
            titleClassName={'text-[#0B0367]'}
              buttonClassname={'hover:bg-[#fff3fb] mr-0 data-[state=open]:bg-[#fff3fb] w-full justify-start pl-0 w-fit'}
          />
        ),
      },
    ],
  },

  {
    id: 'specialBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'text-center text-white'} column={column} title='ميلاد مميز' />
    ),
    columns: [
      {
        accessorKey: 'issued',
        header: ({ column }) => <DataTableColumnHeader column={column} title='مميز عادي' />,
      },
      {
        accessorKey: 'issued',
        header: ({ column }) => <DataTableColumnHeader column={column} title='مميز برسوم' />,
      },
      {
        accessorKey: 'total',
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'bg-[#F1F0FF] text-[#0B0367] -mr-3'}
            titleClassName={'text-[#0B0367]'}
              buttonClassname={'hover:bg-[#fff3fb] mr-0 data-[state=open]:bg-[#fff3fb] w-full justify-start pl-0 w-fit'}
          />
        ),
      },
    ],
  },
  {
    accessorKey: 'theTotal',
    header: ({ column }) => (
      <DataTableColumnHeader
        className={'flex -translate-x-2 -translate-y-2/3  justify-center bg-[#0B0367] transition'}
        column={column}
        title='الإجمالي'
      />
    ),
  },
]
