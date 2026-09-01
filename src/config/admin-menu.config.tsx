import { getDictionaryMenu, getNavMenu } from '@/config'
import { Menu } from '@/types/menu'

export function getAdminMenu(): Menu {
	return {
		navMenu: getNavMenu(),
		dictionaries: getDictionaryMenu()
	}
}
