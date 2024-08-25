import React from 'react';

type CardProps = {
  title: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'text';
};

const Card: React.FC<CardProps> = ({ title, children, variant = "primary" }) => {
  return (
    <div className={`card ${variant}`}>
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;