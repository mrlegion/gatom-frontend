export const positionKey = {
	all: ['positions'] as const,
	list: () => [...positionKey.all, 'list'] as const,
	create: () => [...positionKey.all, 'create'] as const,
	update: (id: string) => [...positionKey.all, 'undate', id] as const,
	delete: () => [...positionKey.all, 'delete'] as const
}
