export interface IUser {
	id: string
	email: string
	passwordChangeAt: string
	isActive: boolean
	isInitial: boolean
	isUserTwoFactor: boolean
}

export type TUserTable = {
	id: string
	email: string
	username: string
	passwordChangeAt: string
	inactive: 'active' | 'inactive'
	initial: 'is initial' | 'active'
	usedTwoFactor: boolean
}
