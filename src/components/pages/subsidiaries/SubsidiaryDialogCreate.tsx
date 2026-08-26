'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDownIcon, Plus, PlusIcon, Save, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

import {
	Button,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	Textarea
} from '@/components/ui'

import { useGetOrganizations } from '@/hooks/organizations'
import { useCreateSubsidiary } from '@/hooks/subsidiaries'

import { CreateSubsidiarySchema, type TCreateSubsidiary } from '@/schemas/subsidiaries'

export function SubsidiaryDialogCreate() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isPhoneOpen, setIsPhoneOpen] = useState<boolean>(false)
	const [isEmailOpen, setIsEmailOpen] = useState<boolean>(false)

	const { createSubsidiary, isCreateSubsidiaryPending } = useCreateSubsidiary()
	const { organizations } = useGetOrganizations()

	const {
		register,
		control,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<TCreateSubsidiary>({
		resolver: zodResolver(CreateSubsidiarySchema),
		defaultValues: {
			title: '',
			address: '',
			organizationId: '',
			phones: [],
			emails: []
		}
	})

	const phoneFields = useFieldArray({ control, name: 'phones' })
	const emailFields = useFieldArray({ control, name: 'emails' })

	useEffect(() => {
		if (!isOpen) reset()
	}, [reset, isOpen])

	const onHandleSubmit = async (value: TCreateSubsidiary) => {
		createSubsidiary(
			{
				title: value.title,
				address: value.address,
				organizationId: value.organizationId,
				phones: value.phones.map(p => p.value),
				emails: value.emails.map(e => e.value)
			},
			{
				onSuccess: () => {
					setIsOpen(false)
					reset()
				}
			}
		)
	}

	const handleOpenChange = (nextOpen: boolean) => {
		if (!nextOpen && isCreateSubsidiaryPending) return
		setIsOpen(nextOpen)
	}

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<div className='flex'>
				<DialogTrigger asChild>
					<Button variant='outline' className='pr-5 pl-5'>
						<Plus className='mr-2 h-4 w-4' />
						Создать подразделение
					</Button>
				</DialogTrigger>
			</div>
			<DialogContent className='sm:max-w-sm'>
				<DialogHeader>
					<DialogTitle>Добавление подразделения</DialogTitle>
					<DialogDescription>
						Вы можете добавить новое подразделение в систему. Нажмите <strong>&quot;Сохранить&quot;</strong> когда
						закончите.
					</DialogDescription>
				</DialogHeader>

				<form id='subsidiary-create-form' onSubmit={handleSubmit(onHandleSubmit)}>
					<div className='flex flex-col gap-4'>
						<FieldGroup>
							<Controller
								name='title'
								control={control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='title'>Наименование:</FieldLabel>
										<Input
											{...field}
											id='title'
											name='title'
											data-invalid={fieldState.invalid}
											placeholder='Введите наименование подразделения'
											autoComplete='off'
											disabled={isCreateSubsidiaryPending}
										/>
										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='organizationId'
								control={control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='organizationId'>Организация:</FieldLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<SelectTrigger id='organizationId' aria-invalid={fieldState.invalid} onBlur={field.onBlur}>
												<SelectValue placeholder='Выбирете организацию' />
											</SelectTrigger>

											<SelectContent>
												<SelectGroup>
													<SelectLabel>Организация:</SelectLabel>
													<SelectItem value={''} key={0}>
														Выбирете организацию
													</SelectItem>
													{organizations &&
														organizations.map(o => (
															<SelectItem value={o.id} key={o.id}>
																{o.shortTitle}
															</SelectItem>
														))}
												</SelectGroup>
											</SelectContent>
										</Select>

										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldGroup>
							<Controller
								name='address'
								control={control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor='address'>Адрес:</FieldLabel>
										<Textarea {...field} id='address' name='address' placeholder='Введите адрес подразделения' />

										{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
									</Field>
								)}
							/>
						</FieldGroup>
						<FieldSet className='gap-4'>
							<Collapsible open={isPhoneOpen} onOpenChange={setIsPhoneOpen}>
								<CollapsibleTrigger asChild>
									<Button variant='link' className='flex w-full items-center justify-between pr-0 pl-0 text-left'>
										<FieldLegend variant='label' className='mb-0'>
											Телефоны
											{phoneFields.fields.length > 0 && (
												<span className='font-normal text-muted-foreground'> ({phoneFields.fields.length})</span>
											)}
										</FieldLegend>
										<ChevronDownIcon
											className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
												isPhoneOpen ? 'rotate-180' : ''
											}`}
										/>
									</Button>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<FieldGroup className='gap-3'>
										{phoneFields.fields.map((field, index) => (
											<Controller
												key={field.id}
												name={`phones.${index}.value` as const}
												control={control}
												render={({ field: controllerField, fieldState }) => (
													<Field orientation='horizontal' data-invalid={fieldState.invalid}>
														<FieldContent>
															<InputGroup>
																{phoneFields.fields.length > 0 && (
																	<>
																		<InputGroupInput
																			{...controllerField}
																			id={`subsidiary-phone-${index}`}
																			aria-invalid={fieldState.invalid}
																			placeholder='+7 (999) 123-45-67'
																		/>
																		<InputGroupAddon align='inline-end'>
																			<InputGroupButton
																				type='button'
																				variant='ghost'
																				size='icon-xs'
																				onClick={() => phoneFields.remove(index)}
																				aria-label={`Удалить телефон ${index + 1}`}
																			>
																				<XIcon />
																			</InputGroupButton>
																		</InputGroupAddon>
																	</>
																)}
															</InputGroup>

															{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
														</FieldContent>
													</Field>
												)}
											/>
										))}
									</FieldGroup>

									<div className='mt-3 flex w-full items-center justify-center'>
										<Button
											type='button'
											className='w-full'
											variant='outline'
											size='sm'
											onClick={() => phoneFields.append({ value: '' })}
										>
											<PlusIcon /> Добавить телефон
										</Button>
									</div>
									{errors.phones?.root && <FieldError errors={[errors.phones.root]} />}
								</CollapsibleContent>
							</Collapsible>
						</FieldSet>
						<FieldSet className='gap-4'>
							<Collapsible open={isEmailOpen} onOpenChange={setIsEmailOpen}>
								<CollapsibleTrigger asChild>
									<Button variant='link' className='flex w-full items-center justify-between pr-0 pl-0 text-left'>
										<FieldLegend variant='label' className='mb-0'>
											Электронная почта
											{emailFields.fields.length > 0 && (
												<span className='font-normal text-muted-foreground'> ({emailFields.fields.length})</span>
											)}
										</FieldLegend>
										<ChevronDownIcon
											className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
												isEmailOpen ? 'rotate-180' : ''
											}`}
										/>
									</Button>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<FieldGroup className='gap-3'>
										{emailFields.fields.map((field, index) => (
											<Controller
												key={field.id}
												name={`emails.${index}.value` as const}
												control={control}
												render={({ field: controllerField, fieldState }) => (
													<Field orientation='horizontal' data-invalid={fieldState.invalid}>
														<FieldContent>
															<InputGroup>
																{emailFields.fields.length > 0 && (
																	<>
																		<InputGroupInput
																			{...controllerField}
																			id={`subsidiary-email-${index}`}
																			aria-invalid={fieldState.invalid}
																			placeholder='example@mail.ru'
																			type='email'
																		/>
																		<InputGroupAddon align='inline-end'>
																			<InputGroupButton
																				type='button'
																				variant='ghost'
																				size='icon-xs'
																				onClick={() => emailFields.remove(index)}
																				aria-label={`Удалить email ${index + 1}`}
																			>
																				<XIcon />
																			</InputGroupButton>
																		</InputGroupAddon>
																	</>
																)}
															</InputGroup>

															{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
														</FieldContent>
													</Field>
												)}
											/>
										))}
									</FieldGroup>

									<div className='mt-3 flex w-full items-center justify-center'>
										<Button
											type='button'
											className='w-full'
											variant='outline'
											size='sm'
											onClick={() => emailFields.append({ value: '' })}
										>
											<PlusIcon /> Добавить электронную почту
										</Button>
									</div>
									{errors.emails?.root && <FieldError errors={[errors.emails.root]} />}
								</CollapsibleContent>
							</Collapsible>
						</FieldSet>
					</div>
				</form>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant='destructive' className='pr-5 pl-5' disabled={isCreateSubsidiaryPending}>
							<XIcon /> Отмена
						</Button>
					</DialogClose>
					<Button
						type='submit'
						form='subsidiary-create-form'
						disabled={isCreateSubsidiaryPending}
						className='pr-5 pl-5'
					>
						<Save /> {isCreateSubsidiaryPending ? 'Сохранение...' : 'Сохранить'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
