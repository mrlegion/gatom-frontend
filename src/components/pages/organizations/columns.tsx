import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Trash2Icon } from 'lucide-react'
import Link from 'next/link'

import { OrganizationSheetView } from '@/components/pages/organizations/OrganizationSheetView'
import { OrganizationUpdateDialog } from '@/components/pages/organizations/OrganizationUpdateDialog'
import { AlertDialogDelete, AlertDialogQuestion, Button, Checkbox } from '@/components/ui'

import { PUBLIC_URI } from '@/config'
import { IOrganization, TOrganizationTable } from '@/types/organizations'

interface IOrganizationColumnProps {
	onDelete: (id: string) => void
}

export const getOrganizationColumn = ({ onDelete }: IOrganizationColumnProps): ColumnDef<TOrganizationTable>[] => [
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
					className='font-semibold hover:underline'
					href={PUBLIC_URI.admin.dictionaries.organizations.view(row.getValue('id'))}
				>
					{row.getValue('title')}
				</Link>
			)
		},
		enableHiding: false
	},
	{
		accessorKey: 'shortTitle',
		header: 'Краткое наименование'
	},
	{
		accessorKey: 'ogrn',
		header: 'ОГРН'
	},
	{
		accessorKey: 'inn',
		header: 'ИНН'
	},
	{
		accessorKey: 'kpp',
		header: 'КПП'
	},
	{
		accessorKey: 'oktmo',
		header: 'ОКТМО'
	},
	{
		id: 'actions',
		size: 85,
		cell: ({ row }) => {
			const item: IOrganization = { ...row.original, createdAt: '', updatedAt: '' }
			return (
				<div className='flex justify-end'>
					<OrganizationUpdateDialog item={item} usage='list' onlyIcon />
					<span className='mr-2'></span>
					<AlertDialogDelete id={item.id} title={item.title} onDelete={() => onDelete(item.id)} onlyIcon />
				</div>
			)
		}
	}
]
