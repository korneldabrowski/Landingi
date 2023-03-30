import React from 'react';
import { Modal } from '@UI/Modal';
import { Button } from '@UI/buttons';

interface RemoveCartModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
}

const RemoveCartModal: React.FC<RemoveCartModalProps> = ({
  open,
  setOpen,
  onSubmit,
}) => {
  return (
    <Modal
      color="warning"
      className=" text-warning-content"
      backdrop
      onClose={() => setOpen(!open)}
      isOpen={open}
    >
      <Modal.Title>Remove cart</Modal.Title>
      <Modal.Body>
        <p className="text-warning-content font-semibold text-center">
          You are about to delete this cart, do you want to continue?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-around mx-auto w-full">
          <Button
            color="error"
            onClick={() => {
              onSubmit();
              setOpen(!open);
            }}
          >
            Yes, delete
          </Button>

          <Button color="primary" outline onClick={() => setOpen(!open)}>
            No, cancel
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveCartModal;
