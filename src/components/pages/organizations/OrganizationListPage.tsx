'use client'

import { DataTable } from '@/components/data-table'
import { getOrganizationColumn } from '@/components/pages/organizations/columns'
import { OrganizationCreateDialog } from '@/components/pages/organizations/OrganizationCreateDialog'

import { useDeleteOrganization, useGetOrganizations } from '@/hooks/organizations'

import { TOrganizationTable } from '@/types/organizations'

export function OrganizationListPage() {
	const { organizations } = useGetOrganizations()
	const organizationTable = organizations ? organizations.map((o): TOrganizationTable => o) : []

	const { deleteOrganization } = useDeleteOrganization()
	const onDelete = (id: string) => deleteOrganization(id)

	const columns = getOrganizationColumn({ onDelete })

	return (
		<>
			<OrganizationCreateDialog />
			<DataTable columns={columns} data={organizationTable} />
		</>
	)
}
