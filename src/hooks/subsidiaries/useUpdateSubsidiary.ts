'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { toast } from 'sonner'

import { subsidiaryKey } from '@/config/queries'

import { subsidiaryService } from '@/services/subsidiaries'

import type { TSubsidiaryResponse, TUpdateSubsidiary } from '@/types/subsidiaries'

export interface UpdateSubsidiaryVariables {
	id: string
	data: TUpdateSubsidiary
}

export function useUpdateSubsidiary() {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationKey: subsidiaryKey.update(),
		mutationFn: async ({ id, data }: UpdateSubsidiaryVariables) => await subsidiaryService.update(id, data),
		onSuccess: async (data: TSubsidiaryResponse) => {
			await queryClient.invalidateQueries({ queryKey: subsidiaryKey.list() })
			toast.success(`Данные подразделения ${data?.title} успешно обновлены`)
		},
		onError: (error: unknown) => {
			const message = isAxiosError<{ message?: string }>(error) ? error.response?.data?.message : undefined
			toast.error(message ?? 'Ошибка создания подразделения')
		}
	})

	return {
		updateSubsidiary: mutation.mutateAsync,
		isUpdateSubsidiaryPending: mutation.isPending,
		isUpdateSubsidiaryError: mutation.isError,
		errorSubsidiary: mutation.error,
		resetSubsidiary: mutation.reset
	}
}
