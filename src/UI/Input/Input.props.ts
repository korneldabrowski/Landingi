export type InputProps = {
  onChange?: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

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

  size?: 'xsmall' | 'small' | 'medium' | 'large';
  loading?: boolean;
  label?: string;
  ghost?: boolean;
};
