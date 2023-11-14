import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

function MyNavbar() {
    const { currentUser, logOut } = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Navbar.Brand href="/">
                <img
                    src="/images/nba-logo_.jpeg"
                    width="70"
                    height="60"
                    className="d-inline-block align-top mr-3 ml-3 mb-2 mt-2 rounded border border-white shadow p-1 bg-white rounded "
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
                    <Nav.Link href="/create-team">Create Team</Nav.Link>
                    {currentUser ? (
                        <NavDropdown title={currentUser.displayName} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => logOut()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
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
