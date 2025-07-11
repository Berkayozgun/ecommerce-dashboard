import React from "react";

const Badge = ({ children, color = "gray", className = "" }) => {
  const colors = {
    gray: "bg-gray-100 text-gray-500 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
    green: "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
    red: "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
    blue: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700",
    indigo: "bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-700",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold shadow-md border mt-2 transition ${colors[color] || colors.gray} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge; 