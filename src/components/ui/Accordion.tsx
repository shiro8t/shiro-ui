import React from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen = false }) => {
  return (
    <details open={isOpen} className="accordion">
      <summary>{title}</summary>
      <div className="accordion-content">
        {children}
      </div>
    </details>
  );
};

export default Accordion;