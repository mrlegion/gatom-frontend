export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URI = {
	root: (uri: string = '') => `${uri ? uri : ''}`,

	home: () => PUBLIC_URI.root('/'),

	auth: {
		root: (uri: string = '') => PUBLIC_URI.root(`/auth${uri}`),

		login: () => PUBLIC_URI.auth.root('/login')
	},

	admin: {
		root: (uri: string = '') => PUBLIC_URI.root(`/admin${uri}`),

		// мы делаем для каждого модуля свои объекты URI
		home: () => PUBLIC_URI.admin.root('/'),

		// Панель управления
		dashboard: {
			root: (uri: string = '') => PUBLIC_URI.admin.root(`/dashboard${uri}`)
		},
		// Пользователи
		users: {
			root: (uri: string = '') => PUBLIC_URI.admin.root(`/users${uri}`),

			list: () => PUBLIC_URI.admin.users.root(),
			view: (id: string) => PUBLIC_URI.admin.users.root(`/${id}`),
			create: () => PUBLIC_URI.admin.users.root('/create'),
			edit: (id: string) => `${PUBLIC_URI.admin.users.view(id)}/edit`
		},

		// Должности
		positions: {
			root: (uri: string = '') => PUBLIC_URI.admin.root(`/positions${uri}`),

			list: () => PUBLIC_URI.admin.positions.root(),
			view: (id: string) => PUBLIC_URI.admin.positions.root(`/${id}`),
			create: () => PUBLIC_URI.admin.positions.root('/create'),
			edit: (id: string) => `${PUBLIC_URI.admin.positions.view(id)}/edit`
		}
	}
}
