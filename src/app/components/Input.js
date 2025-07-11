import React from "react";

const Input = ({ label, type = "text", className = "", ...props }) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">{label}</label>}
    <input
      type={type}
      className={`w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${className}`}
      {...props}
    />
  </div>
);

export default Input; 