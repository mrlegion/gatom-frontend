import { IUser } from '@/types/user'

export interface ILoginForm {
	email: string
	password: string
}

export interface IResponse {
	user: IUser
	accessToken: string
}

export type TLoginResponse = IResponse
export type TRefreshResponse = IResponse

export interface IChangePasswordForm {
	oldPassword: string
	newPassword: string
}
