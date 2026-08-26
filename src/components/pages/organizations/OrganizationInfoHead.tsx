'use client'

import { Check, Copy, Edit, Trash, Trash2Icon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { BreadcrumbLabel } from '@/components/breadcrumb'
import { OrganizationUpdateDialog } from '@/components/pages/organizations/OrganizationUpdateDialog'
import {
	AlertDialogDelete,
	AlertDialogQuestion,
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Field,
	FieldGroup,
	FieldLabel,
	InputWithCopy
} from '@/components/ui'

import { useDeleteOrganization, useGetOrganizationById } from '@/hooks/organizations'

import { PUBLIC_URI } from '@/config'
import { useCopyToClipboard } from '@/hooks'
import type { IOrganization } from '@/types/organizations'

interface IOrganizationInfoHeadProps {
	id: string
}

export function OrganizationInfoHead({ id }: IOrganizationInfoHeadProps) {
	const { organization: item } = useGetOrganizationById(id)
	const { deleteOrganization, isDeleteOrganizationPending } = useDeleteOrganization()
	const { copy, copied } = useCopyToClipboard()

	const href = PUBLIC_URI.admin.dictionaries.organizations.view(id)
	const label = item ? item.shortTitle : ''

	if (!item) return null

	const onClickId = async () => {
		const success = await copy(item.id)
		if (success) toast.success('Уникальный идентификатор скопирован в буфер обмена')
	}

	return (
		<>
			<BreadcrumbLabel href={href} label={label} />

			<Card className='flex shadow-none'>
				<CardHeader>
					<CardTitle>
						<div>
							<span>{item.shortTitle}</span>
							<Button
								variant='link'
								onClick={onClickId}
								aria-label='Уникальный идентификатор'
								className='text-xs text-gray-400'
							>
								( {item.id} {copied ? <Check className='h-3 w-3 text-green-400' /> : <Copy className='h-3 w-3' />} )
							</Button>
						</div>
					</CardTitle>
					<CardDescription>{item.title}</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='inn'>ИНН:</FieldLabel>
								<InputWithCopy id='inn' value={item.inn} title='ИНН' readonly={true} />
							</Field>
						</FieldGroup>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='kpp'>КПП:</FieldLabel>
								<InputWithCopy id='kpp' value={item.kpp} title='КПП' readonly />
							</Field>
						</FieldGroup>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='ogrn'>ОГРН:</FieldLabel>
								<InputWithCopy id='ogrn' value={item.ogrn} title='ОГРН' readonly />
							</Field>
						</FieldGroup>
						<FieldGroup className='flex-1'>
							<Field>
								<FieldLabel htmlFor='oktmo'>ОКТМО:</FieldLabel>
								<InputWithCopy id='oktmo' value={item.oktmo} title='ОКТМО' readonly />
							</Field>
						</FieldGroup>
					</div>
				</CardContent>
				<CardFooter className='mt-auto justify-between gap-3'>
					<OrganizationUpdateDialog item={item} usage='once' />
					<AlertDialogDelete id={item.id} title={item.title} onDelete={deleteOrganization} />
				</CardFooter>
			</Card>
		</>
	)
}
