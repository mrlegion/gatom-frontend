import { ReactNode } from 'react'

export interface IMenu {
	title: string
	icon?: ReactNode
	collapsible: boolean
	items: IMenuItem[]
}

export interface IMenuItem {
	icon?: ReactNode
	title: string
	href: string
}
