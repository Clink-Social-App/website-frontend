import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
