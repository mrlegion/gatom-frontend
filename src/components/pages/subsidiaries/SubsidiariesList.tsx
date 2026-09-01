'use client'

import { Plus } from 'lucide-react'

import { DataTable } from '@/components/data-table'
import { getSubsidiaryColumns, SubsidiaryEditValues } from '@/components/pages/subsidiaries/columns'
import { SubsidiaryDialogForm } from '@/components/pages/subsidiaries/SubsidiaryDialogForm'
import { ButtonDialogTrigger } from '@/components/ui'

import { useCreateSubsidiary, useGetAllSubsidiaries, useUpdateSubsidiary } from '@/hooks/subsidiaries'
import { useDeleteSubsidiary } from '@/hooks/subsidiaries/useDeleteSubsidiary'

import { SubsidiaryFormValue } from '@/schemas/subsidiaries'

export function SubsidiariesList() {
	const { deleteSubsidiary } = useDeleteSubsidiary()
	const { createSubsidiary, isCreateSubsidiaryPending } = useCreateSubsidiary()

	const { updateSubsidiary, isUpdateSubsidiaryPending } = useUpdateSubsidiary()
	const onHandlerEdit = async ({ id, values }: SubsidiaryEditValues) => {
		await updateSubsidiary({
			id,
			data: {
				title: values.title,
				address: values.address,
				organizationId: values.organizationId,
				phones: values.phones.map(p => p.value),
				emails: values.emails.map(e => e.value)
			}
		})
	}

	const columns = getSubsidiaryColumns({
		onDelete: deleteSubsidiary,
		onEdit: onHandlerEdit,
		isEditPending: isUpdateSubsidiaryPending
	})

	const { subsidiaries } = useGetAllSubsidiaries()

	const onHandleCreate = async (values: SubsidiaryFormValue) => {
		await createSubsidiary({
			title: values.title,
			address: values.address,
			organizationId: values.organizationId,
			phones: values.phones.map(p => p.value),
			emails: values.emails.map(e => e.value)
		})
	}

	return (
		<>
			<SubsidiaryDialogForm
				mode='create'
				onSubmit={onHandleCreate}
				isPending={isCreateSubsidiaryPending}
				dialogTrigger={
					<ButtonDialogTrigger
						title='Создание подразделения'
						variant='outline'
						icon={<Plus className='mr-2 h-4 w-4' />}
					/>
				}
			/>
			<DataTable columns={columns} data={subsidiaries ?? []} />
		</>
	)
}
