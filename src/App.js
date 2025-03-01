import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Legal from './Components/Legal/Legal';
import ContactPage from './Components/Contact/ContactPage';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #f8f9fa;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .btn-primary {
    background-color: #e8b923;
    border-color: #e8b923;
  }

  .btn-primary:hover {
    background-color: #d6aa1e;
    border-color: #d6aa1e;
  }

  .text-primary {
    color: #e8b923 !important;
  }
  
  /* Mobile Responsiveness Improvements */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    .lead {
      font-size: 1rem;
    }
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add a 404 route */}
        <Route path="*" element={<div className="container text-center py-5"><h1>Page Not Found</h1><p>The page you're looking for doesn't exist.</p></div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;