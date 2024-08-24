import React, { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
  shape?: 'square' | 'rounded' | 'pill';
  size?: 'small' | 'medium' | 'large';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  shape = 'pill',
  size = 'medium',
  leftIcon,
  rightIcon,
  children,
  onClick,
}) => {
  const className = `btn ${variant} ${shape} ${size}`;

  return (
    <button className={className} onClick={onClick}>
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
};

export default Button;