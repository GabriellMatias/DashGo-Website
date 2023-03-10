import { Button } from '@chakra-ui/react'

interface PaginationItemsProps {
	isCurrent?: boolean
	number: number
	onPageChange: (page: number) => void
}
export function PaginationButton({
	isCurrent = false,
	number,
	onPageChange,
}: PaginationItemsProps) {
	if (isCurrent) {
		return (
			<Button
				size={'sm'}
				fontSize="xs"
				width={'4'}
				colorScheme="pink"
				disabled
				_disabled={{
					bgColor: 'pink.500',
					cursor: 'default',
				}}
			>
				{number}
			</Button>
		)
	}
	return (
		<Button
			size={'sm'}
			fontSize="xs"
			width={'4'}
			bg="gray.700"
			_hover={{
				bgColor: 'gray.500',
			}}
			onClick={() => onPageChange(number)}
		>
			{number}
		</Button>
	)
}
