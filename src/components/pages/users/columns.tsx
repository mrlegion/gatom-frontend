'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

import {
	Badge,
	Button,
	Checkbox,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui'

import { PUBLIC_URI } from '@/config'
import type { TUserTable } from '@/types/user'

export const columns: ColumnDef<TUserTable>[] = [
	{
		id: 'select',
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
		header: 'ID'
	},
	{
		accessorKey: 'email',
		header: 'Электронная почта',
		cell: ({ row }) => {
			return (
				<Link className='font-semibold hover:underline' href={PUBLIC_URI.admin.users.view(row.getValue('id'))}>
					{row.getValue('email')}
				</Link>
			)
		}
	},
	{
		accessorKey: 'username',
		header: 'ФИО'
	},
	{
		accessorKey: 'passwordChangeAt',
		header: 'Смена пароля'
	},
	{
		accessorKey: 'inactive',
		header: 'Статус',
		cell: ({ row }) => {
			const value = row.getValue('inactive') as string
			console.log(value)
			if (value === 'active') {
				return <Badge color='green'>Активный</Badge>
			} else {
				return <Badge color='red'>Деактивирован</Badge>
			}
		}
	},
	{
		accessorKey: 'initial',
		header: 'Начальный',
		cell: ({ row }) => {
			const value = row.getValue('initial') as string

			if (value === 'active') {
				return <Badge color='green'>Нет</Badge>
			} else {
				return <Badge color='blue'>Да</Badge>
			}
		}
	},
	{
		accessorKey: 'usedTwoFactor',
		header: 'Исп.2FA'
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const user = row.original

			return (
				<div className='flex justify-end'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' className='h-8 w-8 p-0'>
								<span className='sr-only'>Открыть меню</span>
								<MoreHorizontal className='h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>Действия</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href={PUBLIC_URI.admin.users.view(user.id)}>Просмотр</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href={PUBLIC_URI.admin.users.edit(user.id)}>Редактировать</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem className='text-red-600'>Удалить</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			)
		}
	}
]
