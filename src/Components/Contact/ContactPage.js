import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactForm from '../ContactModal/ContactForm';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={10} lg={8}>
            <div className="text-center mb-5">
              <h1 className="display-4 mb-3">Get In Touch</h1>
              <p className="lead">
                Have questions about Clink? We're here to help! Fill out the form below and our team will get back to you soon.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="contact-card h-100">
              <div className="contact-header">
                <h2>Contact Information</h2>
                <p>Reach out to us directly or send us a message</p>
              </div>
              <div className="contact-body">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <p className="mb-0">clinkllcnyc@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaPhone />
                    </div>
                    <div>
                      <h5 className="mb-1">Phone</h5>
                      <p className="mb-0">(734) 646-3591</p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="mb-1">Location</h5>
                      <p className="mb-0">New York, NY</p>
                    </div>
                  </div>
                </div>
                
                {/* <div className="mt-4">
                  <h5>Follow Us</h5>
                  <div className="d-flex mt-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link me-3">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link me-3">
                      <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-facebook fa-2x"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </Card>
          </Col>
          
          <Col lg={7}>
            <Card className="contact-card">
              <div className="contact-header">
                <h2>Send Us a Message</h2>
                <p>We'd love to hear from you</p>
              </div>
              <div className="contact-body">
                <ContactForm />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;