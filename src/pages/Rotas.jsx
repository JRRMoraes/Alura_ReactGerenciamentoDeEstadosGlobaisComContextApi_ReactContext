import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UsuarioProvider } from "/src/common/Usuario"
import { CarrinhoProvider } from "../common/Carrinho"
import { PagamentoProvider } from "../common/Pagamento"
import Login from "./Login/Login"
import Feira from "./Feira/Feira"
import Carrinho from "./Carrinho/Carrinho"


export const Rotas = () => {
	return (
		<BrowserRouter>
			<UsuarioProvider>
				<CarrinhoProvider>
					<PagamentoProvider>
						<Routes>
							<Route exact path="/"
								element={<Login />}
							/>
							<Route path="/feira"
								element={<Feira />}
							/>
							<Route path="/carrinho"
								element={<Carrinho />}
							/>
						</Routes>
					</PagamentoProvider>
				</CarrinhoProvider>
			</UsuarioProvider>
		</BrowserRouter>
	)
}
export default Rotas