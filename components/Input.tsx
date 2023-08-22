import React, { ChangeEvent, useState } from "react";

interface IInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
}

const Input: React.FC<IInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // Call the provided setter function
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1">
        {label}
        <input
          className="border-violet-400 border-2 p-2 rounded w-full"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Input;
