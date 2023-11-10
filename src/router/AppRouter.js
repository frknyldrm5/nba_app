import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Teams from "../pages/Teams";
import Players from "../pages/Players";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
