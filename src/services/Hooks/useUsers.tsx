import { useQuery } from 'react-query'
import { UserProps } from '../../pages/users'
import { api } from '../api'

export async function getUsersData(): Promise<UserProps[]> {
	const { data } = await api.get('/users')

	const users = data.users.map((user: UserProps) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			}),
		}
	})
	return users
}

export function useUsers() {
	return useQuery('users', getUsersData, {
		/* impede a tela de fazer outra requisicao a API pelo tempo que voce determinar
		 */
		staleTime: 1000 * 5,
	})
}
