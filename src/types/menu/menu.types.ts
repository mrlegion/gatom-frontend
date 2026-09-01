import { ReactNode } from 'react'

export interface IMenu {
	title: string
	icon?: ReactNode
	href?: string
	collapsible: boolean
	items?: IMenuItem[]
}

export interface IMenuItem {
	icon?: ReactNode
	title: string
	href: string
}

export interface DictionaryMenu {
	title: string
	icon?: ReactNode
	items: DictionaryMenuItem[]
}

export interface DictionaryMenuItem {
	title: string
	icon?: ReactNode
	href: string
}

export interface NavMenu {
	title: string
	icon?: ReactNode
	href: string
}

export interface Menu {
	navMenu: NavMenu[]
	dictionaries: DictionaryMenu
}
