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
	useBreakpointValue,
	Spinner,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { SideBar } from '../../components/SideBar'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import Link from 'next/link'
import { useUsers } from '../../services/Hooks/useUsers'

export interface UserProps {
	id: string
	name: string
	email: string
	createdAt: string
}

export default function UserList() {
	const { data, isLoading, error, isFetching } = useUsers()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	})

	return (
		<Box>
			<Header />
			<Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
				<SideBar />
				<Box flex="1" borderRadius={8} bg="gray.800" p="8">
					<Flex mb={'8'} justify="space-between" align={'center'}>
						<Heading size={'lg'} fontWeight="normal">
							Usuarios
							{!isLoading && isFetching && (
								<Spinner size={'sm'} color={'gray.500'} ml="4" />
							)}
						</Heading>
						<Link href={'/users/create'} passHref>
							<Button
								as="a"
								size={'sm'}
								fontSize="sm"
								colorScheme={'pink'}
								leftIcon={<Icon as={RiAddLine} fontSize="20" />}
							>
								Criar Novo
							</Button>
						</Link>
					</Flex>

					{isLoading ? (
						<Flex justify={'center'}>
							<Spinner />
						</Flex>
					) : error ? (
						<Flex justify={'center'}>Falha ao obter dados dos usuarios</Flex>
					) : (
						<>
							<Table colorScheme={'whiteAlpha'}>
								<Thead>
									<Tr>
										<Th px={['4', '4', '6']} color="gray.300" width={'8'}>
											<Checkbox colorScheme={'pink'} />
										</Th>
										<Th>Usuario</Th>
										{isWideVersion && <Th>Data de Cadastro</Th>}
										{isWideVersion && <Th width={'8'}></Th>}
									</Tr>
								</Thead>
								<Tbody>
									{data!.map((user: UserProps) => {
										return (
											<Tr key={user.id}>
												<Td px={['4', '4', '6']}>
													<Checkbox colorScheme={'pink'} />
												</Td>
												<Td>
													<Box>
														<Text fontWeight="bold">{user.name}</Text>
														<Text fontSize="sm" color={'gray.300'}>
															{user.email}
														</Text>
													</Box>
												</Td>
												{isWideVersion && <Td>{user.createdAt}</Td>}
												{isWideVersion && (
													<Td>
														<Button
															as="a"
															size={'sm'}
															fontSize="sm"
															colorScheme={'purple'}
															leftIcon={
																<Icon as={RiPencilLine} fontSize="16" />
															}
														>
															Editar
														</Button>
													</Td>
												)}
											</Tr>
										)
									})}
								</Tbody>
							</Table>
							<Pagination />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	)
}
