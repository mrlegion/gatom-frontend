'use client'

import { useQuery } from '@tanstack/react-query'

import { positionQueriesKey } from '@/config/queries'

import { positionService } from '@/services/positions'

export function usePositionsList() {
	const {
		data: positions,
		isLoading: isPositionsLoading,
		isError: isPositionsError
	} = useQuery({
		queryKey: positionQueriesKey.list(),
		queryFn: async () => await positionService.getAll(),
		retry: 2
	})

	return {
		positions,
		isPositionsLoading,
		isPositionsError
	}
}
