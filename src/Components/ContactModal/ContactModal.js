import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';
import './Contact.css';

const ContactModal = ({ showModal, closeModal }) => {
  return (
    <Modal 
      show={showModal} 
      onHide={closeModal}
      centered
      size="lg"
      backdrop="static"
      className="contact-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Get In Touch With Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted mb-4">
          Have questions or feedback about Clink? Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <ContactForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;