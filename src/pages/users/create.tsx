import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react'
import { InputComponent } from '../../components/Form/Input'
import { SideBar } from '../../components/SideBar'
import { Header } from '../../components/Header'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useMutation } from 'react-query'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'
import { useRouter } from 'next/router'

interface CreateUserFormData {
	name: string
	email: string
	password: string
	password_confirmation: string
}

const CreateUserFormSchema = yup.object().shape({
	name: yup.string().required('Nome Obrigatorio'),
	email: yup.string().required('Email Obrigatorio').email(),
	password: yup.string().required('Senha Obrigatorio'),
	password_confirmation: yup.string().oneOf([null, yup.ref('password')]),
})

export default function CreateUser() {
	const router = useRouter()

	const { formState, handleSubmit, register } = useForm({
		resolver: yupResolver(CreateUserFormSchema),
	})

	const createUser = useMutation(
		async (user: CreateUserFormData) => {
			const response = await api.post('users', {
				user: {
					...user,
					created_at: new Date(),
				},
			})
			return response.data.user
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('users')
			},
		},
	)

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values,
	) => {
		await createUser.mutateAsync(values)
		/* mandando o usuario de volta para pagina users */
		router.push('/users')
	}
	return (
		<Box>
			<Header />
			<Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
				<SideBar />
				<Box
					as="form"
					flex="1"
					onSubmit={handleSubmit(handleCreateUser)}
					borderRadius={8}
					bg="gray.800"
					p={['6', '8']}
				>
					<Heading size="lg" fontWeight={'normal'}>
						Criar usuario
					</Heading>
					<Divider my="6" borderColor={'gray.700'} />
					<VStack spacing={'8'}>
						<SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w="100%">
							<InputComponent label="Nome Completo" {...register('name')} />
							<InputComponent
								type={'email'}
								{...register('email')}
								label="E-mail"
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth={'240px'} spacing={['6', '8']} w="100%">
							<InputComponent
								{...register('password')}
								type="password"
								label="Senha"
							/>
							<InputComponent
								{...register('password_confirmation')}
								name="password_confirmation"
								type={'password'}
								label="Confirmaçao da senha"
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt="8" justify={'flex-end'}>
						<HStack spacing={'4'}>
							<Link href={'/users'}>
								<Button as="a" colorScheme={'whiteAlpha'}>
									Cancelar
								</Button>
							</Link>
							<Button
								colorScheme={'pink'}
								type="submit"
								isLoading={formState.isSubmitting}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
