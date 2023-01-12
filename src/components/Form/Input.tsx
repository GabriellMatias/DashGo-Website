import {
	Input,
	FormControl,
	FormLabel,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
	name: string
	label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, ...rest },
	ref,
) => {
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
				ref={ref}
				{...rest}
			/>
		</FormControl>
	)
}
export const InputComponent = forwardRef(InputBase)
