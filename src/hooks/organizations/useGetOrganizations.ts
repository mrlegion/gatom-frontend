'use client'

import { useQuery } from '@tanstack/react-query'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

export function useGetOrganizations() {
	const { data: organizations, isLoading: isOrganizationLoading } = useQuery({
		queryKey: organizationKey.list(),
		queryFn: () => organizationService.list(),
		retry: 2
	})

	return {
		organizations,
		isOrganizationLoading
	}
}
