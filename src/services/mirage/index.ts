import { createServer, Factory, Model, Response } from 'miragejs'
import { faker } from '@faker-js/faker'

type User = {
	name: string
	email: string
	created_at: string
}

export function makeServer() {
	const server = createServer({
		/* banco de dados ficticio */

		models: {
			/* Partial serve para falar que esse user pode ter alguns dos campos inseridos no TYPE */
			user: Model.extend<Partial<User>>({}),
		},
		/* se quiser criar 200 usuarios ficticios usa o factories */
		factories: {
			user: Factory.extend({
				name(i: number) {
					/* i serve como um contador, assim onome fica dinamico e sem repeticao */
					return `User ${i + 1}`
				},
				email() {
					return faker.internet.email().toLowerCase()
				},
				createdAt() {
					return faker.date.recent(10)
				},
			}),
		},
		seeds(server) {
			server.createList('user', 200)
		},
		routes() {
			/* namespace e como se fosse uma baseURL */
			this.namespace = 'api'
			this.timing = 750 /* para testar loadings */

			this.get('/users', function (schema, request) {
				// eslint-disable-next-line camelcase
				const { page = 1, per_page = 10 } = request.queryParams
				const total = schema.all('user').length
				const pageStart = (Number(page) - 1) * Number(per_page)
				const pageEnd = pageStart + Number(per_page)

				const users = this.serialize(schema.all('user')).users.slice(
					pageStart,
					pageEnd,
				)
				return new Response(200, { 'x-total-count': String(total) }, { users })
			})
			this.post('/users')

			this.namespace = ''
			/* faz com que todas chamadas passem pelo mirage */
			this.passthrough()
		},
	})

	return server
}
