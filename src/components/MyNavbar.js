import React, {useContext} from 'react';
import {Nav,Navbar} from "react-bootstrap";
import {AuthContext} from "../context/AuthContext";


function MyNavbar() {
    const {currentUser,logOut} = useContext(AuthContext);
    console.log(currentUser);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src="/images/nba-logo_.jpeg"
                    width="70"
                    height="60"
                    className="d-inline-block align-top"
                    alt="NBALogo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/players">Players</Nav.Link>
                    <Nav.Link href="/teams">Teams</Nav.Link>
                    <Nav.Link href="/standings">Standings</Nav.Link>
                    {currentUser ? (
                        <>
                            <Nav.Link href="/create-team">Create Team</Nav.Link>
                            <Nav.Link href="/profile">{currentUser.displayName}</Nav.Link>
                            <Nav.Link onClick={()=>logOut()}>Logout</Nav.Link>
                        </>
                    ):(
                        <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default MyNavbar;