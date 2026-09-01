export interface ISubsidiary {
	id: string
	title: string
	address: string
	phones: string[]
	emails: string[]
	organizationId: string
	createdAt: string
	updatedAt: string
}

/**
 * Подразделение включенное в организацию
 */
export type TSubsidiaryInclude = Omit<ISubsidiary, 'createdAt' | 'updatedAt' | 'organizationId'>

/**
 * Уникальный номер организации для подключения подразделения
 */
export type TConnectOrganization = Pick<ISubsidiary, 'organizationId'>

/**
 * Данные для создания подразделения
 */
export type TCreateSubsidiary = Omit<ISubsidiary, 'id' | 'createdAt' | 'updatedAt'>

/**
 * Данные для обновления подразделения
 */
export type TUpdateSubsidiary = TCreateSubsidiary

/**
 * Ответ для подключения подразделения к организации
 */
export type TConnectSubsidiaryToOrganizationResponse = {
	result: boolean
}

/**
 * Ответ по данным организации
 */
export type TSubsidiaryResponse = Omit<ISubsidiary, 'createdAt' | 'updatedAt'>

/**
 * Ответ обновления записи
 */
export type TUpdateSubsidiaryResponse = {
	data: TSubsidiaryResponse
}

/**
 * Ответ создания записи подразделения
 */
export type TCreateSubsidiaryResponse = {
	data: TSubsidiaryResponse
}

/**
 * Ответ о соединения организации и подразделения
 */
export type TConnectSubsidiaryResponse = {
	result: boolean
}

/**
 * Ответ удаления подразделения
 */
export type TDeleteSubsidiaryResponse = {
	data: boolean
}

/**
 * Ответ поиска подразделения по данным
 */
export type TSubsidiaryFindByResponse = {
	data: TSubsidiaryResponse | TSubsidiaryResponse[] | null
}

/**
 * Ответ поиска подразделения по коду организации
 */
export type TSubsidiaryFindByOrganizationResponse = {
	data: TSubsidiaryResponse[]
}

/**
 * Ответ выбора всех данных подразделения
 */
export type TAllSubsidiariesResponse = {
	data: TSubsidiaryResponse[]
}

/**
 * Базовый интерфейс для таблицы представления списка
 */
interface ISubsidiaryTable extends Omit<ISubsidiary, 'createdAt' | 'updatedAt'> {
	organizationTitle: string
}

/**
 * Тип для таблицы представления списка
 */
export type TSubsidiaryTable = ISubsidiaryTable
