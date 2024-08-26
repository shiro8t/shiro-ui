import React from 'react';

type KeyboardProps = {
  children: React.ReactNode;
};

const Keyboard: React.FC<KeyboardProps> = ({ children }) => {
  return <kbd className="keyboard">{children}</kbd>;
};

export default Keyboard;