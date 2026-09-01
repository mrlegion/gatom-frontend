import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Edit, SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

import { SubsidiaryDialogForm } from '@/components/pages/subsidiaries/SubsidiaryDialogForm'
import { AlertDialogDelete, Button, ButtonDialogTrigger, Checkbox } from '@/components/ui'

import { PUBLIC_URI } from '@/config'
import { SubsidiaryFormValue } from '@/schemas/subsidiaries'
import type { TSubsidiaryTable } from '@/types/subsidiaries'

export interface SubsidiaryEditValues {
	id: string
	values: SubsidiaryFormValue
}

interface ISubsidiaryColumnsProps {
	onDelete: (id: string) => void
	onEdit: ({ id, values }: SubsidiaryEditValues) => Promise<void>
	isEditPending: boolean
}

export const getSubsidiaryColumns = ({
	onDelete,
	onEdit,
	isEditPending
}: ISubsidiaryColumnsProps): ColumnDef<TSubsidiaryTable>[] => [
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

			const onHandlerEditSubmit = async (values: SubsidiaryFormValue) => {
				await onEdit({
					id: subsidiary.id,
					values
				})
			}

			return (
				<div className='flex justify-end gap-2'>
					<SubsidiaryDialogForm
						mode='edit'
						onSubmit={onHandlerEditSubmit}
						isPending={isEditPending}
						defaultValues={{
							title: subsidiary.title,
							address: subsidiary.address,
							organizationId: subsidiary.organizationId,
							phones: subsidiary.phones.map(p => ({ value: p })),
							emails: subsidiary.emails.map(e => ({ value: e }))
						}}
						dialogTrigger={<ButtonDialogTrigger icon={<Edit className='h-4 w-4' />} variant='outline' />}
					/>
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
