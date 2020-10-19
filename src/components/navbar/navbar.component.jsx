import React from 'react';
import './navbar.styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import icon from '../../assets/icon.png';


const CustomNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className = "navLink" href="/">
                <img
                    src={icon}
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                    alt="Fitbrit Fitness logo"
                />
                <span>FitBrit Fitness</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className = "nav mr-auto">
                    <Nav.Link className = "navLink" ><AnchorLink href="#about">About</AnchorLink></Nav.Link>
                    <Nav.Link className = "navLink" ><AnchorLink href="#program">Program</AnchorLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
