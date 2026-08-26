import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

import { TOrganizationCreate, TOrganizationCreateResponse } from '@/types/organizations'

export function useCreateOrganization() {
	const queryClient = useQueryClient()

	const {
		mutate: createOrganization,
		isPending: isCreateOrganizationPending,
		isError: isCreateOrganizationError,
		isSuccess: isCreateOrganizationSuccess,
		error: createOrganizationError,
		reset: resetCreateOrganization
	} = useMutation({
		mutationKey: organizationKey.create(),
		mutationFn: (data: TOrganizationCreate) => organizationService.create(data),
		onSuccess: async (data: TOrganizationCreateResponse) => {
			await queryClient.invalidateQueries({
				queryKey: organizationKey.list()
			})

			toast.success(`Организация ${data.data?.title ? data.data.title : ''} успешно создана`)
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Ошибка создания организации')
		}
	})

	return {
		createOrganization,
		isCreateOrganizationPending,
		isCreateOrganizationError,
		isCreateOrganizationSuccess,
		createOrganizationError,
		resetCreateOrganization
	}
}
