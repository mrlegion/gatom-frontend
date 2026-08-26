import { OrganizationView } from '@/components/pages/organizations'

import { IPageWithIDProps } from '@/types/common'

export default async function Page({ params }: IPageWithIDProps) {
	const { id } = await params

	return <OrganizationView id={id} />
}
