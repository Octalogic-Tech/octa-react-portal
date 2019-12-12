import React, { useState } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore, history } from "./redux";
import Routes from "./Routes";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";
import { fetchFirebaseConfig } from "./utils/config";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const { store, persistor } = configureStore();

firebase.initializeApp(fetchFirebaseConfig());
firebase.analytics();
firebase.performance();

const App = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: "dark",
    },
  });

  const toggleTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    const background = newPaletteType === "light" ? "#fafafa" : "#212121";
    setTheme({
      palette: {
        type: newPaletteType,
        background: {
          default: background,
        },
      },
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={muiTheme}>
            <CssBaseline>
              <Routes toggleTheme={toggleTheme} currentTheme={theme} />
            </CssBaseline>
          </MuiThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
