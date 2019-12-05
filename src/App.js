import React, { useState } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore, history } from "./redux";
import Routes from "./Routes";
import * as firebase from "firebase/app";
import "firebase/analytics";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const { store, persistor } = configureStore();


const firebaseConfig = {
	apiKey: "AIzaSyBsMfgsHNyypJnmf96tT0OLo8UMFY-ZMNE",
	authDomain: "octalogic-portfolio-dev.firebaseapp.com",
	databaseURL: "https://octalogic-portfolio-dev.firebaseio.com",
	projectId: "octalogic-portfolio-dev",
	storageBucket: "octalogic-portfolio-dev.appspot.com",
	messagingSenderId: "972342187770",
	appId: "1:972342187770:web:bf3ff2e8961d4459359b43",
	measurementId: "G-BGS6FKEZTX"
  };

firebase.initializeApp(firebaseConfig);

const App = () => {
	const [theme, setTheme] = useState({
		palette: {
			type: "dark"
		}
	});

	const toggleTheme = () => {
		let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
		const background = newPaletteType === "light" ? "#fafafa" : "#212121";
		setTheme({
			palette: {
				type: newPaletteType,
				background: {
					default: background
				}
			}
		});
	};

	const muiTheme = createMuiTheme(theme);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConnectedRouter history={history}>
					<MuiThemeProvider theme={muiTheme}>
						<CssBaseline>
							<Routes
								toggleTheme={toggleTheme}
								currentTheme={theme}
							/>
						</CssBaseline>
					</MuiThemeProvider>
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	);
};

export default App;
