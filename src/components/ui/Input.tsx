import React, { ChangeEvent } from 'react';

type InputProps = {
  size?: 'small' | 'medium' | 'large';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  size = 'medium',
  onChange,
  value,
  icon,
  type = 'text',
  placeholder = ''
}) => {
  return (
    <div className={`input-container ${size}`}>
      {icon && <div className="input-icon">{icon}</div>}
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;