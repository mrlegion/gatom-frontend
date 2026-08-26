import { z } from 'zod'

export const PositionUpdateSchema = z.object({
	title: z
		.string('Наименование не может быть пустым')
		.min(6, 'Наименование не может быть короче 6-ти символов')
		.max(100, 'Наименования не может быть длинее 100 символов'),
	deactivated: z.boolean()
})

export type TPositionUpdate = z.infer<typeof PositionUpdateSchema>
