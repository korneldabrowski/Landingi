import React, { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import twMerger from '@utils/twMerger';
import { BaseProps, ColorMap, ModalContext } from './Modal.props';
import { colorVariants } from './variants';
import { ModalButton, ModalTitle, ModalBody, ModalFooter } from './components';

type ModalProps = {
  children: ReactNode;
} & BaseProps & { color?: keyof ColorMap };

interface ModalType extends React.FC<ModalProps> {
  Button: React.FC<{
    children: string;
    className?: string;
    onClick?: any;
  }>;

  Title: React.FC<{ children: ReactNode }>;
  Body: React.FC<{ children: ReactNode }>;
  Footer: React.FC<{ children: ReactNode }>;
}

// Because of accessibility concerns, Headless UI's Dialog component actually uses a Portal
// under-the-hood. This way we can provide features like unobstructed event handling and making the
// rest of your application inert. So, when using our Dialog, there's no need to use a Portal yourself!
// We've already taken care of it. //documentation https://headlessui.dev/react/dialog

const Modal: ModalType = ({
  children,
  onClose,
  isOpen,
  className,
  color: propsColor = 'primary',
  backdrop = false,
}) => {
  const classes = colorVariants[propsColor] || colorVariants.primary;

  return (
    <ModalContext.Provider value={{ onClose, color: propsColor }}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 text-primary-content"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={twMerger('fixed inset-0', classes.overlay)} />
          </Transition.Child>

          {backdrop && (
            <div
              className={twMerger('fixed inset-0', classes.backdrop)}
              aria-hidden="true"
            />
          )}

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 "
              >
                <Dialog.Panel
                  className={twMerger(
                    'w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all',

                    className
                  )}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </ModalContext.Provider>
  );
};

Modal.Button = ModalButton;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
