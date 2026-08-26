import { ArrowRight, ChevronsUpDown, Glasses, Search, SearchAlert } from 'lucide-react'
import Link from 'next/link'

import { SubsidiaryCardInfo } from '@/components/pages/organizations/SubsidiaryCardInfo'
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Separator
} from '@/components/ui'

import { useGetSubsidiariesByOrganization } from '@/hooks/subsidiaries'

import { ISubsidiary } from '@/types/subsidiaries'

interface IOrganizationSubsidiariesProps {
	organizationId: string
}
export function OrganizationSubsidiaries({ organizationId }: IOrganizationSubsidiariesProps) {
	const { subsidiaries, isSubsidiariesLoading } = useGetSubsidiariesByOrganization(organizationId)

	console.log(subsidiaries)

	return (
		<Card className='mt-5 flex shadow-none'>
			<Collapsible>
				<CardHeader>
					<CollapsibleTrigger asChild>
						<Button variant='outline' className='shadow-md'>
							<h4 className='text-sm font-semibold'>Подразделения</h4>

							<ChevronsUpDown />
							<span className='sr-only'>Передключение данных</span>
						</Button>
					</CollapsibleTrigger>
				</CardHeader>
				<CardContent>
					<CollapsibleContent>
						<div className='flex flex-col'>
							<Separator className='mt-7' />
							{(!subsidiaries || subsidiaries.length === 0) && (
								<div className='mt-10 flex flex-col items-center justify-center text-gray-400'>
									<SearchAlert className='h-15 w-15 text-gray-300' />
									<br />
									<span className='text-lg'>У Организации нет связанных подразделений</span>
								</div>
							)}
							<div className='mt-5 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
								{!!subsidiaries && subsidiaries.map(item => <SubsidiaryCardInfo key={item.id} item={item} />)}
							</div>
						</div>
					</CollapsibleContent>
				</CardContent>
			</Collapsible>
		</Card>
	)
}
