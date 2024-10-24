import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import WaitlistForm from '../../Components/WaitlistForm/WaitlistForm';
import ContactForm from '../../Components/ContactModal/ContactForm';
// import { FaGlassCheers, FaUsers, FaStar } from 'react-icons/fa';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Container fluid className="p-0 bg-dark text-light">
      <header className="py-5 text-center bg-black">
        <h1 className="display-4 mb-3" style={{ fontFamily: 'Satisfy, cursive' }}>Introducing Clink!</h1>
        <p className="lead">Personalizing your next night out</p>
      </header>

      <section className="py-5 bg-dark text-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <WaitlistForm horizontal />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">The Problem</h2>
              <p className="lead">
                Finding the perfect nightlife experience is exhausting, and public reviews are often unreliable - what does 4/5 stars even mean from a random stranger on the internet? The problem is that there's no personalized way to find nightlife that truly fits your preferences, leaving you guessing and wasting time.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <div className="px-3">
                <img src="./Images/first.png" alt="Mission" className="img-fluid w-90" style={{ maxWidth: '90%' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-black">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <div className="px-3">
                <img src="./Images/second.png" alt="Mission" className="img-fluid w-90" style={{ maxWidth: '90%' }} />
              </div>
            </Col>
            <Col md={6}>
              <h2 className="mb-4">Our Solution</h2>
              <p className="lead">
                Clink is the first nightlife platform powered by AI, offering personalized bar recommendations that adapt to your preferences. It learns from your interactions, ensuring the suggestions stay fresh and relevant. Rather than relying on public reviews, Clink connects you with your friends' posts, making it easy to find the perfect spot with trusted insights.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">Why Clink?</h2>
              <p className="lead">
                Clink is here at the perfect moment, reshaping the way we connect and discover nightlife. Just as Facebook transformed social networking, Clink is the next generation — personalizing nightlife experiences through its powerful, proprietary machine learning algorithm. By blending your preferences with those of your closest friends, Clink delivers tailored bar recommendations that feel intuitive and social, making it easier than ever to find the perfect spot.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <div className="px-3">
                <img src="./Images/third_alt.png" alt="Mission" className="img-fluid w-90" style={{ maxWidth: '90%' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark">
        <Container>
          <h2 className="text-center mb-5">Be The First On Clink</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <WaitlistForm />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-black text-center">
        <Container>
          <h2 className="mb-4">Get In Touch With The Team</h2>
          <Button variant="outline-light" size="lg" onClick={openModal}>Contact Us</Button>
        </Container>
      </section>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton className="bg-dark text-light">
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <ContactForm />
        </Modal.Body>
      </Modal>

      <footer className="py-3 bg-dark text-center">
        <p>&copy; 2024 Clink. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Home;