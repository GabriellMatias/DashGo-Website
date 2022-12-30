import {
	Input,
	FormControl,
	FormLabel,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
	name: string
	label?: string
}

export function InputComponent({ name, label, ...rest }: InputProps) {
	return (
		<FormControl>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<Input
				name={name}
				id={name}
				focusBorderColor="pink.500"
				bg="gray.900"
				variant={'filled'}
				_hover={{
					bgColor: 'gray.700',
				}}
				size="lg"
				{...rest}
			/>
		</FormControl>
	)
}
