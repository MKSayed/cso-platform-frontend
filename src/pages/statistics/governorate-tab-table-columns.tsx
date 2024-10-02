import { ColumnDef } from '@tanstack/react-table'
import { type BirthData } from '@/types/types.ts'
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header.tsx'
import { Crosshair, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export const columns: ColumnDef<BirthData>[] = [
  {
    id: 'normalBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'border-l-2 text-center text-white'} column={column} title='ميلاد عادي' />
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
        header: ({ column }) => <DataTableColumnHeader column={column} title='إجمالي' />,
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
        header: ({ column }) => <DataTableColumnHeader column={column} title='إجمالي' />,
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
