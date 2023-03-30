import { Button } from '@UI/buttons';
import { Modal } from '@UI/Modal';
import React, { useState } from 'react';

const ModalState = ({
  title,
  body,
  color: myColor,
}: {
  title: string;
  body: string;
  color: 'error' | 'success';
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      color={myColor}
      className=" text-warning-content"
      backdrop
      onClose={() => setOpen(!open)}
      isOpen={open}
    >
      <Modal.Title>{title}</Modal.Title>
      <Modal.Body>
        <p className="text-warning-content font-semibold text-center">{body}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-around mx-auto w-full">
          <Button color="primary" outline onClick={() => setOpen(!open)}>
            I understand
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalState;
