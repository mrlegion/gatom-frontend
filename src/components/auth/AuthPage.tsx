import { PropsWithChildren } from 'react'

import { AuthPageImage } from '@/components/auth/AuthPageImage'
import { Card, CardContent, FieldDescription } from '@/components/ui'

export function AuthPage({ children }: PropsWithChildren) {
	return (
		<div className='flex flex-col gap-6'>
			<Card className='overflow-hidden p-0 shadow-lg'>
				<CardContent className='grid p-0 md:grid-cols-2'>
					{children}
					<AuthPageImage />
				</CardContent>
			</Card>
			<FieldDescription className='px-6 text-center text-gray-400'></FieldDescription>
		</div>
	)
}
