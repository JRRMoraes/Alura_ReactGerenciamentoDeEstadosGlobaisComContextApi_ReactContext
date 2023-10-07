import React from "react"
import { Route } from "react-router-dom"   // Switch   BrowserRouter
import { UsuarioProvider } from "common/Usuario"
import Login from "./Login"
import Feira from "./Feira"
import Carrinho from "./Carrinho"


export const Routes = () => {
	return (
		<Routes>
			<UsuarioProvider>
				<Route exact path="/"
					element={<Login />}
				/>
				<Route path="/feira"
					element={<Feira />}
				/>
				<Route path="/carrinho"
					element={<Carrinho />}
				/>
			</UsuarioProvider>
		</Routes>
	)
}
export default Routes