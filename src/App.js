import './App.css';
import AppRouter from "./router/AppRouter";
import React from "react";
import NbaContextProvider from "./context/NbaContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
    return (
        <div>
            <NbaContextProvider>
                <AppRouter/>
            </NbaContextProvider>
        </div>
    );
}

export default App;