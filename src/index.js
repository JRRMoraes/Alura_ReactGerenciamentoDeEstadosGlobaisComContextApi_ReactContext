import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
//import { StylesProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'pages/Routes';


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


ReactDOM.render(
	<React.StrictMode>
		{/* <StylesProvider injectFirst> */}
		<ThemeProvider theme={theme}>
			<Routes />
		</ThemeProvider>
		{/* </StylesProvider> */}
	</React.StrictMode>,
	document.getElementById('root')
);