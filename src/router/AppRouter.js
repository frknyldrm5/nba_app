import {BrowserRouter as Router, Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
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
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";
import CreateTeam from "../pages/CreateTeam";
import EditTeam from "../pages/EditTeam";

function AppRouter() {

    const {currentUser} = useContext(AuthContext);


    function LoggedInRouter() {
        let location = useLocation();


        if (currentUser) {
            return <Navigate to="/login" state={{from: location}} replace/>;
        } else {
            return <Outlet/>;
        }
    }

    return (
        <Router>
            <MyNavbar/>
            <Routes>
                <Route element={<LoggedInRouter/>}>
                    <Route path="/player-detail/:id" element={<PlayerDetail/>}/>
                </Route>
                <Route path="/create-team" element={<CreateTeam/>}/>
                <Route path="/" element={<Main />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/team-detail/:id" element={<TeamDetail/>}/>
                <Route path= "/edit-team/:id" element={<EditTeam/>}/>
            </Routes>
            <MyFooter/>
        </Router>
    );
}

export default AppRouter;