import { ColumnDef } from '@tanstack/react-table'
import { CertType, GovCertType } from '@/types/types.ts'
import { DataTableColumnHeader } from '@/components/ui/data-table-column-header.tsx'

export const columns: ColumnDef<GovCertType>[] = [
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
        id: 'normalIssued',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'normalIssued')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
        cell: ({ getValue }) => <span>{Number(getValue())}</span>,
      },
      {
        id: 'normalRepeated',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'normalRepeated')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader column={column} title='معاد' />,
      },
      {
        id: 'normalCancelled',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'normalCancelled')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        id: 'normalTotal',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'normalTotal')?.certTypeCount,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'bg-[#F1F0FF]'}
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
        id: 'firstPrinted',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'firstPrinted')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader column={column} title='مصدر' />,
      },
      {
        id: 'firstCancelled',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'firstCancelled')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader column={column} title='ملغي' />,
      },
      {
        id: 'firstTotal',
        accessorFn: (data) => data.certType.find((item: CertType) => item.certTypeCode === 'firstTotal')?.certTypeCount,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title='إجمالي'
            className={'bg-[#F1F0FF]'}
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
    accessorKey: 'govCertTypeTotalCount',
    header: ({ column }) => (
      <DataTableColumnHeader
        className={'flex -translate-x-2 -translate-y-2/3  justify-center bg-[#0B0367]'}
        column={column}
        title='الإجمالي'
      />
    ),
    cell: ({ getValue }) => <div className={'text-center'}> {Number(getValue()) as number}</div>,
  },
  {
    id: 'specialBirth',
    header: ({ column }) => (
      <DataTableColumnHeader
        className={
          '-mx-2 -my-3 flex h-full items-center justify-center rounded-tl-md bg-pink-400 py-5 text-center text-white'
        }
        column={column}
        title='ميلاد مميز'
      />
    ),
    meta: { last: true },
    columns: [
      {
        id: 'normalSpecial',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'normalSpecial')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader className={'justify-center'} column={column} title='عادي' />,
        cell: ({ getValue }) => <div className={'translate-x-2 text-center'}>{getValue()}</div>,
      },
      {
        id: 'firstSpecial',
        accessorFn: (data) =>
          data.certType.find((item: CertType) => item.certTypeCode === 'firstSpecial')?.certTypeCount,
        header: ({ column }) => <DataTableColumnHeader className={'justify-center'} column={column} title='برسم' />,
        cell: ({ getValue }) => <div className={'translate-x-2 text-center'}>{getValue()}</div>,
      },
    ],
  },
]
