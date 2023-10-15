import React, { createContext, memo, useContext, useEffect, useState } from "react"


const CarrinhoContext = createContext()
CarrinhoContext.displayName = "Carrinho"


export const CarrinhoProvider = ({
	children
}) => {

	const [carrinho, setCarrinho] = useState([])


	const [volume, setVolume] = useState(0)


	const [total, setTotal] = useState(0)


	return (
		<CarrinhoContext.Provider value={{ carrinho, setCarrinho, volume, setVolume, total, setTotal }}>
			{children}
		</CarrinhoContext.Provider>
	)
}


export const UseCarrinhoContext = () => {

	const { carrinho, setCarrinho,
		volume, setVolume,
		total, setTotal
	} = useContext(CarrinhoContext)


	function AdicionarProduto(novoProduto) {
		const temOProduto = carrinho?.some(itemI => itemI.id === novoProduto.id)
		if (!temOProduto) {
			novoProduto.quantidade = 1
			console.log("AdicionarProduto (!temOProduto) 00")
			setCarrinho(carrinhoA =>
				[...carrinhoA, novoProduto])
			console.log("AdicionarProduto (!temOProduto)  1")
		} else {
			console.log("AdicionarProduto temOProduto  00")
			setCarrinho(carrinhoA =>
				carrinhoA.map(carrinhoI => {
					if (carrinhoI.id === novoProduto.id)
						carrinhoI.quantidade += 1
					return carrinhoI
				})
			)
			console.log("AdicionarProduto temOProduto   1")
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


	useEffect(() => {
		//console.log("volume 0000000000  ")
		const { volumeL, totalL } = carrinho?.reduce((contadorI, carrinhoI) =>
		({
			volumeL: contadorI.volumeL + carrinhoI.quantidade,
			totalL: contadorI.totalL + (carrinhoI.quantidade * carrinhoI.valor)

		}), {
			volumeL: 0,
			totalL: 0
		})
		//console.log("volume  1  " + volumeL + "  -  " + totalL)
		setVolume(volumeL)
		setTotal(totalL.toFixed(2))
		console.log("volume 99 " + volumeL + " - " + totalL)
	}, [
		carrinho, setVolume
	])


	return {
		carrinho, setCarrinho,
		AdicionarProduto, RemoverProduto,
		volume, total
	}
}
export default UseCarrinhoContext