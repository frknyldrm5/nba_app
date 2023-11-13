import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Teams from "../pages/Teams";
import Players from "../pages/Players";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import Standings from "../pages/Standings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TeamDetail from "../pages/TeamDetail";
import PlayerDetail from "../pages/PlayerDetail";

function AppRouter() {
    return (
        <Router>
            <MyNavbar/>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/team-detail/:id" element={<TeamDetail/>}/>
                <Route path="/player-detail/:id" element={<PlayerDetail/>}/>
            </Routes>
            <MyFooter/>
        </Router>
    );
}

export default AppRouter;