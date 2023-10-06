import { UsuarioContext } from 'common/Usuario';
import { Container, Titulo, InputContainer } from './styles';
import { Button, Input, InputAdornment, InputLabel } from '@mui/material';


function Login() {
	return (
		<Container>
			<UsuarioContext.Consumer>
				{(nome, setNome, saldo, setSaldo) => (
					<>
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
						>
							Avançar
						</Button>
					</>
				)}
			</UsuarioContext.Consumer>
		</Container>
	)
};
export default Login;