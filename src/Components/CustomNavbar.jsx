import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../styles/Nav.css'; // Make sure the path is correct for your CSS file

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar expand="md" fixed="top" className="navbar-custom">
            <Container>
                <Navbar.Brand href="Logo">SIRISHA GUGULOTHU</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>
                    <Nav className="me-auto">
                        <Nav.Link href="#content">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Skills" id="skills-dropdown">
                        <Nav.Link href="#skills">Skills
                            <NavDropdown.Item href="#skills">Html</NavDropdown.Item>
                            <NavDropdown.Item href="#skills">Css</NavDropdown.Item>
                            <NavDropdown.Item href="#skills">Javascript</NavDropdown.Item>
                            <NavDropdown.Item href="#skills">React.Js</NavDropdown.Item>
                            <NavDropdown.Item href="#skills">Bootstrap</NavDropdown.Item>
                            <NavDropdown.Item href="#skills">Core Java</NavDropdown.Item>
                            </Nav.Link>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default CustomNavbar;

