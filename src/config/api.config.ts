export const API_URL = process.env.SERVER_URL as string

const API_URI = {
	root: (uri: string = '') => `/api${uri ? uri : ''}`,

	auth: {
		root: (uri: string = '') => API_URI.root(`/auth${uri}`),

		login: () => API_URI.auth.root('/login'),
		register: () => API_URI.auth.root('/register'),
		refresh: () => API_URI.auth.root('/refresh'),
		logout: () => API_URI.auth.root('/logout'),
		updatePassword: () => API_URI.auth.root('/update-password')
	},

	organizations: {
		root: (uri: string = '') => API_URI.root(`/organizations${uri}`),

		getAll: () => API_URI.organizations.root(),
		create: () => API_URI.organizations.root(),
		update: (id: string) => API_URI.organizations.root(`/${id}`),
		delete: (id: string) => API_URI.organizations.root(`/${id}`),

		findBy: {
			root: (uri: string = '') => API_URI.organizations.root(`/find-by${uri}`),
			id: (id: string) => API_URI.organizations.findBy.root(`/id/${id}`),
			title: (title: string) => API_URI.organizations.findBy.root(`/title/${title}`)
		}
	},

	positions: {
		root: (uri: string = '') => API_URI.root(`/positions${uri}`),

		getAll: () => API_URI.positions.root(),
		create: () => API_URI.positions.root(),
		update: (id: string) => API_URI.positions.root(`/${id}`),
		delete: (id: string) => API_URI.positions.root(`/${id}`),

		findBy: {
			root: (uri: string = '') => API_URI.root(`/find-by${uri}`),
			id: (id: string) => API_URI.positions.findBy.root(`/id/${id}`)
		}
	},

	subsidiaries: {
		root: (uri: string = '') => API_URI.root(`/subsidiaries${uri}`),

		getAll: () => API_URI.subsidiaries.root(),
		create: () => API_URI.subsidiaries.root(),
		update: (id: string) => API_URI.subsidiaries.root(`/${id}`),
		delete: (id: string) => API_URI.subsidiaries.root(`/${id}`),
		connect: (id: string) => API_URI.subsidiaries.root(`/connect/${id}`),

		findBy: {
			root: (uri: string = '') => API_URI.subsidiaries.root(`/find-by${uri}`),
			id: (id: string) => API_URI.subsidiaries.findBy.root(`/id/${id}`),
			title: (title: string) => API_URI.subsidiaries.findBy.root(`/title/${title}`),
			organization: (organization: string) => API_URI.subsidiaries.findBy.root(`/organization/${organization}`)
		}
	}
}

export default API_URI
