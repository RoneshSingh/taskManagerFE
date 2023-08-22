import React from "react";

interface IButtonProps {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
