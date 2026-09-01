import { Building, Factory, GitBranch, SquareUser, TableProperties } from 'lucide-react'

import { PUBLIC_URI } from '@/config/url.config'

export function getDictionaryMenu() {
	return {
		title: 'Справочники',
		items: [
			{
				icon: <GitBranch className='mr-2 h-4 w-4' />,
				title: 'Должности',
				href: PUBLIC_URI.admin.dictionaries.positions.list()
			},
			{
				icon: <Building className='mr-2 h-4 w-4' />,
				title: 'Организации',
				href: PUBLIC_URI.admin.dictionaries.organizations.list()
			},
			{
				icon: <Factory className='mr-2 h-4 w-4' />,
				title: 'Подразделения',
				href: PUBLIC_URI.admin.dictionaries.subsidiaries.list()
			},
			{
				title: 'Пользователи',
				icon: <SquareUser className='mr-2 h-4 w-4' />,
				href: PUBLIC_URI.admin.users.list()
			}
		]
	}
}
