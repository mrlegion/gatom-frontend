import { useQuery } from '@tanstack/react-query'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

import { TOrganizationResponse } from '@/types/organizations'

export function useGetOrganizationsByIds(ids: string[]) {
	const uniqueIds = [...new Set(ids.filter(id => id?.trim()))]

	const {
		data: organizations,
		isLoading: isOrganizationsLoading,
		isError: isOrganizationsError
	} = useQuery<TOrganizationResponse[], Error>({
		queryKey: organizationKey.findBy.ids(uniqueIds),
		queryFn: async (): Promise<TOrganizationResponse[]> => {
			if (uniqueIds.length === 0) return []
			return await organizationService.findByIds(uniqueIds)
		},
		enabled: uniqueIds.length > 0,
		retry: 2,
		staleTime: 5 * 60 * 1000
	})

	return {
		organizations,
		isOrganizationsLoading,
		isOrganizationsError
	}
}
