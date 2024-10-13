import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clear previous status and errors
    setStatus('');
    setEmailError('');
    setMessageError('');

    // Validate email and message
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!message) {
      setMessageError('Message is required');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Make POST request to backend
    axios.post('http://localhost:5001/send-email', { email, message })
      .then(response => {
        setStatus('Email sent successfully!');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        setStatus('Failed to send email. Please try again.');
        console.error('Error:', error);
      });
  };

  return (
    <div className="container my-5 text-center contact-container">
      <h1>Contact Us</h1>
      <p>If you have any concerns or questions please do not hesitate to reach out.</p>
      <p> You can send us an email below or reach us at:</p>
      <p>Email: clinkllcnyc@gmail.com</p>
      <p>Phone: +(734) 646-3591</p>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
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
        <div className="mb-3">
          <textarea 
            className={`form-control ${messageError ? 'is-invalid' : ''}`}
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            rows="4"
          />
          {messageError && <div className="invalid-feedback">{messageError}</div>}
        </div>
        <button type="submit" className="btn btn-dark w-100">Send</button>
      </form>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default Contact;