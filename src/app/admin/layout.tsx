import { PropsWithChildren } from 'react'

import { AdminSidebar, AdminSidebarContent } from '@/components/layout/admin'
import { SidebarProvider } from '@/components/ui'

import { BOProvider } from '@/providers'

export default function AdminLayout({ children }: PropsWithChildren) {
	return (
		<BOProvider>
			<SidebarProvider>
				<AdminSidebar />
				<AdminSidebarContent>{children}</AdminSidebarContent>
			</SidebarProvider>
		</BOProvider>
	)
}
