import { OrganizationFormView, SubsidiariesTableInOrganization } from '@/components/pages/organizations'
import {
	Button,
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Separator
} from '@/components/ui'

import type { TOrganizationTable } from '@/types/organizations'

interface IOrganizationDrawerViewProps {
	item: TOrganizationTable
}

export function OrganizationDrawerView({ item }: IOrganizationDrawerViewProps) {
	return (
		<Drawer direction='top'>
			<DrawerTrigger asChild>
				<Button variant='link' className='w-fit px-0 text-left text-foreground'>
					{item.title}
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className='gap-1'>
					<DrawerTitle className='text-lg'>{item.shortTitle}</DrawerTitle>
					<DrawerDescription>{item.title}</DrawerDescription>
					<OrganizationFormView item={item} />
					<Separator />
					<SubsidiariesTableInOrganization organizationId={item.id} organizationTitle={item.shortTitle} />
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	)
}
