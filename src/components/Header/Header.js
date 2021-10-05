import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        backgroundColor: "darkblue",
        padding: "5px",
        borderRadius: "3px"
    }
    return (
        <div>
            <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="#" className="fw-bold">E-School Learning Point</Navbar.Brand>
                        <div className="ms-auto">
                            <Nav activeKey="/home">
                                <Nav.Item>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={activeStyle} to="/home">Home</NavLink>
                                </Nav.Item>
                                <Nav.Item className="ms-4">
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={activeStyle} to="/courses">Courses</NavLink>
                                </Nav.Item>
                                <Nav.Item className="ms-4">
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={activeStyle} to="/teachers">Teachers</NavLink>
                                </Nav.Item>
                                <Nav.Item className="ms-4">
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} activeStyle={activeStyle} to="/aboutUs">About Us</NavLink>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;