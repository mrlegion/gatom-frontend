import { PropsWithChildren } from 'react'

import { AdminSidebarHeader } from '@/components/layout/admin'
import { SidebarInset } from '@/components/ui'

export function AdminSidebarContent({ children }: PropsWithChildren) {
	return (
		<SidebarInset>
			<AdminSidebarHeader />
			<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>{children}</div>
		</SidebarInset>
	)
}
