import React from 'react';
import {Nav,Navbar} from "react-bootstrap";


function MyNavbar(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src="/images/nba-logo_.jpeg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="NBALogo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#players">Players</Nav.Link>
                    <Nav.Link href="#teams">Teams</Nav.Link>
                    <Nav.Link href="#coahces">Coaches</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;