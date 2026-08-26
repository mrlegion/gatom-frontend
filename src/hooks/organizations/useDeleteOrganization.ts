'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { organizationKey } from '@/config/queries'

import { organizationService } from '@/services/organizations'

import { PUBLIC_URI } from '@/config'

export function useDeleteOrganization() {
	const queryClient = useQueryClient()
	const router = useRouter()

	const { mutate: deleteOrganization, isPending: isDeleteOrganizationPending } = useMutation({
		mutationKey: organizationKey.delete(),
		mutationFn: (id: string) => organizationService.delete(id),
		onSuccess: async (data: boolean) => {
			await queryClient.invalidateQueries({ queryKey: organizationKey.list() })
			if (data) {
				toast.success('Организация успешно удалена')
				router.push(PUBLIC_URI.admin.dictionaries.organizations.list())
			} else toast.error('Ошибка удаления организации')
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Ошибка удаления организации')
		}
	})

	return {
		deleteOrganization,
		isDeleteOrganizationPending
	}
}
