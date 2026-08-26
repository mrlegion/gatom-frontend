import { OrganizationFormView } from '@/components/pages/organizations/OrganizationFormView'
import { SubsidiariesTableInOrganization } from '@/components/pages/organizations/SubsidiariesTableInOrganization'
import {
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui'

import { TOrganizationTable } from '@/types/organizations'

interface IOrganizationSheetViewProps {
	item: TOrganizationTable
}

export function OrganizationSheetView({ item }: IOrganizationSheetViewProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='link'>{item.title}</Button>
			</SheetTrigger>
			<SheetContent side='bottom'>
				<SheetHeader>
					<SheetTitle>{item.shortTitle}</SheetTitle>
					<SheetDescription>{item.title}</SheetDescription>
				</SheetHeader>
				<OrganizationFormView item={item} />
				<SubsidiariesTableInOrganization organizationId={item.id} organizationTitle={item.shortTitle} />
				<SheetFooter>
					<SheetClose asChild>
						<Button variant='outline'>Закрыть</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
