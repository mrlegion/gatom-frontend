'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { authService } from '@/services/auth'

import { PUBLIC_URI } from '@/config'
import { ILoginForm } from '@/types/auth'

export function useLogin() {
	const router = useRouter()

	const { mutate: login, isPending: isLoginLoading } = useMutation({
		mutationKey: ['login form'],
		mutationFn: async (data: ILoginForm) => {
			await authService.login(data)
		},
		onSuccess() {
			toast.info('Успешный вход', {
				description: 'Вы успешно вошли в систему'
			})
			router.push(PUBLIC_URI.admin.home())
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError(error: any) {
			toast.error('Ошибка входа', {
				description: error.response?.data?.message || 'При попытке входа возникли ошибки авторизации'
			})
		}
	})

	return { login, isLoginLoading }
}
