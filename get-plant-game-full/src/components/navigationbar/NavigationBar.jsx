import React from "react";
import "./navigationbar.css"
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";



export default function NavigationBar({ username, isLoggedIn, onLogout }) {
  return (
    <div>    
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          <Link to="/" className="navBrand">Get Plant Game</Link>
          {/* { isLoggedIn &&
          <h5 className="loggedInBadge ml-auto mr-4" >
            <span className="badge badge-pill badge-success" >
                Logged in { username }
            </span>
          </h5> } */}
          { isLoggedIn &&
          <button className="btn btn-outline-secondary ml-auto mr-4" type="button" onClick={onLogout} >
            Logout
          </button> }
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

              </Nav>
              
              <Nav>
                <Link to="/home" className="navItem" id="navigationHover">Home</Link>
                <Link to="/about" className="navItem" id="navigationHover">About</Link>
                <Link to="/newTip" className="navItem" id="navigationHover">New Tip</Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
