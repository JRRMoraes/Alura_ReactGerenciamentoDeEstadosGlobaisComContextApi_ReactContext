import React, { memo, useContext } from 'react';
import { Container } from './styles';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CarrinhoContext from '../../common/Carrinho';


function Produto({
	nome,
	foto,
	id,
	valor,
	unidade
}) {

	const { carrinho, setCarrinho } = useContext(CarrinhoContext)


	function AdicionarProdutoNoCarrinho(novoProduto) {
		const temOProduto = carrinho.some(itemI => itemI.id === novoProduto.id)
		if (!temOProduto) {
			novoProduto.quantidade = 1
			setCarrinho(carrinhoA =>
				[...carrinhoA, novoProduto])
		} else {
			setCarrinho(carrinhoA =>
				carrinhoA.map(carrinhoI => {
					if (carrinhoI.id === novoProduto.id)
						carrinhoI.quantidade += 1
					return carrinhoI
				})
			)
		}
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
				<IconButton color="secondary">
					<RemoveIcon />
				</IconButton>
				<IconButton onClick={() => AdicionarProdutoNoCarrinho({ nome, foto, id, valor })}>
					<AddIcon />
				</IconButton>
			</div>
		</Container>
	)
}
export default memo(Produto);