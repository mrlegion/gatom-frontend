import Link from 'next/link'

import { BreadcrumbLabel } from '@/components/breadcrumb'

import { PUBLIC_URI } from '@/config'
import { users } from '@/example'

interface IUserPageProps {
	params: Promise<{ id: string }>
}

export default async function Page({ params }: IUserPageProps) {
	const { id } = await params
	const href = PUBLIC_URI.admin.users.view(id)
	const label = users.filter(user => user.id === id)[0].username

	return (
		<>
			<BreadcrumbLabel href={href} label={label} />
			<div>Просмотр пользователя userId: {id}.</div>
			<div>Имя пользователя: {label}</div>
			<Link href={PUBLIC_URI.admin.users.edit(id)} className='hover:underline'>
				Редактировать
			</Link>
		</>
	)
}
