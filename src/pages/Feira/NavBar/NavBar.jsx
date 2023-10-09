import React from 'react';
import { Nav } from './styles';
import Logo from '/src/assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';


export default function NavBar() {
	return (
		<Nav>
			<img src={Logo} />
			<IconButton>
				<Badge color="primary">
					<ShoppingCartIcon />
				</Badge>
			</IconButton>
		</Nav>
	)
}