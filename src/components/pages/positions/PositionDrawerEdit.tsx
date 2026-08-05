'use client'

import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import {
	Button,
	Checkbox,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Field,
	FieldGroup,
	FieldLabel,
	Input,
	Switch
} from '@/components/ui'

import { usePositionUpdate } from '@/hooks/positions/usePositionUpdate'

import { TPositionTable } from '@/types/positions'

export function PositionDrawerEdit({ item }: { item: TPositionTable }) {
	const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
	const { updatePosition, isUpdatePending } = usePositionUpdate(item.id)

	const form = useForm<TPositionTable>({
		defaultValues: {
			id: item.id,
			title: item.title,
			deactivated: item.deactivated,
			createdAt: item.createdAt,
			updatedAt: item.updatedAt
		}
	})

	const onHandleSubmit: SubmitHandler<TPositionTable> = data => {
		updatePosition({
			title: data.title,
			isNonActive: data.deactivated
		})
		setIsOpenDrawer(false)
		form.reset()
	}

	return (
		<Drawer direction='right' open={isOpenDrawer} onOpenChange={setIsOpenDrawer}>
			<DrawerTrigger asChild>
				<Button variant='link' className='w-fit px-0 text-left text-foreground'>
					{item.title}
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className='gap-1'>
					<DrawerTitle className='text-lg'>{item.title}</DrawerTitle>
					<DrawerDescription>Изменение записи</DrawerDescription>
				</DrawerHeader>
				<div className='mt-5 flex flex-col gap-4 px-4 text-sm'>
					<form id='position-edit-form' onSubmit={form.handleSubmit(onHandleSubmit)} className='flex flex-col gap-4'>
						<FieldGroup>
							<Controller
								name='id'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='id'>Уникальный идентификатор</FieldLabel>
										<Input {...field} id='id' readOnly className='font-mono font-semibold text-gray-400' />
									</Field>
								)}
							/>
							<Controller
								name='title'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='title'>Наименование</FieldLabel>
										<Input {...field} id='title' className={fieldState.invalid ? 'border-red-500' : ''} aria-label='' />
									</Field>
								)}
							/>
							<Controller
								name='deactivated'
								control={form.control}
								render={({ field }) => (
									<div className='flex items-center space-x-2'>
										<Switch id='deactivated' checked={field.value} onCheckedChange={field.onChange} />
										<FieldLabel htmlFor='deactivated'>Деактивировано</FieldLabel>
									</div>
								)}
							/>
						</FieldGroup>
					</form>
				</div>
				<DrawerFooter>
					<Button type='submit' form='position-edit-form'>
						Изменить
					</Button>
					<DrawerClose asChild>
						<Button variant='outline'>Закрыть</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
