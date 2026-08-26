'use client'

import { useQuery } from '@tanstack/react-query'

import { subsidiaryKey } from '@/config/queries'

import { useGetOrganizationsByIds } from '@/hooks/organizations'

import { subsidiaryService } from '@/services/subsidiaries'

export function useGetAllSubsidiaries() {
	const subsidiaryQuery = useQuery({
		queryKey: subsidiaryKey.list(),
		queryFn: async () => await subsidiaryService.getAll(),
		retry: 2
	})

	const organizationsIds = subsidiaryQuery.data?.map(s => s.organizationId).filter(Boolean) || []

	const { organizations, isOrganizationsLoading, isOrganizationsError } = useGetOrganizationsByIds(organizationsIds)

	const subsidiaries = subsidiaryQuery.data?.map(sub => ({
		...sub,
		organizationTitle: organizations?.find(org => org.id === sub.organizationId)?.shortTitle || 'Пусто'
	}))

	return {
		subsidiaries,
		isLoading: isOrganizationsLoading || subsidiaryQuery.isLoading,
		isError: isOrganizationsError || subsidiaryQuery.isError
	}
}
