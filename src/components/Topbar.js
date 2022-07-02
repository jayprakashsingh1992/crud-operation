import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../css/Topbar.css";

export default function Topbar() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className='mynavlink'>React-Bootstrap</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className='mynavlink'>Home</NavLink>
                            <NavLink to="/add-user" className='mynavlink'>Add User</NavLink>
                            <NavLink to="/users" className='mynavlink'>Users</NavLink>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <NavLink to="/my-profile" className='mynavlink'>Jay Prakash Singh</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}