import React from "react";
import "./navigationbar.css"
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";



export default function NavigationBar() {
  return (
    <div>    
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Link to="/home" className="navBrand">Get Plant Game</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/home" className="navItem" id="navigationHover">Home</Link>
                <Link to="/about" className="navItem" id="navigationHover">About</Link>
                <Link to="/newTip" className="navItem" id="navigationHover">New Tip</Link>
              </Nav>
              <Nav>
                <Link to="/dashboard" className="navItem" id="navigationHover">Dashboard</Link>
                <Link to="/login" className="navSign" id="navigationHover">Sign In</Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
