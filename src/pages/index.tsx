import { Button, Flex, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types'
import { InputComponent } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'

const SingInFormSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
})

export default function Home() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(SingInFormSchema),
	})
	const { isSubmitting } = formState

	const handleSingIn: SubmitHandler<FieldValues> = (data, event) => {
		console.log(data)
	}
	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				w="100%"
				maxWidth={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleSingIn)}
			>
				<Stack spacing={4}>
					<InputComponent
						type="email"
						label="E-mail"
						isRequired
						{...register('email')}
					/>

					<InputComponent
						type="password"
						isRequired
						label="Senha"
						{...register('password')}
					/>
				</Stack>

				<Link href={'/dashboard'}>
					<Button
						type="submit"
						mt="6"
						colorScheme="pink"
						size="lg"
						isLoading={isSubmitting}
					>
						Entrar
					</Button>
				</Link>
			</Flex>
		</Flex>
	)
}
