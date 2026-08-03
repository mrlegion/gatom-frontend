'use client'

import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '@/components/ui'

import { useBreadcrumbOverride } from '@/hooks/breadcrumb'

import { PATH_LABELS } from '@/config'

export interface IBreadcrumbItem {
	title?: string
	href?: string
}

export function SidebarBreadcrumb() {
	const pathname = usePathname()
	const { overrides } = useBreadcrumbOverride()
	const segments = pathname.split('/').filter(Boolean)

	const crumbs = segments.map((segment, i) => {
		const href = '/' + segments.slice(0, i + 1).join('/')
		const title = overrides[href] ?? PATH_LABELS[segment] ?? decodeURIComponent(segment)
		console.log('href: ', href)
		console.log('overrides: ', overrides)
		return { title, href }
	})

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{crumbs.map((item, index) => {
					if (index >= crumbs.length - 1 && item.title) {
						return (
							<BreadcrumbItem key={item.href}>
								<BreadcrumbPage>{item.title}</BreadcrumbPage>
							</BreadcrumbItem>
						)
					}

					if (item.title && item.href) {
						return (
							<Fragment key={item.href}>
								<BreadcrumbItem className='hidden md:block'>
									<BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className='hidden md:block' />
							</Fragment>
						)
					}

					return null
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
