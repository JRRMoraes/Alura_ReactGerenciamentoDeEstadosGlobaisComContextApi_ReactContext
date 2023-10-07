import React from 'react'
import ReactDOM from 'react-dom/client'
//import ReactDOM from 'react-dom';
import './index.css';
//import { ThemeProvider, createTheme } from '@mui/material';
//import { ThemeProvider } from 'styled-components';
//import { createTheme } from '@mui/material';
//import { StylesProvider } from '@mui/styles';
import Routes from 'pages/Routes';


// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: '#2A9F85'
// 		},
// 		secondary: {
// 			main: '#FF7070'
// 		},
// 	}
// })


function App() {
	return (
		<Routes />
	)
}


// function App() {
// 	return (
// 		<React.StrictMode>
// 			{/* <StylesProvider injectFirst> */}
// 			<ThemeProvider theme={theme}>
// 				<Routes />
// 			</ThemeProvider>
// 			{/* </StylesProvider> */}
// 		</React.StrictMode>
// 	)
// }


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)


// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// )




// ReactDOM.render(
// 	<React.StrictMode>
// 		<Routes />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );