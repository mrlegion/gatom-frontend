export const positionQueriesKey = {
	list: () => ['position list']
}

export const positionMutationKey = {
	create: () => ['position create'],
	update: (id: string) => ['position update', id],
	delete: () => ['position delete']
}
