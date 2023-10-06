import { Button, InputLabel, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';


function Carrinho() {

    const [openSnackbar, setOpenSnackbar] = useState(false);


    return (
        <Container>
            <Voltar />
            <h2>
                Carrinho
            </h2>
            <PagamentoContainer>
                <InputLabel> Forma de Pagamento </InputLabel>
            </PagamentoContainer>
            <TotalContainer>
                <div>
                    <h2> Total no Carrinho: </h2>
                    <span> R$ </span>
                </div>
                <div>
                    <h2> Saldo: </h2>
                    <span> R$ </span>
                </div>
                <div>
                    <h2> Saldo Total: </h2>
                    <span> R$ </span>
                </div>
            </TotalContainer>
            <Button color="primary"
                onClick={() => {
                    setOpenSnackbar(true);
                }}
                variant="contained"
            >
                Comprar
            </Button>
            <Snackbar open={openSnackbar}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                }
                onClose={() => setOpenSnackbar(false)}
            >
                <MuiAlert severity="success"
                    onClose={() => setOpenSnackbar(false)}
                >
                    Compra feita com sucesso!
                </MuiAlert>
            </Snackbar>
        </Container>
    )
}
export default Carrinho;