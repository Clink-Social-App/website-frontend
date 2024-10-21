// src/components/ContactForm.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset errors
        setEmailError('');
        setMessageError('');

        // Validation
        let isValid = true;
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        }
        if (!message) {
            setMessageError('Message is required');
            isValid = false;
        }

        if (!isValid) return;

        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus(data.message);
            setEmail('');
            setMessage('');
        } catch (error) {
            setStatus(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-dark w-100" disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
                {status && <p className="mt-3">{status}</p>}
            </form>
        </div>
    );
};

export default ContactForm;