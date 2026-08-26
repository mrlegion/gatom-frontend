'use client'

import { ArrowRight, Check, ChevronsUpDown, Copy, Edit, Trash } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Field,
	FieldGroup,
	FieldLabel,
	InputWithCopy,
	Separator
} from '@/components/ui'

import { useCopyToClipboard } from '@/hooks'

const organization = {
	id: '321354695jfsdlsk32',
	title: 'Акционерное общество «Гринатом»',
	shortTitle: 'АО «Гринатом»',
	inn: '7706729736',
	kpp: '770601001',
	ogrn: '1097746819720',
	oktmo: '45384000'
}
const data = [
	{
		title: 'Филиал в г. Ангарске',
		address:
			'665814, Иркутская область, городской округ Ангарский, город Ангарск, территория Южный массив, квартал 2, строение 100',
		phones: ['+7 (3955) 54-71-56'],
		emails: ['angarsk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Владимире',
		address: '600007, г. Владимир, ул. Северная, д. 1А',
		phones: ['+7 (831) 268-15-68', '+7 (49232) 9-42-72'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Волгодонске',
		address: '191036, г. Санкт-Петербург, ул. 2-ая Советская, д. 7',
		phones: ['+7 (812) 404-50-50'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: '427622, г. Глазов, ул. Белова, 7',
		address: '427622, г. Глазов, ул. Белова, 7',
		phones: ['+7 (341) 419-63-46'],
		emails: ['Glazov@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Димитровграде',
		address: '433510, Ульяновская область г. Димитровград, Западное шоссе, 9',
		phones: ['+7 (842) 356-62-82'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Екатеринбурге',
		address: '624130, Свердловская область, г. Новоуральск, Центральный проезд, 8А, строение 21',
		phones: ['+7 (343) 709-20-42'],
		emails: ['Novouralsk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Железногорске',
		address: '662971, г. Железногорск, ул. Ленина, 39',
		phones: ['+7 (391) 699-37-37'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Заречном',
		address: '624130, Свердловская область, г. Новоуральск, Центральный проезд, 8А, строение 21',
		phones: ['+7 (343) 709-20-42'],
		emails: ['Novouralsk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Зеленогорске',
		address: '663690, Красноярский край, г. Зеленогорск, ул. Первая Промышленная, д. 1, зд. 25',
		phones: [' +7 (391) 699-43-49'],
		emails: ['zelenogorsk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Коврове',
		address: '601909, г. Ковров, ул. Социалистическая, д. 26',
		phones: ['+7 (492) 329-42-72'],
		emails: ['kovrov@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Краснокаменске',
		address: '674673, г. Краснокаменск, ул. Октябрьская, 8 здание Главного вычислительного центра',
		phones: ['+7 (302) 452-53-07'],
		emails: ['krasnokamensk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Мурманске',
		address: '183032, г. Мурманск, Кольский проспект, 10',
		phones: ['+7 (815) 255-33-01'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Нижнем Новгороде',
		address: '603074, г. Нижний Новгород, Проспект Ленина, 93',
		phones: ['+7 (831) 268-15-68'],
		emails: ['nnovgorod@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Новосибирске',
		address: '630110, г. Новосибирск, ул. Б. Хмельницкого, 94',
		phones: ['+7 (383) 274-87-27', '+7 (383) 274-82-02', '+7 (383 )274-83-74'],
		emails: ['novosibirsk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Новоуральске',
		address: '624130, Свердловская область, г. Новоуральск, Центральный проезд, 8А, строение 21',
		phones: ['+7 (343) 709-20-42'],
		emails: ['Novouralsk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Сервисный центр в г. Петрозаводске',
		address: '191036, г. Санкт-Петербург, ул. 2-ая Советская, д. 7',
		phones: ['+7 (812) 404-50-50'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Подольске',
		address: '142103, Московская область, г. Подольск, ул. Железнодорожная, д. 2',
		phones: ['+7 (495) 747-10-25'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Санкт-Петербурге',
		address: '194100, г. Санкт-Петербург, Большой Сампсониевский пр-т, д. 68Н, оф. 405',
		phones: ['+7 (812) 339-15-15, доб. 56293'],
		emails: [],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Сарове',
		address: '607328, Нижегородская область, Дивеевский район, поселок Сатис, ул. Парковая, д. 3',
		phones: ['+7 (831) 307-09-70'],
		emails: ['Sarov@Greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Северске',
		address: '636039, Томская область, г. Северск, ул. Ленина, д. 90',
		phones: ['+7 (3823) 52-45-46', '+7 (382) 352-15-30'],
		emails: ['seversk@greenatom.ru'],
		organizationId: organization.id
	},
	{
		title: 'Филиал в г. Электростали',
		address: '144001, Московская область, г. Электросталь, ул. К. Маркса, д. 12',
		phones: ['+7 (496) 577-51-54'],
		emails: [],
		organizationId: organization.id
	}
]

export default function Page() {
	const { copy, copied } = useCopyToClipboard()

	const onClickId = async () => {
		const success = await copy(organization.id)
		if (success) toast.success('Уникальный идентификатор скопирован в буфер обмена')
	}

	return (
		<div className='ml-[255px] flex flex-col p-4'>
			<Card className='flex shadow-none'>
				<CardHeader>
					<CardTitle>
						<div>
							<span>{organization.shortTitle}</span>
							<Button
								variant='link'
								onClick={onClickId}
								aria-label='Уникальный идентификатор'
								className='text-xs text-gray-400'
							>
								( {organization.id}{' '}
								{copied ? <Check className='h-3 w-3 text-green-400' /> : <Copy className='h-3 w-3' />} )
							</Button>
						</div>
					</CardTitle>
					<CardDescription>{organization.title}</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='inn'>ИНН:</FieldLabel>
								{/*<Input id='inn' value={organization.inn} readOnly />*/}
								<InputWithCopy id='inn' value={organization.inn} title='ИНН' readonly={true} />
							</Field>
						</FieldGroup>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='kpp'>КПП:</FieldLabel>
								<InputWithCopy id='kpp' value={organization.kpp} title='КПП' readonly />
							</Field>
						</FieldGroup>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='ogrn'>ОГРН:</FieldLabel>
								<InputWithCopy id='ogrn' value={organization.ogrn} title='ОГРН' readonly />
							</Field>
						</FieldGroup>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='oktmo'>ОКТМО:</FieldLabel>
								<InputWithCopy id='oktmo' value={organization.oktmo} title='ОКТМО' readonly />
							</Field>
						</FieldGroup>
					</div>
				</CardContent>

				<CardFooter className='mt-auto justify-between gap-3'>
					<Button variant='ghost'>
						<Edit /> Редактировать
					</Button>
					<Button variant='destructive'>
						<Trash /> Удалить
					</Button>
				</CardFooter>
			</Card>

			<Card className='mt-5 flex shadow-none'>
				<Collapsible>
					<CardHeader>
						<CollapsibleTrigger asChild>
							<Button variant='outline' className='shadow-md'>
								<h4 className='text-sm font-semibold'>Подразделения</h4>

								<ChevronsUpDown />
								<span className='sr-only'>Передключение данных</span>
							</Button>
						</CollapsibleTrigger>
					</CardHeader>
					<CardContent>
						<CollapsibleContent>
							<div className='flex flex-col'>
								<Separator className='mt-7' />
								<div className='mt-5 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
									{data.map(item => {
										return (
											<Card key={item.title} className='flex-1 shadow-sm'>
												<CardHeader>
													<CardTitle>
														<Link href='#'>{item.title}</Link>
													</CardTitle>
													<CardDescription>{item.address}</CardDescription>
												</CardHeader>
												<CardFooter className='mt-auto items-end justify-end'>
													<Button variant='link'>
														Подробнее <ArrowRight className='' />
													</Button>
												</CardFooter>
											</Card>
										)
									})}
								</div>
							</div>
						</CollapsibleContent>
					</CardContent>
				</Collapsible>
			</Card>
		</div>
	)
}
