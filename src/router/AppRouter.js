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
    console.log(currentUser)


    function LoggedInRouter() {
        let location = useLocation();


        if (currentUser!==null) {
            return <Outlet/>;
        } else {
            return <Navigate to="/login" state={{from: location}} replace/>;
        }
    }

    function LoggedOutRouter() {
        let location = useLocation();


        if (currentUser===null) {
            return <Outlet/>;
        } else {
            return <Navigate to="/" state={{from: location}} replace/>;
        }
    }

    return (
        <Router>
            <MyNavbar/>
            <Routes>
                <Route element={<LoggedInRouter/>}>
                    <Route path= "/edit-team/:id" element={<EditTeam/>}/>
                    <Route path="/create-team" element={<CreateTeam/>}/>
                </Route>
                <Route element={<LoggedOutRouter/>}>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route path="/" element={<Main />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/players" element={<Players />} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/team-detail/:id" element={<TeamDetail/>}/>
                <Route path="/player-detail/:id" element={<PlayerDetail/>}/>
            </Routes>
            <MyFooter/>
        </Router>
    );
}

export default AppRouter;