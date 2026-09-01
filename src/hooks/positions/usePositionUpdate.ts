import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { positionKey } from '@/config/queries'

import { positionService } from '@/services/positions'

import { TPositionUpdate } from '@/types/positions'

export const usePositionUpdate = (id: string) => {
	const queryClient = useQueryClient()

	const { mutate: updatePosition, isPending: isUpdatePending } = useMutation({
		mutationKey: positionKey.update(id),
		mutationFn: async (data: TPositionUpdate) => await positionService.update(id, data),
		onSuccess: async data => {
			await queryClient.invalidateQueries({
				queryKey: positionKey.list()
			})

			toast.success('Успешное обновление', {
				description: `Должность ${data.position.title} успешно обновлена`
			})
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'Ошибка обновления')
		}
	})

	return {
		updatePosition,
		isUpdatePending
	}
}
