import { Skeleton } from '@/components/ui'

interface IDataTableSkeletonProps {
	rows: number
}

export function DataTableSkeleton({ rows }: IDataTableSkeletonProps) {
	return (
		<div className='flex w-full flex-col gap-3'>
			{Array.from({ length: rows }).map((_, index) => (
				<div className='flex gap-4' key={`rows_${index}`}>
					<Skeleton className='h-8 flex-1' />
					<Skeleton className='h-8 flex-10' />
					<Skeleton className='h-8 flex-7' />
					<Skeleton className='h-8 flex-5' />
					<Skeleton className='h-8 flex-5' />
					<Skeleton className='h-8 flex-2' />
				</div>
			))}
		</div>
	)
}
