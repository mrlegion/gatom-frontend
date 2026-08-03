import { Atom } from 'lucide-react'

export function AuthLogo() {
	return (
		<div className='flex justify-center gap-2 md:justify-start'>
			<a href='#' className='flex items-center gap-2 font-medium'>
				<div className='flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground'>
					<Atom className='size-4' />
				</div>
				GATOM inc.
			</a>
		</div>
	)
}
