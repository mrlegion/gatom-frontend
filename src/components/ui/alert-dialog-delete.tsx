import { Trash2Icon } from 'lucide-react'

import { AlertDialogQuestion } from '@/components/ui/alert-dialog-question'
import { Button } from '@/components/ui/button'

interface IAlertDialogDeleteProps {
	id: string
	title: string
	onDelete: (id: string) => void
	onlyIcon?: boolean
}

export function AlertDialogDelete({ id, title, onDelete, onlyIcon = false }: IAlertDialogDeleteProps) {
	return (
		<AlertDialogQuestion
			title='Удалить запись?'
			trigger={
				<Button variant='destructive' className='pr-5 pl-5'>
					<Trash2Icon className='h-4 w-4' /> {onlyIcon ? '' : 'Удалить запись'}
				</Button>
			}
			description={
				<>
					Это действие приведет к удалению записи{' '}
					<strong>
						&quot;
						{title}
						&quot;
					</strong>{' '}
					навсегда. Продолжить?
				</>
			}
			media={{
				icon: <Trash2Icon />,
				className: 'bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive'
			}}
			btnCancelLabel='Отмена'
			accept={{
				variant: 'destructive',
				label: 'Удалить',
				action: () => onDelete(id)
			}}
		/>
	)
}
