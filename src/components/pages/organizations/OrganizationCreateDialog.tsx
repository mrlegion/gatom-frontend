'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, Save, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
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

import { useCreateOrganization } from '@/hooks/organizations'

import { OrganizationCreateSchema, TOrganizationCreateFormValue } from '@/schemas/organizations'

export function OrganizationCreateDialog() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { createOrganization, isCreateOrganizationPending } = useCreateOrganization()

	const form = useForm<TOrganizationCreateFormValue>({
		resolver: zodResolver(OrganizationCreateSchema),
		defaultValues: {
			title: '',
			shortTitle: '',
			ogrn: '',
			inn: '',
			kpp: '',
			oktmo: ''
		}
	})

	useEffect(() => {
		if (!isOpen) form.reset()
	}, [form, isOpen])

	const onSubmit = async (values: TOrganizationCreateFormValue) => {
		createOrganization(values, {
			onSuccess: () => {
				setIsOpen(false)
				form.reset()
			}
		})
	}

	const handleOpenChange = (nextOpen: boolean) => {
		if (!nextOpen && isCreateOrganizationPending) return
		setIsOpen(nextOpen)
	}

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<div className='flex'>
				<DialogTrigger asChild>
					<Button variant='outline' className='pr-5 pl-5'>
						<Plus className='mr-2 h-4 w-4' />
						Создать организацию
					</Button>
				</DialogTrigger>
			</div>
			<DialogContent className='sm:max-w-sm'>
				<DialogHeader>
					<DialogTitle>Добавление организации</DialogTitle>
					<DialogDescription>
						Вы можете добавить новую организацию в систему. Нажмите <strong>&quot;Сохранить&quot;</strong> когда
						закончите.
					</DialogDescription>
				</DialogHeader>

				<form id='organization-create-form' onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-5'>
						<FieldGroup>
							<Controller
								name='title'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='title'>Наименование:</FieldLabel>
										<Input
											{...field}
											id='title'
											name='title'
											data-invalid={fieldState.invalid}
											placeholder='Введите наименование организации'
											autoComplete='off'
											disabled={isCreateOrganizationPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='shortTitle'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='shortTitle'>Краткое наименование:</FieldLabel>
										<Input
											{...field}
											id='shortTitle'
											name='shortTitle'
											data-invalid={fieldState.invalid}
											placeholder='Введите краткое наименование организации'
											autoComplete='off'
											disabled={isCreateOrganizationPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='inn'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='inn'>ИНН:</FieldLabel>
										<Input
											{...field}
											id='inn'
											name='inn'
											data-invalid={fieldState.invalid}
											placeholder='Введите номер ИНН организации'
											autoComplete='off'
											disabled={isCreateOrganizationPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='kpp'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='kpp'>КПП:</FieldLabel>
										<Input
											{...field}
											id='kpp'
											name='kpp'
											data-invalid={fieldState.invalid}
											placeholder='Введите номер КПП организации'
											autoComplete='off'
											disabled={isCreateOrganizationPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='ogrn'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='ogrn'>ОГРН:</FieldLabel>
										<Input
											{...field}
											id='ogrn'
											name='ogrn'
											data-invalid={fieldState.invalid}
											placeholder='Введите номер ОГРН организации'
											autoComplete='off'
											disabled={isCreateOrganizationPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='oktmo'
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='oktmo'>ОКТМО:</FieldLabel>
										<Input
											{...field}
											id='oktmo'
											name='oktmo'
											data-invalid={fieldState.invalid}
											placeholder='Введите номер ОКТМО организации'
											autoComplete='off'
											disabled={isCreateOrganizationPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
					</div>
				</form>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant='outline' className='pr-5 pl-5' disabled={isCreateOrganizationPending}>
							<XIcon /> Отмена
						</Button>
					</DialogClose>
					<Button
						type='submit'
						form='organization-create-form'
						disabled={isCreateOrganizationPending}
						className='pr-5 pl-5'
					>
						<Save /> {isCreateOrganizationPending ? 'Сохранение...' : 'Сохранить'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
