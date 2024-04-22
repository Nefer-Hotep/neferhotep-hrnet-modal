import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../Modal.css';

function DialogModal({ openModal, setOpenModal, message, className }) {
  const modalRef = useRef();

  function onBackdropClick(e) {
    if (e.target === modalRef.current) {
      setOpenModal(false);
    }
  }
  
  useEffect(() => {
    if (openModal) {
      modalRef.current?.focus();
    }
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div
      className={className || 'modal'}
      role='dialog'
      aria-modal='true'
      tabIndex='-1'
      ref={modalRef}
      onKeyDown={(e) => e.key === 'Escape' && setOpenModal(false)}
      onClick={onBackdropClick}
    >
      <div className='modal-content'>
        <button
          className='close-btn'
          onClick={() => setOpenModal(false)}
          aria-label='Close'
        >
          ×
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

DialogModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func.isRequired,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default DialogModal;
