import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen = false, className = '' }) => {
  return (
    <details open={isOpen} className={`accordion ${className}`}>
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