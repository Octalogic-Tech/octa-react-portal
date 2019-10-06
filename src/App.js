import React, { useState } from "react";
import Routes from "./Routes";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
	const [theme, setTheme] = useState({
		palette: {
			type: "light"
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
		<MuiThemeProvider theme={muiTheme}>
			<CssBaseline>
				<Routes toggleTheme={toggleTheme} />
			</CssBaseline>
		</MuiThemeProvider>
	);
};

export default App;
