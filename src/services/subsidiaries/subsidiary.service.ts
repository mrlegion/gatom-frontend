import API_URI from '@/config/api.config'

import { axiosClassic, axiosWithAuth } from '@/api'
import type { TConnectSubsidiary } from '@/schemas/subsidiaries'
import type {
	TAllSubsidiariesResponse,
	TConnectSubsidiaryResponse,
	TCreateSubsidiary,
	TCreateSubsidiaryResponse,
	TDeleteSubsidiaryResponse,
	TSubsidiaryFindByOrganizationResponse,
	TSubsidiaryFindByResponse,
	TSubsidiaryResponse,
	TUpdateSubsidiary,
	TUpdateSubsidiaryResponse
} from '@/types/subsidiaries'

class SubsidiaryService {
	/**
	 * Получение всех записей подразделений
	 *
	 * @returns Массив объектов подразделений
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async getAll() {
		const { data } = await axiosClassic<TAllSubsidiariesResponse>({
			url: API_URI.subsidiaries.getAll(),
			method: 'GET'
		})

		return data?.data
	}

	/**
	 * Найти подразделение по уникальному идентификатору
	 *
	 * @param id - Уникальный идентификатор
	 * @returns Найденый объект подразделения
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async findById(id: string) {
		const { data } = await axiosClassic<TSubsidiaryFindByResponse>({
			url: API_URI.subsidiaries.findBy.id(id),
			method: 'GET'
		})

		return data?.data
	}

	/**
	 * Найти подразделение по Наименованию
	 *
	 * @param title - Наименование подразделения
	 * @returns Найденый объект подразделения
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async findByTitle(title: string) {
		const { data } = await axiosClassic<TSubsidiaryFindByResponse>({
			url: API_URI.subsidiaries.findBy.title(title),
			method: 'GET'
		})

		return data?.data
	}

	/**
	 * Найти все подразделения организации
	 *
	 * @param organizationId - Уникальный идентификатор организации
	 * @returns Массив объектов подразделения
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async findByOrganization(organizationId: string) {
		const { data } = await axiosClassic<TSubsidiaryFindByOrganizationResponse>({
			url: API_URI.subsidiaries.findBy.organization(organizationId),
			method: 'GET'
		})

		return data?.data
	}

	/**
	 * Создание новой записи подразделения
	 *
	 * @param data - Данные для создания записи подразделения
	 * @returns Созданный объект подразделения
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async create(data: TCreateSubsidiary) {
		const { data: response } = await axiosWithAuth<TCreateSubsidiaryResponse>({
			url: API_URI.subsidiaries.create(),
			method: 'POST',
			data
		})

		return response?.data
	}

	/**
	 * Обновление подразделения (PUT)
	 *
	 * Ожидает все редактируемые поля подразделения
	 *
	 * @param id - Уникальный идентификатор подразделения
	 * @param data - Данные для обновления подразделения
	 * @returns Обновлёные данные подразделения
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async update(id: string, data: TUpdateSubsidiary) {
		const { data: response } = await axiosWithAuth<TUpdateSubsidiaryResponse>({
			url: API_URI.subsidiaries.update(id),
			method: 'PUT',
			data
		})

		return response?.data
	}

	/**
	 * Удалить запись подразделения
	 *
	 * @param id - Уникальный идентификатор подразделения
	 * @returns Результат удаления записи подразделения
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async delete(id: string) {
		const { data: response } = await axiosWithAuth<TDeleteSubsidiaryResponse>({
			url: API_URI.subsidiaries.delete(id),
			method: 'DELETE'
		})

		return response?.data
	}

	/**
	 * Подключение подразделения к организации (PATCH)
	 *
	 * Ожидается объект с уникальным идентификатором организации
	 *
	 * @param id - Уникальный идентификатор подразделения
	 * @param data - Данные с уникальным идентификатором организации
	 * @returns Результат объединения подразделения и организации
	 * @throws {AxiosError} Если запрос завершился ошибкой
	 */
	public async connect(id: string, data: TConnectSubsidiary) {
		const { data: response } = await axiosWithAuth<TConnectSubsidiaryResponse>({
			url: API_URI.subsidiaries.connect(id),
			method: 'PATCH',
			params: {
				organizationId: data.organizationId
			}
		})

		return response?.result
	}
}

export const subsidiaryService = new SubsidiaryService()
