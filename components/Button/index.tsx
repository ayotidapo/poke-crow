import React from 'react';
import './button.css';

interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | undefined) => void;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
}
const Button: React.FC<Props> = (props) => {
  const { children = '', className, ...rest } = props;
  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
