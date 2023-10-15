import React, { useContext, useState } from 'react';
import { Button, InputLabel, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';
import { UseCarrinhoContext } from '../../common/Carrinho';
import Produto from '../../components/Produto/Produto';
import { useNavigate } from 'react-router-dom';
import { UsePagamentoContext } from '../../common/Pagamento';


function Carrinho() {

	const [openSnackbar, setOpenSnackbar] = useState(false);


	const { carrinho } = UseCarrinhoContext()


	const { formaPagamento } = UsePagamentoContext()


	const navegador = useNavigate()


	return (
		<Container>
			<Voltar onClick={() => navegador(-1)} />
			<h2>
				Carrinho
			</h2>
			{carrinho?.map(carrinhoI => {
				<Produto
					{...carrinhoI}
					key={carrinhoI.id}
				/>
			})}
			<PagamentoContainer>
				<InputLabel>
					Forma de Pagamento
				</InputLabel>
			</PagamentoContainer>
			<TotalContainer>
				<div>
					<h2>
						Total no Carrinho:
					</h2>
					<span>
						R$
					</span>
				</div>
				<div>
					<h2>
						Saldo:
					</h2>
					<span>
						R$
					</span>
				</div>
				<div>
					<h2>
						Saldo Total:
					</h2>
					<span>
						R$
					</span>
				</div>
			</TotalContainer>
			<Button color="primary"
				onClick={() => {
					setOpenSnackbar(true);
				}}
				variant="contained"
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