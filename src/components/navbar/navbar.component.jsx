import React from 'react';
import './navbar.styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import icon from '../../assets/icon.png';


const CustomNavbar = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg">
            <Navbar.Brand className = "navBrand" href="/">
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
                    <Nav.Link className = "navLink" ><AnchorLink href="#welcome">Home</AnchorLink></Nav.Link>
                    <Nav.Link className = "navLink" ><AnchorLink href="#credibility">Credibility</AnchorLink></Nav.Link>
                    <Nav.Link className = "navLink" ><AnchorLink href="#programs">Programs</AnchorLink></Nav.Link>
                    <Nav.Link className = "navLink" ><AnchorLink href="#about">About</AnchorLink></Nav.Link>
                    <Button className = "navButton" variant="light"><AnchorLink href="#contact">Contact</AnchorLink></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
