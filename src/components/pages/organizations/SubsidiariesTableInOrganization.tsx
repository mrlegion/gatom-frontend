'use client'

import { ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { DataTable, DataTableSkeleton } from '@/components/data-table'
import { getSubsidiariesOfTheOrganization } from '@/components/pages/organizations/subsidiaries-columns'
import {
	Button,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	ScrollArea,
	ScrollBar,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui'

import { useGetSubsidiariesByOrganization } from '@/hooks/subsidiaries'

import { TSubsidiariesOfTheOrganizationTable } from '@/types/organizations'
import type { TSubsidiaryResponse } from '@/types/subsidiaries'

interface ISubsidiariesTableInOrganizationProps {
	organizationId: string
	organizationTitle: string
}

export function SubsidiariesTableInOrganization({
	organizationId,
	organizationTitle
}: ISubsidiariesTableInOrganizationProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { subsidiaries, isSubsidiariesLoading } = useGetSubsidiariesByOrganization(organizationId)

	const table: TSubsidiariesOfTheOrganizationTable[] = subsidiaries
		? subsidiaries.map(s => {
				return {
					title: s.title,
					emails: s.emails,
					phones: s.phones
				}
			})
		: []

	const columns = getSubsidiariesOfTheOrganization()

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<div className='mt-7 flex justify-center align-middle'>
				<CollapsibleTrigger asChild>
					<Button variant='outline'>
						<h4 className='text-sm font-semibold'>Подразделения</h4>

						<ChevronsUpDown />
						<span className='sr-only'>Передключение данных</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent>
				<ScrollArea>
					<div className='mt-5 flex max-h-[500px] flex-col p-5'>
						{isSubsidiariesLoading ? <DataTableSkeleton rows={5} /> : <DataTable columns={columns} data={table} />}
					</div>
				</ScrollArea>
			</CollapsibleContent>
		</Collapsible>
	)
}
