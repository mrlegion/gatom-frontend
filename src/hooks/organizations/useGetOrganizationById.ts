'use client'

import { useQuery } from '@tanstack/react-query'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

export function useGetOrganizationById(id: string) {
	const { data: response, isLoading: isOrganizationLoading } = useQuery({
		queryKey: organizationKey.findBy.id(id),
		queryFn: async () => await organizationService.findById(id),
		retry: 2
	})

	return {
		organization: response?.data,
		isOrganizationLoading
	}
}
