'use client'

import { DataTable } from '@/components/data-table'
import { getSubsidiaryColumns } from '@/components/pages/subsidiaries/columns'
import { SubsidiaryDialogCreate } from '@/components/pages/subsidiaries/SubsidiaryDialogCreate'

import { useGetAllSubsidiaries } from '@/hooks/subsidiaries'
import { useDeleteSubsidiary } from '@/hooks/subsidiaries/useDeleteSubsidiary'

export function SubsidiariesList() {
	const { deleteSubsidiary } = useDeleteSubsidiary()
	const columns = getSubsidiaryColumns({ onDelete: deleteSubsidiary })
	const { subsidiaries } = useGetAllSubsidiaries()

	return (
		<>
			<SubsidiaryDialogCreate />
			<DataTable columns={columns} data={subsidiaries ?? []} />
		</>
	)
}
