'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Save, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	Input
} from '@/components/ui'

import { usePositionCreate } from '@/hooks/positions'

import { PositionCreateSchema, TPositionCreate } from '@/schemas/positions'

export function PositionCreateDialog() {
	const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
	const { createPosition } = usePositionCreate()

	const form = useForm<TPositionCreate>({
		resolver: zodResolver(PositionCreateSchema),
		defaultValues: {
			title: ''
		}
	})

	const onSubmitHandler = (data: TPositionCreate) => {
		try {
			createPosition(data)
			setIsOpenDialog(false)
			form.reset()
		} catch {}
	}

	return (
		<Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
			<DialogTrigger asChild>
				<Button variant='outline' className='mb-5'>
					<Plus className='mr-2 h-4 w-4' /> Добавить новую должность
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-sm'>
				<DialogHeader>
					<DialogTitle>Добавление должности</DialogTitle>
					<DialogDescription>
						Вы можете добавить новую должность. Нажмите <strong>&quot;Сохранить&quot;</strong> когда закончите.
					</DialogDescription>
				</DialogHeader>

				<form id='position-create-form' onSubmit={form.handleSubmit(onSubmitHandler)}>
					<FieldGroup>
						<Controller
							name='title'
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor='title'>Наименование</FieldLabel>
									<Input
										{...field}
										id='title'
										name='title'
										data-invalid={fieldState.invalid}
										placeholder='Введите наименование должности'
										autoComplete='off'
									/>
									{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant='outline'>
							<XIcon /> Отмена
						</Button>
					</DialogClose>
					<Button type='submit' form='position-create-form'>
						<Save /> Сохранить
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
