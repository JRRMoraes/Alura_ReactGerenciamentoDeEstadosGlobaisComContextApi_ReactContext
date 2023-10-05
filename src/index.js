import { ThemeProvider, createTheme } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from 'pages/Login';


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
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<Login />
			</ThemeProvider>
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);