import React, { createContext, memo, useContext, useEffect, useState } from "react"
import { UseUsuarioContext } from "./Usuario"
import { UsePagamentoContext } from "./Pagamento"


const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"


export const CarrinhoProvider = ({
	children
}) => {

	const [carrinho, setCarrinho] = useState([])


	const [volume, setVolume] = useState(0)


	const [totalBruto, setTotalBruto] = useState(0)


	const [totalLiquido, setTotalLiquido] = useState(0)


	return (
		<CarrinhoContext.Provider
			value={{
				carrinho, setCarrinho,
				volume, setVolume,
				totalBruto, setTotalBruto,
				totalLiquido, setTotalLiquido
			}}
		>
			{children}
		</CarrinhoContext.Provider>
	)
}


export const UseCarrinhoContext = () => {

	const { carrinho, setCarrinho,
		volume, setVolume,
		totalBruto, setTotalBruto,
		totalLiquido, setTotalLiquido
	} = useContext(CarrinhoContext)


	const { saldo, setSaldo } = UseUsuarioContext()


	const { formaPagamento } = UsePagamentoContext()


	function AdicionarProduto(novoProduto) {
		const temOProduto = carrinho?.some(itemI => itemI.id === novoProduto.id)
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


	function RemoverProduto(idProduto) {
		const produtoL = carrinho?.find(carrinhoI => carrinhoI.id === idProduto)
		if (!produtoL)
			return
		const ehUltimoL = produtoL?.quantidade === 1
		if (ehUltimoL) {
			setCarrinho(carrinhoA =>
				carrinhoA.filter(carrinhoI => carrinhoI.id !== produtoL.id))
		} else {
			setCarrinho(carrinhoA =>
				carrinhoA.map(carrinhoI => {
					if (carrinhoI.id === produtoL.id)
						carrinhoI.quantidade -= 1
					return carrinhoI
				})
			)
		}
	}


	function Comprar() {
		setCarrinho([])
		setSaldo(saldo - totalLiquido)
	}


	useEffect(() => {
		let { volumeL, totalBrutoL } = carrinho?.reduce((contadorI, carrinhoI) =>
		({
			volumeL: contadorI.volumeL + carrinhoI.quantidade,
			totalBrutoL: contadorI.totalBrutoL + (carrinhoI.quantidade * carrinhoI.valor)

		}), {
			volumeL: 0,
			totalBrutoL: 0
		})
		setVolume(volumeL)
		totalBrutoL = Number(totalBrutoL.toFixed(2))
		setTotalBruto(totalBrutoL)
		let totalLiquidoL = totalBrutoL;
		if (formaPagamento)
			totalLiquidoL *= formaPagamento?.juros
		totalLiquidoL = Number(totalLiquidoL.toFixed(2))
		setTotalLiquido(totalLiquidoL)
		console.log("volume: " + volume + "   --   totalBruto: " + totalBruto + "   --   juros: " + formaPagamento?.juros)
	}, [
		carrinho, formaPagamento
	])


	return {
		carrinho, setCarrinho,
		AdicionarProduto, RemoverProduto,
		volume, totalBruto, totalLiquido,
		Comprar
	}
}
export default UseCarrinhoContext