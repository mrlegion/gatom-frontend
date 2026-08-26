import type { IOrganization } from '@/types/organizations'
import type { ISubsidiary } from '@/types/subsidiaries'

export type TOrganizationTable = Omit<IOrganization, 'createdAt' | 'updatedAt'>

export type TSubsidiariesOfTheOrganizationTable = Pick<ISubsidiary, 'title' | 'phones' | 'emails'>
