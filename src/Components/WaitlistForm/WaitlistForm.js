import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './WaitlistForm.css';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setNameError('');
    setEmailError('');

    // Validate fields
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.post('http://localhost:5001/waitlist', { name, email });
      setMessage(response.data); // Set success message
    } catch (error) {
      setMessage(error.response.data); // Set error message
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="mx-auto waitlist-form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            type="text" 
            className={`form-control ${nameError ? 'is-invalid' : ''}`} 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className={`form-control ${emailError ? 'is-invalid' : ''}`} 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <button type="submit" className="btn btn-dark w-100" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Join Waitlist'}
        </button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default WaitlistForm;