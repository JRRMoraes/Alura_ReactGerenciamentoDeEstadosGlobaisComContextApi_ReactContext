import React, { useContext } from "react"
import UsuarioContext from '/src/common/Usuario';
import { Container, Titulo, InputContainer } from './styles';
import { Button, Input, InputAdornment, InputLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";


function Login() {

	const navegador = useNavigate()

	const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)


	return (
		<Container>
			<Titulo>
				Insira o seu nome
			</Titulo>
			<InputContainer>
				<InputLabel>
					Nome
				</InputLabel>
				<Input type="text"
					value={nome}
					onChange={(event) => setNome(event.target.value)}
				/>
			</InputContainer>
			<InputContainer>
				<InputLabel>
					Saldo
				</InputLabel>
				<Input type="number"
					value={saldo}
					onChange={(event) => setSaldo(event.target.value)}
					startAdornment={
						<InputAdornment position="start">
							R$
						</InputAdornment>
					}
				/>
			</InputContainer>
			<Button variant="contained"
				color="primary"
				onClick={() => navegador("/feira")}
			>
				Avançar
			</Button>
		</Container>
	)
}
export default Login;