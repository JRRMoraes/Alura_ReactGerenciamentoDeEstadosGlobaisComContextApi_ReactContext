import { styled } from 'styled-components';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const VoltarEstilizado = styled(IconButton)`
	left: 20px;
	position: absolute;
	top: 15px;
`


export const Voltar = () => {

	const navegador = useNavigate()


	return (
		<VoltarEstilizado onClick={() => navegador(-1)}>
			<ArrowBackIcon />
		</VoltarEstilizado>
	)
}