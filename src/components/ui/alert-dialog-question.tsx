import { MouseEventHandler, ReactNode } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'

interface IAlertDialogQuestionProps {
	media?: {
		icon: ReactNode
		className?: string
	}
	trigger: ReactNode
	title: string
	description?: string | ReactNode
	btnCancelLabel: string
	accept: {
		label: string
		variant?: 'link' | 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | null | undefined
		action: MouseEventHandler<HTMLButtonElement>
	}
}

export function AlertDialogQuestion({
	media,
	title,
	trigger,
	description,
	btnCancelLabel,
	accept
}: IAlertDialogQuestionProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
			<AlertDialogContent size='sm'>
				<AlertDialogHeader>
					{media && (
						<AlertDialogMedia className={media.className ? media.className : ''}>{media.icon}</AlertDialogMedia>
					)}
					<AlertDialogTitle>{title}</AlertDialogTitle>
					{description && <AlertDialogDescription>{description}</AlertDialogDescription>}
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel variant='outline'>{btnCancelLabel}</AlertDialogCancel>
					<AlertDialogAction variant={accept.variant ? accept.variant : 'destructive'} onClick={accept.action}>
						{accept.label}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
