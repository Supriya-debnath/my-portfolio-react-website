import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg"  bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">
                <img
                        alt=""
                         src="https://icons.veryicon.com/png/o/system/a-set-of-icons-related-to-voluntary-reporting/self-introduction.png"
                         width="30"
                         height="30"
                        className="d-inline-block align-top"
                    />
                    Supriya
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
                </Navbar.Collapse>
                <a class="link_button" target="_blank" href="https://drive.google.com/file/d/1jzSzBVu5C37aPhILVljcU28b7LYeMt54/view?usp=sharing">RESUME</a>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;