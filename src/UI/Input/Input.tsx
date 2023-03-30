import React from 'react';
import twMerger from '@utils/twMerger';
import { InputProps } from './Input.props';
import { colorVariants, sizeVariants } from './variants';

const Input: React.FC<InputProps> = ({
  onChange = () => {},
  value,
  placeholder = '',
  type = 'text',
  className,
  color = 'primary',
  size = 'medium',
  label = '',
  ghost = false,
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-base-300">{label}</span>
      </label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={twMerger(
          'input input-bordered bg-transparent w-full max-w-xs  ',
          color && colorVariants[color],
          size && sizeVariants[size],

          ghost && 'input-ghost',
          className
        )}
      />
    </div>
  );
};

export default Input;
