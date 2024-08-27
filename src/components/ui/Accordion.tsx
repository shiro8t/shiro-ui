import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  variant?: 'primary' | 'secondary';
};

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen = false, variant = 'primary' }) => {
  return (
    <details open={isOpen} className={`accordion accordion-${variant}`}>
      <summary>{title}</summary>
      <div className="accordion-content">
        {children}
      </div>
    </details>
  );
};

export default Accordion;