import React from 'react';
import twMerger from '@utils/twMerger';
import { Button } from '@UI/buttons';

type ModalButtonProps = {
  children: string;
  className?: string;
  onClick?: () => void;
};

const ModalButton: React.FC<ModalButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <Button
      size="wide"
      outline
      className={twMerger('btn btn-wide mx-auto', className)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ModalButton;
