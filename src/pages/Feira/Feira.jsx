import React from 'react';
import { Container, Header, Lista, } from './styles';
import feira from './feira.json';
import NavBar from './NavBar/NavBar';
import Produto from '/src/components/Produto/Produto';
import { UseUsuarioContext } from '../../common/Usuario';


function Feira() {

	const { saldo } = UseUsuarioContext()


	return (
		<Container>
			<NavBar />
			<Header>
				<div>
					<h2>
						Olá!
					</h2>
					<h3>
						Saldo: R$ {saldo.toFixed(2)}
					</h3>
				</div>
				<p>
					Encontre os melhores produtos orgânicos!
				</p>
			</Header>
			<Lista>
				<h2>
					Produtos:
				</h2>
				{feira.map(produto => (
					<Produto
						{...produto}
						key={produto.id}
					/>
				))}
			</Lista>
		</Container>
	)
}
export default Feira;