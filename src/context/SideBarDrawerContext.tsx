import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SideBarDrawerProviderProps {
	children: ReactNode
}

type SideBarDrawerContexData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SideBarDrawerContexData)

export function SideBarDrawerProvider({
	children,
}: SideBarDrawerProviderProps) {
	const router = useRouter()
	const disclosure = useDisclosure()

	useEffect(() => {
		disclosure.onClose()
	}, [router.asPath])

	return (
		<SideBarDrawerContext.Provider value={disclosure}>
			{children}
		</SideBarDrawerContext.Provider>
	)
}
export const useSideBarDrawer = () => useContext(SideBarDrawerContext)
