import { Box, HStack, Stack } from '@chakra-ui/react'
import { PaginationButton } from './PaginationButton'

export function Pagination() {
	return (
		<Stack
			direction={['column', 'row']}
			mt="8"
			justify={'space-between'}
			align="center"
			spacing={'6'}
		>
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>

			<HStack spacing={'2'}>
				<PaginationButton isCurrent={true} number={1} />
				<PaginationButton isCurrent={false} number={2} />
				<PaginationButton isCurrent={false} number={3} />
				<PaginationButton isCurrent={false} number={4} />
				<PaginationButton isCurrent={false} number={5} />
			</HStack>
		</Stack>
	)
}
