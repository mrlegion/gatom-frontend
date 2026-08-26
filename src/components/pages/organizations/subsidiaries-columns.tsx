import { ColumnDef } from '@tanstack/react-table'

import { TSubsidiariesOfTheOrganizationTable } from '@/types/organizations'

export const getSubsidiariesOfTheOrganization = (): ColumnDef<TSubsidiariesOfTheOrganizationTable>[] => {
	return [
		{
			accessorKey: 'title',
			header: 'Наименование',
			cell: ({ row }) => {
				return <div className='font-semibold'>{row.getValue('title')}</div>
			}
		},
		{
			accessorKey: 'phones',
			header: 'Телефоны'
		},
		{
			accessorKey: 'emails',
			header: 'Электронные адреса'
		}
	]
}
