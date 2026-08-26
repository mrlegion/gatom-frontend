import { Field, FieldGroup, FieldLabel, Input } from '@/components/ui'

import { TOrganizationTable } from '@/types/organizations'

interface IOrganizationFormViewProps {
	item: TOrganizationTable
}

export function OrganizationFormView({ item }: IOrganizationFormViewProps) {
	return (
		<div className='mt-5 flex flex-col gap-4 px-4 text-sm'>
			<FieldGroup>
				<Field>
					<FieldLabel htmlFor='id'>Уникальный идентификатор</FieldLabel>
					<Input id='id' className='font-mono' readOnly value={item.id} />
				</Field>
				<div className='flex flex-row gap-5'>
					<Field>
						<FieldLabel htmlFor='title'>Наименование</FieldLabel>
						<Input id='title' readOnly value={item.title} />
					</Field>
					<Field>
						<FieldLabel htmlFor='shortTitle'>Краткое наименование</FieldLabel>
						<Input id='shortTitle' readOnly value={item.shortTitle} />
					</Field>
				</div>
				<div className='flex flex-row gap-5'>
					<Field>
						<FieldLabel htmlFor='ogrn'>ОГРН</FieldLabel>
						<Input id='ogrn' readOnly value={item.ogrn} />
					</Field>
					<Field>
						<FieldLabel htmlFor='ogrn'>ИНН</FieldLabel>
						<Input id='inn' readOnly value={item.inn} />
					</Field>
					<Field>
						<FieldLabel htmlFor='ogrn'>КПП</FieldLabel>
						<Input id='kpp' readOnly value={item.kpp} />
					</Field>
					<Field>
						<FieldLabel htmlFor='ogrn'>ОКТМО</FieldLabel>
						<Input id='oktmo' readOnly value={item.oktmo} />
					</Field>
				</div>
			</FieldGroup>
		</div>
	)
}
