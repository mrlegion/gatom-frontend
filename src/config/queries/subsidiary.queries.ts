export const subsidiaryKey = {
	all: ['subsidiaries'] as const,
	list: () => [...subsidiaryKey.all, 'list'] as const,
	create: () => [...subsidiaryKey.all, 'create'] as const,
	update: () => [...subsidiaryKey.all, 'update'] as const,
	delete: () => [...subsidiaryKey.all, 'delete'] as const
}
