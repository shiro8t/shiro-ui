import React from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, placeholder = 'Select an option', variant = 'primary' }) => {
  return (
    <div className={`select-container ${variant}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;