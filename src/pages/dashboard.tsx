import { Header } from '../components/Header'
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { SideBar } from '../components/SideBar'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

// variaves do grafico
const options: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			'2021-03-18T00:00:00.000Z',
			'2021-03-19T00:00:00.000Z',
			'2021-03-21T00:00:00.000Z',
			'2021-03-22T00:00:00.000Z',
			'2021-03-23T00:00:00.000Z',
		],
	},
	fill: {
		opacity: 0.3,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
}
const series = [
	{
		name: 'series1',
		data: [90, 9, 58, 74, 103],
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
					<Box p={['6', '8']} pb={'4'} bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Inscritos da Semana
						</Text>
						<Chart
							type="area"
							height={160}
							width="100%"
							options={options}
							series={series}
						/>
					</Box>
					<Box p={['6', '8']} pb={'4'} bg="gray.800" borderRadius={8}>
						<Text fontSize="lg" mb="4">
							Taxa de Abertura
						</Text>
						<Chart
							type="area"
							height={160}
							width="100%"
							options={options}
							series={series}
						/>
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	)
}
