import './App.css';
import AppRouter from "./router/AppRouter";
import React from "react";
import NbaContextProvider from "./context/NbaContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import AuthContextProvider from "./context/AuthContext";




function App() {
    return (
        <div>
            <AuthContextProvider>
                <NbaContextProvider>
                    <AppRouter/>
                </NbaContextProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;