export interface IPosition {
	id: string
	title: string
	isNonActive: boolean
	createdAt: string
	updatedAt: string
}

export interface IPositionWithEmployee extends IPosition {
	employees: string[]
}

export type TPositionTable = {
	id: string
	title: string
	deactivated: boolean
	createdAt: string
	updatedAt: string
}

export interface IPositionCreate {
	title: string
}

export interface IPositonResponse {
	success: boolean
	position: IPosition
}

export type TPositionUpdate = Pick<IPosition, 'title' | 'isNonActive'>
