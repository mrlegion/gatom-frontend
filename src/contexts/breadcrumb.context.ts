'use client'

import { createContext } from 'react'

import type { TCrumbs } from '@/types/breadcrumb'

export interface IOverrideContext {
	overrides: TCrumbs
	setOverride: (segment: string, label: string) => void
	clearOverride: (segment: string) => void
}

export const BreadcrumbOverrideContext = createContext<IOverrideContext | undefined>(undefined)
