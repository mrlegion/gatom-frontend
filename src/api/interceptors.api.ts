import axios, { type AxiosError, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'

import { authService, getAccessToken, removeTokenFromStorage } from '@/services/auth'

import { errorCatch, getContentType } from './helpers.api'
import { API_URL } from '@/config'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true
}

interface AxiosRequestConfigWithRetry extends InternalAxiosRequestConfig {
	_isRetry?: boolean
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async (error: AxiosError) => {
		const originalRequest = error.config as AxiosRequestConfigWithRetry

		if (
			(error.response?.status === 401 ||
				errorCatch(error) === 'Токен истёк' ||
				errorCatch(error) === 'Заголовок авторизации отсутствует' ||
				errorCatch(error) === 'Токен должен быть в заголовке') &&
			originalRequest &&
			!originalRequest?._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await authService.refresh()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === '' || errorCatch(error) === '') removeTokenFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
