import "./App.css";

import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import AppContext from "./store";
import appReducer, { initialState } from "./store/app-reducer";

const theme = createMuiTheme({
    typography: {
        fontFamily: ["Poppins"].join(","),
    },
});

function App() {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export default App;
