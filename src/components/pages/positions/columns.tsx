'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Trash2Icon } from 'lucide-react'

import { PositionDrawerEdit } from '@/components/pages/positions/PositionDrawerEdit'
import { AlertDialogQuestion, Badge, Button, Checkbox } from '@/components/ui'

import { TPositionTable } from '@/types/positions'
import { dateFormater } from '@/utils'

interface IPositionsColumnsProps {
	onDelete: (id: string) => void
}

export const getPositionsColumns = ({ onDelete }: IPositionsColumnsProps): ColumnDef<TPositionTable>[] => [
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
				<PositionDrawerEdit item={row.original} />
				// <Link
				// 	href={PUBLIC_URI.admin.positions.view(row.getValue('id'))}
				// 	className='font-semibold hover:underline'
				// >
				// 	{row.getValue('title')}
				// </Link>
			)
		},
		enableHiding: false
	},
	{
		accessorKey: 'deactivated',
		header: ({ column }) => {
			return (
				<Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
					Деактивирована <ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		size: 200,
		cell: ({ row }) => {
			const value = row.getValue('deactivated') as boolean

			if (value)
				return (
					<Badge color='red' className='justify-center'>
						Да
					</Badge>
				)
			else {
				return <Badge color='green'>Нет</Badge>
			}
		}
	},
	{
		accessorKey: 'createdAt',
		header: 'Время создания',
		size: 200,
		cell: ({ row }) => {
			const value = row.getValue('createdAt') as string

			return dateFormater.withHourMinute(value)
		}
	},
	{
		accessorKey: 'updatedAt',
		header: 'Время обновления',
		size: 200,
		cell: ({ row }) => {
			const value = row.getValue('updatedAt') as string

			return dateFormater.withHourMinute(value)
		}
	},
	{
		id: 'actions',
		size: 85,
		cell: ({ row }) => {
			return (
				<div className='flex justify-end'>
					<AlertDialogQuestion
						title='Удалить запись?'
						trigger={
							<Button variant='destructive' className='w-15'>
								<Trash2Icon className='h-4 w-4' />
							</Button>
						}
						description={
							<>
								Это действие приведет к удалению записи{' '}
								<strong>
									&quot;
									{row.getValue('title')}
									&quot;
								</strong>{' '}
								навсегда. Продолжить?
							</>
						}
						media={{
							icon: <Trash2Icon />,
							className: 'bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive'
						}}
						btnCancelLabel='Отмена'
						accept={{
							variant: 'destructive',
							label: 'Удалить',
							action: () => onDelete(row.getValue('id'))
						}}
					/>
				</div>
			)
		}
	}
]
