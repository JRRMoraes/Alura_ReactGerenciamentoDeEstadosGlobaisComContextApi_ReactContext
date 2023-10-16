import React, { useMemo, useState } from 'react';
import { Button, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Container, TotalContainer, PagamentoContainer } from './styles';
import { UseCarrinhoContext } from '../../common/Carrinho';
import { UsePagamentoContext } from '../../common/Pagamento';
import { UseUsuarioContext } from '../../common/Usuario';
import { Voltar } from '../../components/UIBase/Voltar';
import Produto from '../../components/Produto/Produto';


function Carrinho() {

	const [openSnackbar, setOpenSnackbar] = useState(false);


	const { carrinho, totalBruto = 0, totalLiquido = 0, Comprar } = UseCarrinhoContext()


	const { formaPagamento, tiposPagamento, ImporFormaPagamentoPorId } = UsePagamentoContext()


	const { saldo = 0 } = UseUsuarioContext()


	const saldoTotalCalculado = useMemo(() => saldo - totalLiquido,
		[saldo, totalLiquido])


	function CompraEstaDesativada() {
		return (totalLiquido < 0)
			|| (carrinho.length === 0)
			|| (saldoTotalCalculado < 0)
	}


	return (
		<Container>
			<Voltar />
			<h2>
				Carrinho
			</h2>
			{carrinho?.map(carrinhoI => (
				< Produto
					{...carrinhoI}
					key={carrinhoI.id}
				/>
			))}
			<PagamentoContainer>
				<InputLabel>
					Forma de Pagamento {formaPagamento.nome}
				</InputLabel>
				<Select value={formaPagamento.id}
					onChange={(event) => ImporFormaPagamentoPorId(event.target.value)}
				>
					{tiposPagamento?.map((tiposPagamentoI) => (
						<MenuItem key={tiposPagamentoI.id}
							value={tiposPagamentoI.id}
						>
							{tiposPagamentoI.nome}
						</MenuItem>
					))}
				</Select>
			</PagamentoContainer>
			<TotalContainer>
				<div>
					<h2>
						Total no Carrinho:
					</h2>
					<span>
						R$ {totalBruto.toFixed(2)}
					</span>
				</div>
				<div>
					<h2>
						Total à Pagar:
					</h2>
					<span>
						R$ {totalLiquido.toFixed(2)}
					</span>
				</div>
				<div>
					<h2>
						Saldo:
					</h2>
					<span>
						R$ {saldo.toFixed(2)}
					</span>
				</div>
				<div>
					<h2>
						Saldo Total:
					</h2>
					<span>
						R$ {saldoTotalCalculado.toFixed(2)}
					</span>
				</div>
			</TotalContainer>
			<Button color="primary"
				onClick={() => {
					Comprar()
					setOpenSnackbar(true);
				}}
				variant="contained"
				disabled={CompraEstaDesativada()}
			>
				Comprar
			</Button>
			<Snackbar open={openSnackbar}
				anchorOrigin={
					{
						vertical: 'top',
						horizontal: 'right'
					}
				}
				onClose={() => setOpenSnackbar(false)}
			>
				<MuiAlert severity="success"
					onClose={() => setOpenSnackbar(false)}
				>
					Compra feita com sucesso!
				</MuiAlert>
			</Snackbar>
		</Container>
	)
}
export default Carrinho;