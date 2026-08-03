import { TUserTable } from '@/types/user'

export const users: TUserTable[] = [
	{
		id: '758sddi8lj53fw',
		email: 'asborovskikh@greenatom.ru',
		username: 'Боровских Александр Сергеевич',
		passwordChangeAt: '15.07.2026',
		inactive: 'active',
		initial: 'active',
		usedTwoFactor: false
	},
	{
		id: '658dfsw66sfe8',
		email: 'ivivivanov@greenatom.ru',
		username: 'Иванов Иван Иванович',
		passwordChangeAt: '22.07.2026',
		inactive: 'active',
		initial: 'is initial',
		usedTwoFactor: false
	},
	{
		id: '452fswe858sdr',
		email: 'ievgpetrov@greenatom.ru',
		username: 'Петров Игорь Евгеньевич',
		passwordChangeAt: '10.04.2025',
		inactive: 'inactive',
		initial: 'active',
		usedTwoFactor: true
	}
]
