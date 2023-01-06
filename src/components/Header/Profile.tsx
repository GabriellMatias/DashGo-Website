import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
	return (
		<Flex align={'center'}>
			<Box mr={'4'} textAlign="right">
				<Text>Gabriell Matias</Text>
				<Text color={'gray.300'} fontSize="small">
					gabriel.goiasat@gmail.com
				</Text>
			</Box>
			<Avatar
				size="md"
				name="Gabriel Matias"
				src="https://github.com/Gabriellmatias.png  "
			/>
		</Flex>
	)
}
