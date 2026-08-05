import { z } from 'zod'

export const PositionCreateSchema = z.object({
	title: z
		.string()
		.min(6, 'Наименование не может быть короче 6-ти символов')
		.max(100, 'Наименования не может быть длинее 100 символов')
})

export type TPositionCreate = z.infer<typeof PositionCreateSchema>
