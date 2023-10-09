import React, { createContext, useState } from "react"


export const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"
export default CarrinhoContext


export const CarrinhoProvider = ({
	children
}) => {

	const [carrinho, setCarrinho] = useState([])


	return (
		<CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
			{children}
		</CarrinhoContext.Provider>
	)
}