import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Teams from "../pages/Teams";
import Players from "../pages/Players";
import Coaches from "../pages/Coaches";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
                <Route path="/coaches" element={<Coaches />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
