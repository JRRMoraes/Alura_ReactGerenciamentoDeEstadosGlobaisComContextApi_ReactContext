import React, { createContext, useContext, useEffect, useState } from "react"


const UsuarioContext = createContext()
UsuarioContext.displayName = "Usuário"


export const UsuarioProvider = ({
	children
}) => {

	const [nome, setNome] = useState("")


	const [saldo, setSaldo] = useState(0)


	return (
		<UsuarioContext.Provider
			value={{
				nome, setNome,
				saldo, setSaldo
			}}
		>
			{children}
		</UsuarioContext.Provider>
	)
}


export const UseUsuarioContext = () => {

	const { nome, setNome,
		saldo = 0, setSaldo
	} = useContext(UsuarioContext)


	useEffect(() => {
		let saldoL = Number(saldo)
		if (Number.isNaN(saldoL))
			saldoL = 0
		saldoL = Number(saldoL.toFixed(2))
		if (saldoL !== saldo)
			setSaldo(saldoL)
	}, [
		saldo
	])


	return {
		nome, setNome,
		saldo, setSaldo
	}
} 