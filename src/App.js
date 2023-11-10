import './App.css';
import AppRouter from "./router/AppRouter";
import React from "react";



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
