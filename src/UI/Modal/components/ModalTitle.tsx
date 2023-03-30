import React, { useContext, ReactNode } from 'react';
import twMerger from '@utils/twMerger';
import { ModalContext } from '../Modal.props';
import { colorVariants } from '../variants';
import { Dialog } from '@headlessui/react';

type ModalTitleProps = {
  children: ReactNode;
};

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  const { color } = useContext(ModalContext);
  const classes = colorVariants[color] || colorVariants.primary;

  return (
    <Dialog.Title
      as="h2"
      className={twMerger(
        'text-2xl font-medium leading-6 text-center',
        classes.title
      )}
    >
      {children}
    </Dialog.Title>
  );
};

export default ModalTitle;
