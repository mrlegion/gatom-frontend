'use client'

import { useContext } from 'react'

import { BreadcrumbOverrideContext } from '@/contexts'

export function useBreadcrumbOverride() {
	const context = useContext(BreadcrumbOverrideContext)
	if (context === undefined) {
		throw new Error('useBreadcrumbOverride должен использоваться внутри BOProvider')
	}

	return context
}
