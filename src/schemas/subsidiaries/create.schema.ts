import { z } from 'zod'

export const CreateSubsidiarySchema = z.object({
	title: z
		.string()
		.nonempty('Наименование не может быть пустым')
		.min(3, 'Минимальная длина наименования 3 символа')
		.max(100, 'Максимальная длина наименования 100 символов'),
	address: z
		.string()
		.nonempty('Адрес подразделения не может быть пустым')
		.min(3, 'Минимальная длина адреса подразделения 3 символа'),
	phones: z.array(
		z.object({
			value: z
				.string()
				.regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Формат телефона: +7 (XXX) XXX-XX-XX')
				.min(11, 'Минимальная длина телефона 11 символов')
				.max(25, 'Максимальная длина телефона 25 символов')
		})
	),
	emails: z.array(
		z.object({
			value: z
				.email('Введите правильный формат электронной почты')
				.min(11, 'Минимальная длина электронной почты 11 символов')
				.max(100, 'Максимальная длина электронной почты 100 символов')
		})
	),
	organizationId: z.string('Код подразделения должен быть строкой').nonempty('Поле организации не может быть пустым')
})

export type TCreateSubsidiary = z.infer<typeof CreateSubsidiarySchema>
