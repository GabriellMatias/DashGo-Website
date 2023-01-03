import { Header } from '../components/Header/Header'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { SideBar } from '../components/Form/SideBar'
import Chart from 'react-apexcharts'

// variaves do grafico
const options = {}
const series = [
	{
		name: 'series1',
		data: [18, 20, 58, 74],
	},
]

export default function DashBoard() {
	return (
		<Flex direction={'column'} h="100vh">
			<Header />
			<Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
				<SideBar />
				<SimpleGrid
					flex="1"
					gap="4"
					minChildWidth="320px"
					alignItems="flex-start"
				>
					<Box p="8" bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Inscritos da Semana
						</Text>
						<Chart type="area" height={160} options={options} series={series} />
					</Box>
					<Box p="8" bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Taxa de Abertura
						</Text>
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	)
}
