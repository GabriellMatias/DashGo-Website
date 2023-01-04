import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Text,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { SideBar } from '../../components/Form/SideBar'
import { Header } from '../../components/Header/Header'
import { Pagination } from '../../components/Pagination'

export default function UserList() {
	return (
		<Box>
			<Header />
			<Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
				<SideBar />
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb={'8'} justify="space-between" align={'center'}>
						<Heading size={'lg'} fontWeight="normal">
							Usuarios
						</Heading>
						<Button
							as="a"
							size={'sm'}
							fontSize="sm"
							colorScheme={'pink'}
							leftIcon={<Icon as={RiAddLine} fontSize="20" />}
						>
							Criar Novo
						</Button>
					</Flex>

					<Table colorScheme={'whiteAlpha'}>
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" width={'8'}>
									<Checkbox colorScheme={'pink'} />
								</Th>
								<Th>Usuario</Th>
								<Th>Data de Cadastro</Th>
								<Th width={'8'}></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px="6">
									<Checkbox colorScheme={'pink'} />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Gabriel Matias</Text>
										<Text fontSize="sm" color={'gray.300'}>
											gabriel.goiasat@gmail.com
										</Text>
									</Box>
								</Td>
								<Td>14 de Setembro de 2021</Td>
								<Td>
									<Button
										as="a"
										size={'sm'}
										fontSize="sm"
										colorScheme={'purple'}
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
									>
										Editar
									</Button>
								</Td>
							</Tr>
							<Tr>
								<Td px="6">
									<Checkbox colorScheme={'pink'} />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Gabriel Matias</Text>
										<Text fontSize="sm" color={'gray.300'}>
											gabriel.goiasat@gmail.com
										</Text>
									</Box>
								</Td>
								<Td>14 de Setembro de 2021</Td>
								<Td>
									<Button
										as="a"
										size={'sm'}
										fontSize="sm"
										colorScheme={'purple'}
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
									>
										Editar
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	)
}
