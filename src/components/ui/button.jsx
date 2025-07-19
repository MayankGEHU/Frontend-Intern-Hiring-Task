import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2  cursor-pointer   bg-black text-white 
  rounded-md 
  hover:bg-gray-800 
  transition 
  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
