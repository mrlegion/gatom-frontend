import { z } from 'zod'

export const ConnectSubsidiarySchema = z.object({
	organizationId: z.string('Код подразделения должен быть строкой').nonempty('Поле организации не может быть пустым')
})
export type TConnectSubsidiary = z.infer<typeof ConnectSubsidiarySchema>
