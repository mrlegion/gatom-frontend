'use client'

import { PropsWithChildren, useCallback, useMemo, useState } from 'react'

import { BreadcrumbOverrideContext } from '@/contexts'
import type { TCrumbs } from '@/types/breadcrumb'

export function BOProvider({ children }: PropsWithChildren) {
	const [overrides, setOverrides] = useState<TCrumbs>({})

	const setOverride = useCallback((segment: string, label: string) => {
		setOverrides(prev => {
			if (prev[segment] === label) return prev
			return { ...prev, [segment]: label }
		})
	}, [])

	const clearOverride = useCallback((segment: string) => {
		setOverrides(prev => {
			const next = { ...prev }
			delete next[segment]
			return next
		})
	}, [])

	const value = useMemo(() => ({ overrides, setOverride, clearOverride }), [overrides, setOverride, clearOverride])

	return <BreadcrumbOverrideContext value={value}>{children}</BreadcrumbOverrideContext>
}
