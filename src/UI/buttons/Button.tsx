import React from 'react';
import twMerger from '@utils/twMerger';
import { ButtonProps } from './Button.props';
import { colorVariants, sizeVariants, shapeVariants } from './variants';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  color = 'primary',
  size = 'medium',
  shape,
  outline = false,
  glass = false,
  disabled = false,
  loading = false,
  ghost = false,
  link = false,
}) => {
  return (
    <button
      className={twMerger(
        'btn normal-case  ',
        color && colorVariants[color],
        size && sizeVariants[size],
        outline && 'btn-outline',
        glass && 'glass',
        shape && shapeVariants[shape],
        disabled && 'disabled',
        loading && 'loading',
        ghost && 'btn-ghost',
        link && 'btn-link ',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
