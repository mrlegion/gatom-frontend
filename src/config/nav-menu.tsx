import { HomeIcon } from 'lucide-react'

import { PUBLIC_URI } from '@/config/url.config'

export function getNavMenu() {
	return [
		{
			title: 'Главная',
			icon: <HomeIcon className='mr-2 h-4 w-4' />,
			href: PUBLIC_URI.admin.home()
		}
	]
}
