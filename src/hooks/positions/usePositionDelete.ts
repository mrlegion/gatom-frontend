import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { positionKey } from '@/config/queries'

import { positionService } from '@/services/positions'

export const usePositionDelete = () => {
	const queryClient = useQueryClient()

	const { mutate: deletePosition, isPending: isDeletePending } = useMutation({
		mutationKey: positionKey.delete(),
		mutationFn: async (id: string) => await positionService.delete(id),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: positionKey.list()
			})

			toast.success('Успешное удаление', {
				description: 'Должность успешно удалена'
			})
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError(error: any) {
			toast.error(error?.response?.data?.message || 'Ошибка удаления')
		}
	})

	return {
		deletePosition,
		isDeletePending
	}
}
