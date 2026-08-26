import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, SquareArrowOutUpRight, Trash2Icon } from 'lucide-react'
import Link from 'next/link'

import { AlertDialogDelete, AlertDialogQuestion, Button, Checkbox } from '@/components/ui'

import { subsidiaryKey } from '@/config/queries'

import { PUBLIC_URI } from '@/config'
import type { TSubsidiaryTable } from '@/types/subsidiaries'

interface ISubsidiaryColumnsProps {
	onDelete: (id: string) => void
}

export const getSubsidiaryColumns = ({ onDelete }: ISubsidiaryColumnsProps): ColumnDef<TSubsidiaryTable>[] => [
	{
		id: 'select',
		size: 40,
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()}
				onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(value)}
				aria-label='Выбрать всё'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value: boolean) => row.toggleSelected(value)}
				aria-label='Выбрать строку'
			/>
		)
	},
	{
		accessorKey: 'id',
		header: 'ID',
		size: 250,
		cell: ({ row }) => {
			return <div className='px-2 py-1 font-mono text-sm'>{row.getValue('id')}</div>
		}
	},
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Наименование
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => {
			return (
				<Link
					href={PUBLIC_URI.admin.dictionaries.subsidiaries.root(row.getValue('id'))}
					className='font-semibold hover:underline'
				>
					{row.getValue('title')}
				</Link>
			)
		},
		enableHiding: false
	},
	{
		accessorKey: 'organizationTitle',
		header: 'Организация',
		cell: ({ row }) => {
			const subsidiary = row.original
			return (
				<Link
					className='flex items-center gap-2'
					href={PUBLIC_URI.admin.dictionaries.organizations.view(subsidiary.organizationId)}
				>
					{subsidiary.organizationTitle}
					<SquareArrowOutUpRight className='h-4 w-4' />
				</Link>
			)
		}
	},
	{
		accessorKey: 'address',
		header: 'Адрес'
	},
	{
		id: 'actions',
		size: 85,
		cell: ({ row }) => {
			const subsidiary = row.original
			return (
				<div className='flex justify-end'>
					<AlertDialogDelete
						onlyIcon
						id={subsidiary.id}
						title={subsidiary.title}
						onDelete={() => onDelete(subsidiary.id)}
					/>
				</div>
			)
		}
	}
]
