export const organizationKey = {
	all: ['organizations'] as const,
	list: () => [...organizationKey.all, 'list'] as const,
	findBy: {
		all: () => [...organizationKey.all, 'findBy'] as const,
		id: (id: string) => [...organizationKey.findBy.all(), 'ID', id] as const,
		title: (title: string) => [...organizationKey.findBy.all(), 'title', title] as const,
		ids: (ids: string[]) => [...organizationKey.findBy.all(), 'ids', ...ids] as const
	},
	create: () => [...organizationKey.all, 'create'] as const,
	update: (id: string) => [...organizationKey.all, 'update', id] as const,
	delete: () => [...organizationKey.all, 'delete'] as const
}
