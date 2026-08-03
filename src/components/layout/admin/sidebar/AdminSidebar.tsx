import { TrashIcon } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui'

import { PUBLIC_URI } from '@/config'

export function AdminSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<Link href={PUBLIC_URI.admin.home()} className='hover:underline'>
					<TrashIcon />
				</Link>
			</SidebarHeader>
			<SidebarContent></SidebarContent>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	)
}
