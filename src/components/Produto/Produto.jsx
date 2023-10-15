import React, { memo } from 'react';
import { Container } from './styles';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UseCarrinhoContext } from '../../common/Carrinho';


function Produto({
	nome,
	foto,
	id,
	valor,
	unidade
}) {

	const { carrinho, AdicionarProduto, RemoverProduto } = UseCarrinhoContext()


	const produtoNoCarrinho = carrinho?.find(carrinhoI => carrinhoI.id === id)


	function AdicionarProdutoNoCarrinho() {
		if (AdicionarProduto)
			AdicionarProduto({ nome, foto, id, valor })
	}


	function RemoverProdutoDoCarrinho() {
		if (RemoverProduto)
			RemoverProduto(id)
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
				>
					<RemoveIcon />
				</IconButton>
				{produtoNoCarrinho?.quantidade || 0}
				<IconButton onClick={() => AdicionarProdutoNoCarrinho()}>
					<AddIcon />
				</IconButton>
			</div>
		</Container>
	)
}
export default memo(Produto);