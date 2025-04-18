// src/components/ui/button.tsx
import React from 'react';

export const Button: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
