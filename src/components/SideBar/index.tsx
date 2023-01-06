import { Box, Stack } from '@chakra-ui/react'
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri'
import { NavLink } from './Navlink'
import { NavSection } from './NavSection'

export function SideBar() {
	return (
		<Box as="aside" w="64" mr="8">
			<Stack spacing={'12'} align="flex-start">
				<NavSection title="GERAL">
					<NavLink icon={RiDashboardLine}>DashBoard</NavLink>
					<NavLink icon={RiContactsLine}>Usuarios</NavLink>
				</NavSection>
				<NavSection title="AUTOMACAO">
					<NavLink icon={RiInputMethodLine}>Automacao</NavLink>
					<NavLink icon={RiGitMergeLine}>Formularios</NavLink>
				</NavSection>
			</Stack>
		</Box>
	)
}
