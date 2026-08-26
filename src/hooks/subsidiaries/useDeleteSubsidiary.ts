'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { subsidiaryKey } from '@/config/queries'

import { subsidiaryService } from '@/services/subsidiaries'

export const useDeleteSubsidiary = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteSubsidiary,
		isPending: isDeletePending,
		isError: isDeleteError
	} = useMutation({
		mutationKey: subsidiaryKey.delete(),
		mutationFn: async (id: string) => await subsidiaryService.delete(id),
		onSuccess: async (data: boolean) => {
			if (data) {
				toast.success('Подразделение успешно удалено')
				await queryClient.invalidateQueries({ queryKey: subsidiaryKey.list() })
			} else toast.error('Ошибка удаления подразделения')
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Ошибка удаления подразделения')
		}
	})

	return {
		deleteSubsidiary,
		isDeletePending,
		isDeleteError
	}
}
