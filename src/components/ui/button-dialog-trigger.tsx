import { VariantProps } from 'class-variance-authority'
import React, { forwardRef, ReactNode } from 'react'

import { Button, buttonVariants } from './button'
import { cn } from '@/utils'

interface ButtonDialogTriggerProps {
	title?: string
	icon?: ReactNode
}

export const ButtonDialogTrigger = forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'> & ButtonDialogTriggerProps & VariantProps<typeof buttonVariants>
>(function ButtonDialogTrigger({ className, title, icon, variant, ...props }, ref) {
	return (
		<Button ref={ref} variant={variant} className={cn('pr-5 pl-5', className)} {...props}>
			{icon}
			{title}
		</Button>
	)
})
