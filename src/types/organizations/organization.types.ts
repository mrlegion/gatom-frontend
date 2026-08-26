import { TSubsidiaryInclude } from '@/types/subsidiaries'

export interface IOrganization {
	id: string
	title: string
	shortTitle: string
	ogrn: string
	inn: string
	kpp: string
	oktmo: string
	createdAt: string
	updatedAt: string
}

export interface IOrganizationWithSubsidiaries extends IOrganization {
	subsidiaries: TSubsidiaryInclude[]
}

export type TOrganizationResponse = Omit<IOrganization, 'createdAt' | 'updatedAt'>

export type TOrganizationCreate = Omit<IOrganization, 'id' | 'createdAt' | 'updatedAt'> | null

export type TOrganizationUpdate = TOrganizationCreate

export type TOrganizationsListResponse = {
	data: TOrganizationResponse[] | null
}

export type TOrganizationFindByIdsResponse = {
	data: TOrganizationResponse[] | []
}

export type TOrganizationCreateResponse = {
	data: TOrganizationResponse | null
}

export type TOrganizationUpdateResponse = {
	data: TOrganizationResponse | null
	success: boolean
}

export type TOrganizationDeleteResponse = {
	data: boolean
}

export type TOrganizationGetResponse = {
	data: IOrganizationWithSubsidiaries | null
}

export type TOrganizationsGetResponse = {
	data: IOrganizationWithSubsidiaries[] | null
}
