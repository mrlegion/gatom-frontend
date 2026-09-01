'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui'

import { NavMenu } from '@/types/menu'

interface AdminSidebarNavMenuProps {
	items: NavMenu[]
}

export function AdminSidebarNavMenu({ items }: AdminSidebarNavMenuProps) {
	const pathname = usePathname()
	console.log('Pathname: ', pathname)
	console.log('Menu: ', items)
	return (
		<SidebarMenu>
			{items.map(item => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton asChild isActive={pathname === item.href}>
						<Link href={item.href}>
							{item.icon}
							{item.title}
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	)
}
