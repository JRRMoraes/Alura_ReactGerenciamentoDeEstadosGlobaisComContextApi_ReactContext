import { createContext, useContext, useState } from 'react';


const PagamentoContext = createContext();
PagamentoContext.displayName = "Pagamento";


export const PagamentoProvider = ({
	children
}) => {

	const tiposPagamento = [{
		nome: "Boleto",
		juros: 1.0,
		id: 1
	}, {
		nome: "Cartão de Crédito",
		juros: 1.3,
		id: 2
	}, {
		nome: "PIX",
		juros: 1.1,
		id: 3
	}, {
		nome: "Crediário",
		juros: 1.5,
		id: 4
	}];


	const [formaPagamento, setFormaPagamento] = useState(tiposPagamento[0]);


	return (
		<PagamentoContext.Provider value={{
			formaPagamento, setFormaPagamento,
			tiposPagamento
		}}>
			{children}
		</PagamentoContext.Provider>
	)
}


export const UsePagamentoContext = () => {

	const { formaPagamento, setFormaPagamento,
		tiposPagamento
	} = useContext(PagamentoContext)


	function ImporFormaPagamentoPorId(id) {
		const tiposPagamentoL = tiposPagamento.find((tiposPagamentoI) => tiposPagamentoI.id === id)
		setFormaPagamento(tiposPagamentoL)
	}


	return {
		formaPagamento, setFormaPagamento,
		tiposPagamento,
		ImporFormaPagamentoPorId
	}
}