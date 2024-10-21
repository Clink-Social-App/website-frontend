import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';

const ContactModal = ({ showModal, closeModal }) => {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
