import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    
  }

  .navbar-brand js-scroll-trigger navbar-brand {
    color:  black;
    display: block;
  }


  a, .navbar-nav .nav-link {
    color:  black;
    display: block;
    text-align: center;
    text-decoration: none;
    

    &:hover {
      color: red;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fixed-top">
      <Navbar.Brand href="/" className="navbar-brand js-scroll-trigger"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar text-uppercase ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="news">News</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
