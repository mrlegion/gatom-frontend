'use client'

import { useEffect } from 'react'

import { useBreadcrumbOverride } from '@/hooks/breadcrumb'

interface IBreadcrumbLabelProps {
	href: string
	label: string
}

export function BreadcrumbLabel({ label, href }: IBreadcrumbLabelProps) {
	const { setOverride, clearOverride } = useBreadcrumbOverride()

	useEffect(() => {
		setOverride(href, label)
		return () => clearOverride(href)
	}, [href, label, setOverride, clearOverride])

	return null
}
