import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle, Separator } from '@/components/ui'

import type { TSubsidiaryResponse } from '@/types/subsidiaries'

interface ISubsidiaryCardInfoProps {
	item: TSubsidiaryResponse
}
export function SubsidiaryCardInfo({ item }: ISubsidiaryCardInfoProps) {
	return (
		<Card key={item.title} className='flex-1 shadow-sm'>
			<CardHeader>
				<CardTitle>
					<Link href='#'>{item.title}</Link>
				</CardTitle>
				<Separator />
				<CardDescription>{item.address}</CardDescription>
			</CardHeader>
			<CardFooter className='mt-auto items-end justify-end'>
				<Button variant='link'>
					Подробнее <ArrowRight className='' />
				</Button>
			</CardFooter>
		</Card>
	)
}
