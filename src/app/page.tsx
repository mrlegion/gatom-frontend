import { ArrowRight, Building, Factory, GitBranch, Home, LogIn } from 'lucide-react'
import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components/ui'

import { PUBLIC_URI } from '@/config'

export default function Page() {
	return (
		<div className='ml-[255px] flex flex-col p-4'>
			<Card>
				<CardHeader>
					<CardTitle>Основные функции:</CardTitle>
					<CardDescription>На этой странице описаны переходы на основные разделы сайта</CardDescription>
				</CardHeader>
				<Separator />
				<CardContent>
					<div className='flex flex-col gap-5'>
						<div className='flex flex-col gap-1'>
							<div className='text-base font-medium'>Вход / Регистрация:</div>
							<Link href={PUBLIC_URI.auth.login()} className='flex items-center gap-1'>
								<LogIn className='h-4 w-4' /> Вход в систему
							</Link>
						</div>
						<div className='flex flex-col gap-1'>
							<div className='text-base font-medium'>Админ панель:</div>
							<Link href={PUBLIC_URI.admin.home()} className='flex items-center gap-1'>
								<Home className='h-4 w-4' /> Основная страница
							</Link>
							<Link href={PUBLIC_URI.admin.dictionaries.organizations.list()} className='flex items-center gap-1'>
								<Building className='h-4 w-4' /> Справочники/Организации
							</Link>
							<Link href={PUBLIC_URI.admin.dictionaries.subsidiaries.list()} className='flex items-center gap-1'>
								<Factory className='h-4 w-4' /> Справочники/Подразделения
							</Link>
							<Link href={PUBLIC_URI.admin.dictionaries.positions.list()} className='flex items-center gap-1'>
								<GitBranch className='h-4 w-4' /> Справочники/Должности
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
