import { createContext } from 'react';

export type BaseProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'accent';
  backdrop?: boolean;
};

export type ColorTheme = {
  title: string;
  overlay: string;
  backdrop: string;
  button: string;
};

export type ColorMap = {
  [key: string]: ColorTheme;
};

const ModalContext = createContext({ onClose: () => {}, color: 'primary' });

export { ModalContext };
