'use client'

import { Check, Copy } from 'lucide-react'
import { toast } from 'sonner'

import { Button, Input } from '@/components/ui'

import { useCopyToClipboard } from '@/hooks'

interface IInputWithCopyProps {
	id: string
	value: string
	title: string
	readonly: boolean
}

export function InputWithCopy({ id, value, readonly, title }: IInputWithCopyProps) {
	const { copy, copied } = useCopyToClipboard()

	return (
		<div className='relative'>
			<Input id={id} value={value} readOnly={readonly} className='pr-9' />
			<Button
				type='button'
				variant='ghost'
				size='icon'
				onClick={async () => {
					const success = await copy(value)
					if (success) toast.success(`${title} успешно скопирован в буфер обмена`)
				}}
				className='absolute top-0 right-0 h-full w-12 hover:bg-transparent'
				aria-label='Скопировать'
			>
				{copied ? <Check className='h-4 w-4 text-gray-600' /> : <Copy className='h-4 w-4 text-gray-400' />}
			</Button>
		</div>
	)
}
