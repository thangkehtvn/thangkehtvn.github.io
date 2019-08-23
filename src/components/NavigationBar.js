import React from 'react'
import Logo from './Logo'
import { Button,Nav, Navbar } from 'react-bootstrap'
import './header.css'

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Nav.Link href="/" className="logo"><Logo /></Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-menu">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/work" >Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/skill">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Button className="btnLogin"><a href="/login">Sign In</a></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
