import { ColumnDef } from '@tanstack/react-table'
import { GovList, RegCenList } from '@/types/statistics.types.ts'
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header.tsx'
import { ChevronsUpDown } from 'lucide-react'

export const birthGovernorateTabColumns: ColumnDef<GovList>[] = [
  {
    accessorKey: 'govDescr',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='محافظة'
        className={'-pl-0 -mr-2 flex -translate-y-2/3 justify-start bg-[#0B0367] pr-2'}
      />
    ),
    meta: {
      first: true,
    },
  },
  {
    id: 'normalBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'text-center text-white'} column={column} title='ميلاد عادي' />
    ),
    columns: [
      {
        accessorKey: 'birthCertType.normalIssued.count',
        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
      },
      {
        accessorKey: 'birthCertType.normalRepeated.count',
        header: ({ column }) => <DataTableColumnHeader column={column} title='معاد' />,
      },
      {
        accessorKey: 'birthCertType.normalCancelled.count',

        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        accessorKey: 'birthCertType.normalSpecial.count',

        header: ({ column }) => (
          <DataTableColumnHeader
            className={'-mx-2 justify-center bg-[#F9D62A]'}
            column={column}
            titleClassName={'text-[#0B0367]'}
            iconColor={'#0B0367'}
            buttonClassname={'hover:bg-[#F9D62A]/30 mr-0 data-[state=open]:bg-[#F9D62A] w-full px-0'}
            title='مميز'
          />
        ),
        cell: ({ getValue }) => <div className={'translate-x-2 text-center'}>{getValue()}</div>,
      },
      {
        accessorKey: 'birthCertType.normalTotal.count',

        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'-mr-2 bg-[#F1F0FF]'}
            titleClassName={'text-foreground'}
            buttonClassname={'hover:bg-[#fff3fb] mr-0 data-[state=open]:bg-[#fff3fb] w-full px-0'}
          />
        ),
        cell: ({ getValue }) => {
          return <div className={'-my-2 bg-[#F1F0FF] p-2 text-center'}> {getValue() as number}</div>
        },
      },
    ],
  },

  {
    id: 'taxedBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'text-center text-white'} column={column} title='ميلاد برسم' />
    ),
    columns: [
      {
        accessorKey: 'birthCertType.firstPrinted.count',

        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
      },
      {
        accessorKey: 'birthCertType.firstCancelled.count',

        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        accessorKey: 'birthCertType.firstSpecial.count',

        header: ({ column }) => (
          <DataTableColumnHeader
            className={'-mx-2 justify-center bg-[#F9D62A]'}
            titleClassName={'text-[#0B0367]'}
            iconColor={'#0B0367'}
            buttonClassname={'hover:bg-[#F9D62A]/30 mr-0 data-[state=open]:bg-[#F9D62A] w-full px-0'}
            column={column}
            title='مميز'
          />
        ),
        cell: ({ getValue }) => <div className={'translate-x-2 text-center'}>{getValue()}</div>,
      },
      {
        accessorKey: 'birthCertType.firstTotal.count',
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'-mr-2 bg-[#F1F0FF]'}
            titleClassName={'text-foreground'}
            buttonClassname={'hover:bg-[#fff3fb] mr-0 data-[state=open]:bg-[#fff3fb] w-full px-0'}
          />
        ),
        cell: ({ getValue }) => {
          return <div className={'-my-2 bg-[#F1F0FF] p-2 text-center'}> {getValue() as number}</div>
        },
      },
    ],
  },
  {
    accessorKey: 'govCertTotalCount',
    header: ({ column }) => (
      <DataTableColumnHeader
        className={'flex -translate-x-2 -translate-y-2/3  justify-center bg-[#0B0367]'}
        column={column}
        title='الإجمالي'
      />
    ),
    cell: ({ getValue }) => <div className={'text-center'}> {Number(getValue()) as number}</div>,
    meta: { last: true },
  },
]

export const birthWorkSiteTabColumns: ColumnDef<RegCenList>[] = [
  {
    accessorKey: 'regCenDescr',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='موقع العمل'
        className={'-pl-0 -mr-2 flex -translate-y-2/3 justify-start bg-[#0B0367] pr-2'}
      />
    ),
    meta: {
      first: true,
    },
  },
  {
    id: 'normalBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'text-center text-white'} column={column} title='ميلاد عادي' />
    ),
    columns: [
      {
        accessorKey: 'birthCertType.normalIssued.count',
        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
        cell: ({ getValue }) => <span>{getValue()}</span>,
      },
      {
        accessorKey: 'birthCertType.normalRepeated.count',
        header: ({ column }) => <DataTableColumnHeader column={column} title='معاد' />,
      },
      {
        accessorKey: 'birthCertType.normalCancelled.count',

        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        accessorKey: 'birthCertType.normalSpecial.count',

        header: ({ column }) => (
          <DataTableColumnHeader
            className={'-mx-2 justify-center bg-[#F9D62A]'}
            column={column}
            titleClassName={'text-[#0B0367]'}
            iconColor={'#0B0367'}
            buttonClassname={'hover:bg-[#F9D62A]/30 mr-0 data-[state=open]:bg-[#F9D62A] w-full px-0'}
            title='مميز'
          />
        ),
        cell: ({ getValue }) => <div className={'translate-x-2 text-center'}>{getValue()}</div>,
      },
      {
        accessorKey: 'birthCertType.normalTotal.count',

        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'-mr-2 bg-[#F1F0FF]'}
            titleClassName={'text-foreground'}
            buttonClassname={'hover:bg-[#fff3fb] mr-0 data-[state=open]:bg-[#fff3fb] w-full px-0'}
          />
        ),
        cell: ({ getValue, row }) =>
          row.getCanExpand() ? null : (
            <div className={'-my-2 bg-[#F1F0FF] p-2 text-center'}> {getValue() as number}</div>
          ),
      },
    ],
  },

  {
    id: 'taxedBirth',
    header: ({ column }) => (
      <DataTableColumnHeader className={'text-center text-white'} column={column} title='ميلاد برسم' />
    ),
    columns: [
      {
        accessorKey: 'birthCertType.firstPrinted.count',

        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
      },
      {
        accessorKey: 'birthCertType.firstCancelled.count',

        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        accessorKey: 'birthCertType.firstSpecial.count',

        header: ({ column }) => (
          <DataTableColumnHeader
            className={'-mx-2 justify-center bg-[#F9D62A]'}
            titleClassName={'text-[#0B0367]'}
            iconColor={'#0B0367'}
            buttonClassname={'hover:bg-[#F9D62A]/30 mr-0 data-[state=open]:bg-[#F9D62A] w-full px-0'}
            column={column}
            title='مميز'
          />
        ),
        cell: ({ getValue }) => <div className={'translate-x-2 text-center'}>{getValue()}</div>,
      },
      {
        accessorKey: 'birthCertType.firstTotal.count',
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'-mr-2 bg-[#F1F0FF]'}
            titleClassName={'text-foreground'}
            buttonClassname={'hover:bg-[#fff3fb] mr-0 data-[state=open]:bg-[#fff3fb] w-full px-0'}
          />
        ),
        cell: ({ getValue, row }) =>
          row.getCanExpand() ? null : (
            <div className={'-my-2 bg-[#F1F0FF] p-2 text-center'}> {getValue() as number}</div>
          ),
      },
    ],
  },
  {
    accessorKey: 'regCenCertTypeTotalCount',
    header: ({ column }) => (
      <DataTableColumnHeader
        className={'flex -translate-x-2 -translate-y-2/3  justify-center bg-[#0B0367]'}
        column={column}
        title='الإجمالي'
      />
    ),
    cell: ({ getValue, row }) => (
      <div className={`text-center ${row.getCanExpand() && 'flex justify-end'} `}>
        {' '}
        {row.getCanExpand() ? (
          <ChevronsUpDown className={'cursor-pointer'} onClick={row.getToggleExpandedHandler()} />
        ) : (
          (getValue() as number)
        )}{' '}
      </div>
    ),
    meta: { last: true },
  },
]
