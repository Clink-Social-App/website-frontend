import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  // Close the mobile menu when a link is clicked
  const closeMenu = () => setExpanded(false);
  
  // Check if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar-custom py-3"
      style={{ background: 'linear-gradient(90deg, #1f1f1f 0%, #343a40 100%)' }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu} className="brand-logo">
          Clink
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={closeMenu}
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about-us" 
              onClick={closeMenu}
              className={isActive('/about-us') ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={closeMenu}
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/legal" 
              onClick={closeMenu}
              className={isActive('/legal') ? 'active' : ''}
            >
              Legal
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;