'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { subsidiaryKey } from '@/config/queries'

import { subsidiaryService } from '@/services/subsidiaries'

import type { TCreateSubsidiary, TSubsidiaryResponse } from '@/types/subsidiaries'

export function useCreateSubsidiary() {
	const queryClient = useQueryClient()

	const {
		mutate: createSubsidiary,
		isPending: isCreateSubsidiaryPending,
		isError: isCreateSubsidiaryError,
		isSuccess: isCreateSubsidiarySuccess,
		error: createSubsidiaryError,
		reset: resetCreateSubsidiary
	} = useMutation({
		mutationKey: subsidiaryKey.create(),
		mutationFn: async (data: TCreateSubsidiary) => await subsidiaryService.create(data),
		onSuccess: async (data: TSubsidiaryResponse) => {
			await queryClient.invalidateQueries({ queryKey: subsidiaryKey.list() })

			toast.success(`Подразделение ${data?.title} успешно создана`)
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Ошибка создания подразделения')
		}
	})

	return {
		createSubsidiary,
		isCreateSubsidiaryPending,
		isCreateSubsidiaryError,
		isCreateSubsidiarySuccess,
		createSubsidiaryError,
		resetCreateSubsidiary
	}
}
