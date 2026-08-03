import Link from 'next/link'

export default function Page() {
	return (
		<>
			<div>Панель администрации</div>
			<ul>
				<li>
					<Link href='#'>Пользователи</Link>
				</li>
			</ul>
		</>
	)
}
