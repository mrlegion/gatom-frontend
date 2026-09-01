import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { positionKey } from '@/config/queries'

import { positionService } from '@/services/positions'

import { IPositionCreate, IPositonResponse } from '@/types/positions'

export function usePositionCreate() {
	const queryClient = useQueryClient()

	const { mutate: createPosition, isPending: isCreatePositionPending } = useMutation({
		mutationKey: positionKey.create(),
		mutationFn: async (data: IPositionCreate) => await positionService.create(data),
		onSuccess: async (data: IPositonResponse) => {
			await queryClient.invalidateQueries({ queryKey: positionKey.list() })
			toast.success(`Должность ${data.position.title} успешно создана`)
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			toast.error(error?.response?.data?.message || 'Ошибка удаления должности')
		}
	})

	return {
		createPosition,
		isCreatePositionPending
	}
}
