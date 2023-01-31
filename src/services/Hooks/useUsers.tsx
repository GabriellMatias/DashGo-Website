import { useQuery, UseQueryOptions } from 'react-query'
import { UserProps } from '../../pages/users'
import { api } from '../api'

interface GetUsersResponse {
	users: UserProps[]
	totalCount: number
}

export async function getUsersData(page: number): Promise<GetUsersResponse> {
	const { data, headers } = await api.get('/users', {
		params: {
			page,
		},
	})

	const totalCount = Number(headers['x-total-count'])

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
	return { users, totalCount }
}

export function useUsers(page: number, options: UseQueryOptions) {
	return useQuery(
		['users', page],
		() => getUsersData(page),

		{
			/* impede a tela de fazer outra requisicao a API pelo tempo que voce determinar
			 */
			staleTime: 1000 * 60 * 10,
			...options,
		},
	)
}
