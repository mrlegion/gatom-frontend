import { SidebarBreadcrumb } from '@/components/breadcrumb'
import { Separator, SidebarTrigger, ThemeToggle } from '@/components/ui'

export function AdminSidebarHeader() {
	return (
		<header className='flex h-16 w-full shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
			<div className='flex flex-1 items-center gap-2 px-4'>
				<SidebarTrigger className='-ml-1' />
				<Separator orientation='vertical' className='mx-2 mt-2 data-[orientation=vertical]:h-4' />
				<SidebarBreadcrumb />

				<div className='ml-auto'>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
