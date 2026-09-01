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
		home: () => PUBLIC_URI.admin.root(),

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

		// Справочники
		dictionaries: {
			root: (url: string = '') => PUBLIC_URI.admin.root(`/dictionaries${url}`),

			// Должности
			positions: {
				root: (uri: string = '') => PUBLIC_URI.admin.dictionaries.root(`/positions${uri}`),

				list: () => PUBLIC_URI.admin.dictionaries.positions.root()
			},

			// Организации
			organizations: {
				root: (uri: string = '') => PUBLIC_URI.admin.dictionaries.root(`/organizations${uri}`),

				list: () => PUBLIC_URI.admin.dictionaries.organizations.root(),
				view: (id: string) => PUBLIC_URI.admin.dictionaries.organizations.root(`/${id}`)
			},

			// Подразделения
			subsidiaries: {
				root: (uri: string = '') => PUBLIC_URI.admin.dictionaries.root(`/subsidiaries${uri}`),

				list: () => PUBLIC_URI.admin.dictionaries.subsidiaries.root()
			}
		}
	}
}
