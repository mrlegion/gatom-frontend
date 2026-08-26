import { useQuery } from '@tanstack/react-query'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

export function useGetOrganizationByTitle(title: string) {
	const { data: organization, isLoading: isOrganizationLoading } = useQuery({
		queryKey: organizationKey.findBy.title(title),
		queryFn: () => organizationService.findByTitle(title),
		retry: 2
	})

	return {
		organization,
		isOrganizationLoading
	}
}
