import { OrganizationInfoHead } from '@/components/pages/organizations/OrganizationInfoHead'
import { OrganizationSubsidiaries } from '@/components/pages/organizations/OrganizationSubsidiaries'

interface IOrganizationInfoProps {
	id: string
}

export function OrganizationInfo({ id }: IOrganizationInfoProps) {
	return (
		<>
			<OrganizationInfoHead id={id} />
			<OrganizationSubsidiaries organizationId={id} />
		</>
	)
}
