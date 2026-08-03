'use client'

import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Button, Field, FieldGroup, FieldLabel, Input } from '@/components/ui'

import { useLogin } from '@/hooks/auth/useLogin'

import styles from './LoginForm.module.css'
import { PUBLIC_URI } from '@/config'
import type { ILoginForm } from '@/types/auth'

export function LoginForm() {
	const { login, isLoginLoading } = useLogin()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<ILoginForm>({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = (data: ILoginForm) => login(data)

	return (
		<form id='login-form' onSubmit={handleSubmit(onSubmit)} className='p-6 md:p-8'>
			<FieldGroup>
				<div className='flex flex-col items-center gap-2 text-center'>
					<h1 className='text-2xl font-bold'>С возвращением</h1>
					<p className='text-balance text-muted-foreground'>
						Войдите в свой{' '}
						<Link href={PUBLIC_URI.home()}>
							<b>GATOM</b>
						</Link>{' '}
						аккаунт
					</p>
				</div>
				<Field>
					<FieldLabel htmlFor='email'>Электронная почта:</FieldLabel>
					<Input
						{...register('email', {
							required: 'Заполните обязательное поле "Электронная почта"'
						})}
						id='email'
						type='email'
						aria-label=''
						placeholder='ivivivanov@greenatom.ru'
						className={errors.password ? 'border-red-500' : ''}
					/>
					{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
				</Field>
				<Field>
					<div className='flex items-center'>
						<FieldLabel htmlFor='password'>Пароль:</FieldLabel>
						<Link href='#' className='ml-auto text-xs text-gray-400 underline-offset-2 hover:underline'>
							Забыли пароль?
						</Link>
					</div>
					<Input
						{...register('password', {
							required: 'Заполните обязательное поле "Пароль"'
						})}
						id='password'
						type='password'
						aria-label=''
						className={errors.password ? 'border-red-500' : ''}
					/>
					{errors.password && <p className='text-red-500'>{errors.password.message}</p>}
				</Field>
				<Field>
					<Button type='submit' disabled={isSubmitting || isLoginLoading}>
						{isLoginLoading || isSubmitting ? (
							<>
								<LoaderCircle className={styles['loader-icon']} />{' '}
								<span className={styles['loader-text']}>Загрузка</span>
								<span className={styles['loader-dots']}></span>
							</>
						) : (
							'Вход в систему'
						)}
					</Button>
				</Field>
			</FieldGroup>
		</form>
	)
}
