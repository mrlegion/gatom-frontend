'use client'

import { BreadcrumbLabel } from '@/components/breadcrumb'
import { OrganizationInfo } from '@/components/pages/organizations/OrganizationInfo'

import { useGetOrganizationById } from '@/hooks/organizations'

import { PUBLIC_URI } from '@/config'

interface IOrganizationViewProps {
	id: string
}

export function OrganizationView({ id }: IOrganizationViewProps) {
	return <OrganizationInfo id={id} />
}
