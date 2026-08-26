import { useQuery } from '@tanstack/react-query'

import { subsidiaryService } from '@/services/subsidiaries'

export function useGetSubsidiariesByOrganization(organizationId: string) {
	const { data: subsidiaries, isLoading: isSubsidiariesLoading } = useQuery({
		queryKey: ['get subsidiaries by organization', organizationId],
		queryFn: () => subsidiaryService.findByOrganization(organizationId),
		retry: 2
	})

	return {
		subsidiaries,
		isSubsidiariesLoading
	}
}
