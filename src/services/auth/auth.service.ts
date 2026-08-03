import API_URI from '@/config/api.config'

import { saveTokenToStorage } from '@/services/auth'

import { axiosClassic, axiosWithAuth } from '@/api'
import type { IChangePasswordForm, ILoginForm, TLoginResponse, TRefreshResponse } from '@/types/auth'


class AuthService {
	/**
	 * Вход в систему
	 *
	 * @param data - Данные для входа
	 */
	public async login(data: ILoginForm) {
		const response = await axiosClassic<TLoginResponse>({
			url: API_URI.auth.login(),
			method: 'POST',
			data
		})

		if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)

		return response
	}

	/**
	 * Запрос обновления токена доступа
	 */
	public async refresh() {
		const response = await axiosClassic<TRefreshResponse>({
			url: API_URI.auth.refresh(),
			method: 'POST'
		})

		if (response.data.accessToken) saveTokenToStorage(response.data.accessToken)

		return response
	}

	/**
	 * Смена пароля пользователя
	 *
	 * @param data - Данные обновления пароля пользователя
	 */
	public async changePassword(data: IChangePasswordForm) {
		return await axiosWithAuth<boolean>({
			url: API_URI.auth.updatePassword(),
			method: 'POST',
			data
		})
	}
}

export const authService = new AuthService()
