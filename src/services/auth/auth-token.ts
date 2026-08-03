import Cookies from 'js-cookie'

export const EnumTokens = {
	ACCESS_TOKEN: 'accessToken',
	REFRESH_TOKEN: 'refreshToken'
} as const

/**
 * Получить токен доступа
 */
export const getAccessToken = (): string | null => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

/**
 * Сохранить токен доступа в хранилище cookies
 *
 * @param token - Токен доступа
 */
export const saveTokenToStorage = (token: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, token, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict',
		expires: 1
	})
}

/**
 * Удалить токен доступа из cookies
 */
export const removeTokenFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN, {
		domain: process.env.APP_DOMAIN,
		sameSite: 'strict'
	})
}
