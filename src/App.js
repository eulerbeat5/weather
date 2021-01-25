import "./App.css";

import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router/routes";

import appReducer, { initialState } from "./store/app-reducer";

export const AppContext = React.createContext({ state: initialState });

function App() {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
