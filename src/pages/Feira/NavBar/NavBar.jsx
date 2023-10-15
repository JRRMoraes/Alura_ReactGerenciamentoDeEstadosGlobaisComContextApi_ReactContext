import React from 'react';
import { Nav } from './styles';
import Logo from '/src/assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { UseCarrinhoContext } from '../../../common/Carrinho';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

	const { volume, total } = UseCarrinhoContext()


	const navegador = useNavigate()


	return (
		<Nav>
			<img src={Logo}
				alt="Logo da empresa"
			/>
			<div>
				<span>{volume} volumes</span>
				<br />
				<span>Total: R$ {total}</span>
			</div>
			<IconButton disabled={volume === 0}
				onClick={() => navegador("/carrinho")}
			>
				<Badge color="primary"
					badgeContent={volume}
				>
					<ShoppingCartIcon />
				</Badge>
			</IconButton>
		</Nav>
	)
}