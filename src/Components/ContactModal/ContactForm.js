import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ message: '', type: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset errors and status
        setErrors({});
        setStatus({ message: '', type: '' });

        // Validate form
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
            // Simulate API request (replace with actual API when backend is ready)
            setTimeout(() => {
                setStatus({
                    message: 'Thank you for your message! We will get back to you soon.',
                    type: 'success'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setLoading(false);
                setSubmitted(true);
            }, 1500);

            // Uncomment when backend is ready
            /*
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus({
                message: data.message || 'Thank you for your message! We will get back to you soon.',
                type: 'success'
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setSubmitted(true);
            */
        } catch (error) {
            setStatus({
                message: error.message || 'An error occurred. Please try again later.',
                type: 'danger'
            });
            console.error('Submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form-container">
            {submitted ? (
                <div className="text-center py-4">
                    <Alert variant="success" className="contact-success">
                        <h4>Message Sent!</h4>
                        <p>{status.message}</p>
                        <Button 
                            variant="outline-success" 
                            onClick={() => setSubmitted(false)}
                            className="mt-3"
                        >
                            Send Another Message
                        </Button>
                    </Alert>
                </div>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            disabled={loading}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            disabled={loading}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            name="subject"
                            placeholder="Subject (Optional)"
                            value={formData.subject}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            as="textarea"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            isInvalid={!!errors.message}
                            rows="4"
                            disabled={loading}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="btn-contact w-100"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Sending...
                            </>
                        ) : 'Send Message'}
                    </Button>

                    {status.message && !submitted && (
                        <Alert 
                            variant={status.type || 'info'} 
                            className="mt-3"
                        >
                            {status.message}
                        </Alert>
                    )}
                </Form>
            )}
        </div>
    );
};

export default ContactForm;