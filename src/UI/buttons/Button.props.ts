export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'accent'
    | 'none';
  outline?: boolean;
  glass?: boolean;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'wide';
  disabled?: boolean;
  loading?: boolean;
  shape?: 'square' | 'round';
  ghost?: boolean;
  link?: boolean;
};
