import API_URI from '@/config/api.config'

import { axiosWithAuth } from '@/api'
import type { IPosition, IPositionCreate, IPositonResponse, TPositionUpdate } from '@/types/positions'

class PositionService {
	public async getAll() {
		const response = await axiosWithAuth<IPosition[]>({
			url: API_URI.positions.getAll(),
			method: 'GET'
		})

		return response?.data || []
	}

	public async findById(id: string) {
		const { data } = await axiosWithAuth<IPosition | null>({
			url: API_URI.positions.findBy.id(id),
			method: 'GET'
		})

		return data
	}

	public async create(data: IPositionCreate) {
		const { data: response } = await axiosWithAuth<IPositonResponse>({
			url: API_URI.positions.create(),
			method: 'POST',
			data
		})

		return response
	}

	public async update(id: string, data: TPositionUpdate) {
		const { data: response } = await axiosWithAuth<IPositonResponse>({
			url: API_URI.positions.update(id),
			method: 'PUT',
			data
		})

		return response
	}

	public async delete(id: string) {
		const { data } = await axiosWithAuth<boolean>({
			url: API_URI.positions.delete(id),
			method: 'DELETE'
		})

		return data
	}
}

export const positionService = new PositionService()
