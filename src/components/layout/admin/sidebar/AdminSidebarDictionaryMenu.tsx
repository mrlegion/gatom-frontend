'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui'

import { DictionaryMenu } from '@/types/menu'

interface AdminSidebarDictionaryMenuProps {
	dictionary: DictionaryMenu
}

export function AdminSidebarDictionaryMenu({ dictionary }: AdminSidebarDictionaryMenuProps) {
	const pathname = usePathname()

	return (
		<SidebarGroup className='group-data-[collapsible=icon]:visible'>
			<SidebarGroupLabel>
				{dictionary.icon}
				{dictionary.title}
			</SidebarGroupLabel>
			<SidebarMenu>
				{dictionary.items.map(item => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton asChild isActive={pathname === item.href}>
							<Link href={item.href}>
								{item.icon && <span>{item.icon}</span>}
								{item.title && <span>{item.title}</span>}
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	)
}
