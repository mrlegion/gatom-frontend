'use client'

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table'
import { CSSProperties, useEffect, useState } from 'react'

import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui'

import { TPositionTable } from '@/types/positions'

interface IDataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

const DEFAULT_REACT_TABLE_COLUMN_WIDTH = 150

export function DataTable<TData, TValue>({ data, columns }: IDataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([])

	// eslint-disable-next-line react-hooks/incompatible-library
	const table = useReactTable<TData>({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting
		},
		initialState: {
			pagination: {
				pageSize: 15
			}
		},
		getRowId: row => {
			return Math.random().toString(36).substring(2, 9)
		}
	})

	return (
		<div>
			<div className='overflow-hidden rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(hg => (
							<TableRow key={hg.id}>
								{hg.headers.map(header => {
									const styles: CSSProperties =
										header.getSize() !== DEFAULT_REACT_TABLE_COLUMN_WIDTH ? { width: `${header.getSize()}px` } : {}

									return (
										<TableHead key={header.id} style={styles}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className='h-24 text-center'>
									Нет данных
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className='flex items-center justify-center space-x-2 py-4'>
				<Button variant='outline' size='sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
					Назад
				</Button>
				{Array.from({ length: table.getPageCount() }).map((_, index) => (
					<Button
						variant='outline'
						size='sm'
						onClick={() => table.setPageIndex(index)}
						key={index}
					>{`${index + 1}`}</Button>
				))}
				<Button variant='outline' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					Вперед
				</Button>
			</div>
		</div>
	)
}
