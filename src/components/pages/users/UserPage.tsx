import { DataTable } from '@/components/data-table'

import { columns } from './columns'
import { users } from '@/example'

export function UserPage() {
	return (
		<>
			<div>Панель управления пользователями</div>
			<DataTable columns={columns} data={users} />
		</>
	)
}
