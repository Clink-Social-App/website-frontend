import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import WaitlistForm from '../WaitlistForm/WaitlistForm';
import ContactModal from '../ContactModal/ContactModal';
import './Home.css';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10} xl={8}>
              <h1 className="hero-title">Discover Your Perfect Night Out</h1>
              <p className="hero-subtitle">Clink is an AI-powered platform that personalizes your nightlife experience</p>
              <Button 
                variant="primary" 
                size="lg" 
                className="cta-button my-4"
                onClick={() => {
                  document.getElementById('waitlist-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Our Waitlist
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="content-section bg-dark">
        <Container>
          <Row className="align-items-center section-row">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="content-block">
                <h2>The Problem</h2>
                <p className="lead">
                  Finding the perfect nightlife experience is exhausting, and public reviews are often unreliable.
                </p>
                <ul className="feature-list">
                  <li>Random reviews don't match your personal taste</li>
                  <li>Hours wasted researching venues only to be disappointed</li>
                  <li>Difficulty finding places that match your vibe and preferences</li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image-container">
                <img 
                  src="./Images/first.png" 
                  alt="Frustrated person looking at reviews" 
                  className="img-fluid rounded shadow-lg" 
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="content-section bg-black">
        <Container>
          <Row className="align-items-center section-row flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div className="image-container">
                <img 
                  src="./Images/second.png" 
                  alt="Clink app solution" 
                  className="img-fluid rounded shadow-lg" 
                />
              </div>
            </Col>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="content-block">
                <h2>Our Solution</h2>
                <p className="lead">
                  Clink is the first nightlife platform powered by AI, offering personalized bar recommendations that adapt to your preferences.
                </p>
                <ul className="feature-list">
                  <li>AI-driven recommendations based on your preferences</li>
                  <li>See where your friends actually go, not just public reviews</li>
                  <li>Discover hidden gems that match your unique taste</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Clink Section */}
      <section className="content-section bg-dark">
        <Container>
          <Row className="align-items-center section-row">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="content-block">
                <h2>Why Clink?</h2>
                <p className="lead">
                  Clink reshapes how we connect and discover nightlife through personalized experiences.
                </p>
                <ul className="feature-list">
                  <li>Proprietary machine learning algorithm tailored to you</li>
                  <li>Social recommendations from people you trust</li>
                  <li>Constantly improving based on your feedback</li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image-container">
                <img 
                  src="./Images/third_alt.png" 
                  alt="Clink app interface" 
                  className="img-fluid rounded shadow-lg" 
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist-section" className="waitlist-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="mb-4">Be The First On Clink</h2>
              <p className="lead mb-5">Join our waitlist to get early access to the Clink experience</p>
              <WaitlistForm />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section bg-black text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <h2 className="mb-4">Questions or Feedback?</h2>
              <p className="lead mb-4">Our team is ready to assist you</p>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="contact-button"
                onClick={openModal}
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Modal */}
      <ContactModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default Home;