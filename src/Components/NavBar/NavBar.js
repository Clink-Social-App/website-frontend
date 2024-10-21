import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(90deg, #1f1f1f 0%, #343a40 100%)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Clink</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/legal">Legal</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;