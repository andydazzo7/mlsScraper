import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './mls.png'
export default function Naver(){
    return (
        <Navbar sticky='top' style={{backgroundImage:'linear-gradient(to right, #df231a, #001f5b)'}}bg="primary" variant="dark">
            <Navbar.Brand href="/">
            <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            MLS Newsroom
            </Navbar.Brand>
            <Nav>
                <Nav.Item>
                <Nav.Link href="/">Top Articles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/#list">Team Articles</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}