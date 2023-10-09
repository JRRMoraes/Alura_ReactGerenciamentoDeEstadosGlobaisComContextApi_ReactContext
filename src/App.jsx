import './App.css'
import React from 'react'
import Rotas from './pages/Rotas'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
	palette: {
		primary: {
			main: '#2A9F85'
		},
		secondary: {
			main: '#FF7070'
		},
	}
})


function App() {
	return (
		<div>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Rotas />
				</ThemeProvider>
			</StyledEngineProvider>
		</div>
	)
}
export default App