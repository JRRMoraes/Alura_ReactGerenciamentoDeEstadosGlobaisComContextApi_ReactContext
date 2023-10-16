import React, { memo } from 'react';
import { Container } from './styles';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UseCarrinhoContext } from '../../common/Carrinho';
import { UseUsuarioContext } from '../../common/Usuario';


function Produto({
	nome,
	foto,
	id,
	valor,
	unidade
}) {

	const { carrinho, AdicionarProduto, RemoverProduto, totalLiquido } = UseCarrinhoContext()


	const { saldo } = UseUsuarioContext()


	const produtoNoCarrinho = carrinho?.find(carrinhoI => carrinhoI.id === id)


	function AdicionarProdutoNoCarrinho() {
		if (AdicionarProduto)
			AdicionarProduto({ nome, foto, id, valor, unidade })
	}


	function RemoverProdutoDoCarrinho() {
		if (RemoverProduto)
			RemoverProduto(id)
	}


	function DesativadoButtonRemover() {
		return (!produtoNoCarrinho)
			|| (produtoNoCarrinho.quantidade === 0)
	}


	function DesativadoButtonAdicionar() {
		return (totalLiquido > saldo)
			|| (saldo === 0)
	}


	return (
		<Container>
			<div>
				<img src={`/assets/${foto}.png`}
					alt={`foto de ${nome}`}
				/>
				<p>
					{nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
				</p>
			</div>
			<div>
				<IconButton color="secondary"
					onClick={() => RemoverProdutoDoCarrinho()}
					disabled={DesativadoButtonRemover()}
				>
					<RemoveIcon />
				</IconButton>
				{produtoNoCarrinho?.quantidade || 0}
				<IconButton color="primary"
					onClick={() => AdicionarProdutoNoCarrinho()}
					disabled={DesativadoButtonAdicionar()}
				>
					<AddIcon />
				</IconButton>
			</div>
		</Container>
	)
}
export default memo(Produto);