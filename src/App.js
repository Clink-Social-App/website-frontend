import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #f8f9fa;
    font-family: 'Montserrat', sans-serif; /* Changed font */
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400; /* Changed font weight */
  }

  .btn-primary {
    background-color: #e8b923;
    border-color: #e8b923;
  }

  .btn-primary:hover {
    background-color: #e8b923;
    border-color: #e8b923;
  }

  .text-primary {
    color: #e8b923 !important;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;