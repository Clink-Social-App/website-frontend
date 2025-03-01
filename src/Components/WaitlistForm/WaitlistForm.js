import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import './WaitlistForm.css';

const WaitlistForm = ({ horizontal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [position, setPosition] = useState(null);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset states
        setErrors({});
        setMessage('');
        setMessageType('');
        setPosition(null);

        // Validate fields
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

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

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setMessage(data.message);
            setMessageType('success');
            
            // Extract position from message if available
            const posMatch = data.message.match(/#(\d+)/);
            if (posMatch && posMatch[1]) {
                setPosition(parseInt(posMatch[1]));
            }
            
            setName('');
            setEmail('');
            setSubmitted(true);
        } catch (error) {
            setMessage(error.message || 'An error occurred. Please try again later.');
            setMessageType('danger');
            console.error('Submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderSuccessMessage = () => {
        if (!position) return message;
        
        if (message.includes("already on the waitlist")) {
            return (
                <>
                    <strong>You're already on our waitlist!</strong>
                    <p>Your position: #{position}</p>
                    <p>We'll notify you when Clink is ready to launch.</p>
                </>
            );
        } else {
            return (
                <>
                    <strong>Thank you for joining our waitlist!</strong>
                    <p>Your position: #{position}</p>
                    <p>We'll notify you when Clink is ready to launch.</p>
                </>
            );
        }
    };

    return (
        <div className={`waitlist-form-container ${horizontal ? 'horizontal' : ''}`}>
            {submitted ? (
                <div className="text-center py-4">
                    <Alert variant="success" className="waitlist-success">
                        <h4>Thank You!</h4>
                        {renderSuccessMessage()}
                        <Button 
                            variant="outline-success" 
                            onClick={() => setSubmitted(false)}
                            className="mt-3"
                        >
                            Join Again
                        </Button>
                    </Alert>
                </div>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <div className={`form-row ${horizontal ? 'flex-row' : 'flex-column'}`}>
                        <Form.Group className="form-group">
                            <Form.Control
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                isInvalid={!!errors.name}
                                aria-label="Name"
                                disabled={isLoading}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group className="form-group">
                            <Form.Control
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isInvalid={!!errors.email}
                                aria-label="Email"
                                disabled={isLoading}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group className="form-group">
                            <Button 
                                type="submit" 
                                variant="primary" 
                                className="btn-waitlist w-100"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                            className="me-2"
                                        />
                                        Processing...
                                    </>
                                ) : (
                                    'Join The Waitlist'
                                )}
                            </Button>
                        </Form.Group>
                    </div>
                    
                    {message && !submitted && (
                        <Alert 
                            variant={messageType || 'info'} 
                            className="mt-3 text-center"
                        >
                            {message}
                        </Alert>
                    )}
                </Form>
            )}
        </div>
    );
};

export default WaitlistForm;