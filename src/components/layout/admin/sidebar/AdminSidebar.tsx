import { Atom, BookAIcon, ChevronDown, CircleUser, TrashIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps, Fragment } from 'react'
import { ReactNode } from 'react'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator
} from '@/components/ui'

import { getAdminMenu, PUBLIC_URI } from '@/config'

export function AdminSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	const menu = getAdminMenu()

	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<Link href={PUBLIC_URI.admin.home()} className='flex flex-row items-center justify-start hover:underline'>
					<Atom className='ml-1 h-7 w-7' />
				</Link>
			</SidebarHeader>
			<SidebarContent>
				{menu.map(m => {
					return (
						<Fragment key={m.title}>
							<SidebarSeparator />

							{m.collapsible && (
								<Collapsible defaultOpen className='group/collapsible'>
									<SidebarGroup>
										<SidebarGroupLabel asChild>
											<CollapsibleTrigger>
												{m.icon && m.icon}
												{m.title}
												<ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
											</CollapsibleTrigger>
										</SidebarGroupLabel>
										<CollapsibleContent>
											<SidebarMenu>
												{m.items &&
													m.items.map(item => {
														return (
															<SidebarMenuItem key={item.title}>
																<SidebarMenuButton asChild>
																	<Link href={item.href}>
																		{item.icon}
																		{item.title}
																	</Link>
																</SidebarMenuButton>
															</SidebarMenuItem>
														)
													})}
											</SidebarMenu>
										</CollapsibleContent>
									</SidebarGroup>
								</Collapsible>
							)}
						</Fragment>
					)
				})}
			</SidebarContent>
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	)
}
