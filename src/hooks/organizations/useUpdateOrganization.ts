import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

import { TUsage } from '@/types/common'
import { TOrganizationUpdate, TOrganizationUpdateResponse } from '@/types/organizations'

export function useUpdateOrganization(id: string, usage: TUsage = 'list') {
	const queryClient = useQueryClient()

	const {
		mutate: updateOrganization,
		isPending: isUpdateOrganizationPending,
		isError: isUpdateOrganizationError,
		isSuccess: isUpdateOrganizationSuccess,
		error: updateOrganizationError,
		reset: resetUpdateOrganization
	} = useMutation({
		mutationKey: organizationKey.update(id),
		mutationFn: (data: TOrganizationUpdate) => organizationService.update(id, data),
		onSuccess: async (data: TOrganizationUpdateResponse) => {
			if (usage === 'list') await queryClient.invalidateQueries({ queryKey: organizationKey.list() })
			if (usage === 'once') await queryClient.invalidateQueries({ queryKey: organizationKey.findBy.id(id) })

			if (data.success) toast.success(`Организация ${data.data?.title} успешно обновлена`)
			else toast.error('Ошибка обновления организации')
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			console.log(error)
			toast.error(error?.response?.data?.message || 'Ошибка обновления организации')
		}
	})

	return {
		updateOrganization,
		isUpdateOrganizationPending,
		isUpdateOrganizationError,
		isUpdateOrganizationSuccess,
		updateOrganizationError,
		resetUpdateOrganization
	}
}
