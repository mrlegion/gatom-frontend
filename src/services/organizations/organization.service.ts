import API_URI from '@/config/api.config'

import { axiosClassic, axiosWithAuth } from '@/api'
import type {
	TOrganizationCreate,
	TOrganizationCreateResponse,
	TOrganizationDeleteResponse,
	TOrganizationFindByIdsResponse,
	TOrganizationGetResponse,
	TOrganizationResponse,
	TOrganizationsListResponse,
	TOrganizationUpdate,
	TOrganizationUpdateResponse
} from '@/types/organizations'

class OrganizationService {
	public async list() {
		const response = await axiosClassic<TOrganizationsListResponse>({
			url: API_URI.organizations.getAll(),
			method: 'GET'
		})

		return response?.data?.data
	}

	public async findByIds(ids: string[]) {
		const response = await axiosClassic<TOrganizationFindByIdsResponse>({
			url: API_URI.organizations.findBy.ids(),
			method: 'POST',
			data: {
				id: ids
			}
		})

		return response ? response.data?.data : []
	}

	public async findById(id: string) {
		const response = await axiosClassic<TOrganizationGetResponse>({
			url: API_URI.organizations.findBy.id(id),
			method: 'GET'
		})

		return response?.data
	}

	public async findByTitle(title: string) {
		const response = await axiosClassic<TOrganizationGetResponse>({
			url: API_URI.organizations.findBy.title(title),
			method: 'GET'
		})

		return response?.data
	}

	public async create(data: TOrganizationCreate) {
		console.log(data)
		const response = await axiosWithAuth<TOrganizationCreateResponse>({
			url: API_URI.organizations.create(),
			method: 'POST',
			data
		})

		return response?.data
	}

	public async update(id: string, data: TOrganizationUpdate) {
		const response = await axiosWithAuth<TOrganizationUpdateResponse>({
			url: API_URI.organizations.update(id),
			method: 'PUT',
			data
		})

		return response?.data
	}

	public async delete(id: string) {
		const response = await axiosWithAuth<TOrganizationDeleteResponse>({
			url: API_URI.organizations.delete(id),
			method: 'DELETE'
		})

		return response?.data?.data
	}
}

export const organizationService = new OrganizationService()
