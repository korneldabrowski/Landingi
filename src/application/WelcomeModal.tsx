import { Modal } from '@UI/Modal';
import React, { useState } from 'react';

const WelcomeModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Modal color="primary" onClose={() => setOpen(!open)} isOpen={open}>
      <Modal.Title>Hello!</Modal.Title>
      <Modal.Body>
        <p className="text-base-300 text-center my-2">
          Welcome to the application.
        </p>
        <p className="text-base-300 ">
          Please, keep in mind that the application uses dummyJSON API, which
          does not interfere with it's servers, so adding & deleting{' '}
          <span className="font-bold">WILL NOT</span>
          result in actual deletion or insertion.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Button onClick={() => setOpen(!open)}>Close</Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
