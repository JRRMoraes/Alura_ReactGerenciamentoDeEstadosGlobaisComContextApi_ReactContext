import React from 'react';
import { Nav } from './styles';
import Logo from '/src/assets/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { UseCarrinhoContext } from '../../../common/Carrinho';
import { useNavigate } from 'react-router-dom';
import { Voltar } from '../../../components/UIBase/Voltar';


export default function NavBar() {

	const { volume, totalBruto } = UseCarrinhoContext()


	const navegador = useNavigate()


	return (
		<Nav>
			<Voltar />
			<img src={Logo}
				alt="Logo da empresa"
			/>
			<div>
				<span>{volume} volumes</span>
				<br />
				<span>Total: R$ {totalBruto.toFixed(2)}</span>
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