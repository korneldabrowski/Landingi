import React from 'react';

type ModalBodyProps = {
  children: React.ReactNode;
};

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className="my-4">{children}</div>
);

export default ModalBody;
