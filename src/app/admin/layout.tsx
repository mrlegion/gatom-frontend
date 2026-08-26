import { PropsWithChildren } from 'react'

import { AdminSidebar, AdminSidebarContent } from '@/components/layout/admin'
import { SidebarProvider, TooltipProvider } from '@/components/ui'

import { BOProvider } from '@/providers'

export default function AdminLayout({ children }: PropsWithChildren) {
	return (
		<BOProvider>
			<SidebarProvider>
				<TooltipProvider>
					<AdminSidebar />
					<AdminSidebarContent>{children}</AdminSidebarContent>
				</TooltipProvider>
			</SidebarProvider>
		</BOProvider>
	)
}
