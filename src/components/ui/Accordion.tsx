import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen = false, variant = 'primary', className = '' }) => {
  return (
    <details open={isOpen} className={`accordion accordion-${variant} ${className}`}>
      <summary className="accordion-summary">
        {title}
        <span className="accordion-arrow" />
      </summary>
      <div className="accordion-content">
        {children}
      </div>
    </details>
  );
};

export default Accordion;