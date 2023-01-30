import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarDrawerProvider } from '../context/SideBarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect, useState } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
	makeServer()
}
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	const [showChild, setShowChild] = useState(false)

	useEffect(() => {
		setShowChild(true)
	}, [])

	if (!showChild) {
		return null
	}
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SideBarDrawerProvider>
					<Component {...pageProps} />
				</SideBarDrawerProvider>
			</ChakraProvider>
			{/* axulia como se fosse o react dev tools
			 */}
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
