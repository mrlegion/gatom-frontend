import { Atom } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps } from 'react'

import { AdminSidebarDictionaryMenu, AdminSidebarNavMenu } from '@/components/layout/admin'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui'

import { getAdminMenu, PUBLIC_URI } from '@/config'

export function AdminSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	const menu = getAdminMenu()

	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<Link href={PUBLIC_URI.home()} className='flex flex-row items-center justify-start hover:underline'>
					<Atom className='ml-1 h-7 w-7' />
				</Link>
				<AdminSidebarNavMenu items={menu.navMenu} />
			</SidebarHeader>
			<SidebarContent>
				<AdminSidebarDictionaryMenu dictionary={menu.dictionaries} />
			</SidebarContent>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	)
}
