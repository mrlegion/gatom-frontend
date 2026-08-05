'use client'

import { useCallback, useMemo } from 'react'

import { DataTable, DataTableSkeleton } from '@/components/data-table'
import { getPositionsColumns } from '@/components/pages/positions/columns'
import { PositionCreateDialog } from '@/components/pages/positions/PositionCreateDialog'

import { usePositionDelete } from '@/hooks/positions/usePositionDelete'
import { usePositionsList } from '@/hooks/positions/usePositionsList'

import { type TPositionTable } from '@/types/positions'

export function PositionPage() {
	const { positions, isPositionsLoading, isPositionsError } = usePositionsList()

	console.log('positions: ', positions)

	const positionTable: TPositionTable[] = positions
		? positions
				.map(p => ({
					id: p.id,
					title: p.title,
					deactivated: p.isNonActive,
					createdAt: p.createdAt,
					updatedAt: p.updatedAt
				}))
				.sort((a, b) => a.id.localeCompare(b.id))
		: []

	const { deletePosition } = usePositionDelete()
	const onDelete = useCallback((id: string) => deletePosition(id), [])
	const columns = useMemo(() => getPositionsColumns({ onDelete }), [])

	return (
		<>
			{isPositionsLoading ? (
				<DataTableSkeleton rows={8} />
			) : (
				<div className='flex w-full flex-col'>
					<PositionCreateDialog />
					<DataTable columns={columns} data={positionTable} />
				</div>
			)}
		</>
	)
}
