import { ColumnDef } from '@tanstack/react-table'
import { type birthData } from '@/types/types.ts'
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header.tsx'
import { Crosshair, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export const columns: ColumnDef<birthData>[] = [
  {
    accessorKey: 'firstName',
    header: ({ column }) => <DataTableColumnHeader column={column} title='اسم المولود' />,
  },
  {
    header: ({ column }) => <DataTableColumnHeader column={column} title='اسم الاب' />,
    accessorKey: 'fatherFullName',
  },
  {
    accessorKey: 'motherFullName',
    header: ({ column }) => <DataTableColumnHeader column={column} title='اسم الام' />,
  },
  {
    accessorKey: 'birthDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title='تاريخ الميلاد' />,
  },
  {
    id: 'actions',
    header: () => <Settings2 color={'#FFC000'} />,
    cell: ({ row }) => {
      const idnum = row.original.idnum

      return (
        <Link to={idnum.toString()}>
          <Crosshair size={20} />
        </Link>
      )
    },
  },
]
