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

export default function CreateUser() {
	return (
		<Box>
			<Header />
			<Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
				<SideBar />
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Heading size="lg" fontWeight={'normal'}>
						Criar usuario
					</Heading>
					<Divider my="6" borderColor={'gray.700'} />
					<VStack spacing={'8'}>
						<SimpleGrid minChildWidth={'240px'} spacing="8" w="100%">
							<InputComponent name="name" label="Nome Completo" />
							<InputComponent name="email" type={'email'} label="E-mail" />
						</SimpleGrid>
						<SimpleGrid minChildWidth={'240px'} spacing="8" w="100%">
							<InputComponent name="password" type="password" label="Senha" />
							<InputComponent
								name="password_confirmation"
								type={'password'}
								label="Comfirmaçao da senha"
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt="8" justify={'flex-end'}>
						<HStack spacing={'4'}>
							<Button colorScheme={'whiteAlpha'}>Cancelar</Button>
							<Button colorScheme={'pink'}>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
