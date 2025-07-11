import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base =
    "px-4 py-2 rounded font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-800 dark:text-yellow-300 dark:hover:bg-indigo-900 dark:focus:ring-yellow-300",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    danger:
      "bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-400 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-700 dark:focus:ring-red-600",
    success:
      "bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-400 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-700 dark:focus:ring-green-600",
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 