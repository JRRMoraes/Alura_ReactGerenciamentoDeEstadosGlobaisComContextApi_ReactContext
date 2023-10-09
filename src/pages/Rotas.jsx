import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UsuarioProvider } from "/src/common/Usuario"
import Login from "./Login/Login"
import Feira from "./Feira/Feira"
import Carrinho from "./Carrinho/Carrinho"
import { CarrinhoProvider } from "../common/Carrinho"


export const Rotas = () => {
	return (
		<BrowserRouter>
			<UsuarioProvider>
				<CarrinhoProvider>
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
				</CarrinhoProvider>
			</UsuarioProvider>
		</BrowserRouter>
	)
}
export default Rotas