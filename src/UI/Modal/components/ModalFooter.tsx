import React from 'react';

type ModalFooterProps = {
  children: React.ReactNode;
};

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div className="mt-4 flex mx-auto">{children}</div>
);

export default ModalFooter;
