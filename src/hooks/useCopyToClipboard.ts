'use client'

import { useCallback, useState } from 'react'

export function useCopyToClipboard() {
	const [copied, setCopied] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const copy = useCallback(async (text: string) => {
		if (!navigator?.clipboard) {
			console.warn('Clipboard not supported')
			return false
		}

		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			setError(null)
			setTimeout(() => setCopied(false), 2000)
			return true
		} catch (e) {
			setError(e as Error)
			setCopied(false)
			console.error('Copy failed: ', e)
			return false
		}
	}, [])

	return { copy, copied, error }
}
