import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WaitlistForm.css';

const WaitlistForm = ({ horizontal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setNameError('');
        setEmailError('');
        setMessage('');

        // Validate fields
        let isValid = true;

        if (!name) {
            setNameError('Name is required');
            isValid = false;
        }

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true);

        try {
            // Use relative path when the backend is served from the same origin
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies if you're using sessions
                body: JSON.stringify({ name, email })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong');
            }

            const data = await response.json();
            setMessage(data.message);
            setName('');
            setEmail('');
        } catch (error) {
            setMessage(error.message);
            console.error('Submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    
    return (
        <div className={`waitlist-form-container ${horizontal ? 'horizontal' : ''}`}>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className={`form-control ${nameError ? 'is-invalid' : ''}`} 
                            placeholder="Your Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <div className="invalid-feedback">{nameError}</div>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className={`form-control ${emailError ? 'is-invalid' : ''}`} 
                            placeholder="Your Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark" disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Join The Waitlist'}
                        </button>
                    </div>
                </div>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
    );
};

export default WaitlistForm;
