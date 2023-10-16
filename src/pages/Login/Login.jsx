import { Container, Titulo, InputContainer } from './styles';
import { Button, Input, InputAdornment, InputLabel } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { UseUsuarioContext } from "../../common/Usuario";


function Login() {

	const navegador = useNavigate()

	const { nome, setNome, saldo, setSaldo } = UseUsuarioContext()


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
				disabled={nome.length < 4}
			>
				Avançar
			</Button>
		</Container>
	)
}
export default Login;