// Bu dosya sadece animasyon ve stil için, asıl logic ToastContext.js'de
import React from "react";

const Toast = ({ message, type = "info", onClose }) => {
  return (
    <div
      className={`min-w-[220px] px-4 py-3 rounded shadow-lg text-white font-semibold flex items-center gap-2 animate-fade-in-up transition-all
        ${type === "success" ? "bg-green-600 dark:bg-green-800" : ""}
        ${type === "error" ? "bg-red-600 dark:bg-red-800" : ""}
        ${type === "warning" ? "bg-yellow-500 text-gray-900 dark:bg-yellow-700 dark:text-yellow-200" : ""}
        ${type === "info" ? "bg-indigo-600 dark:bg-indigo-800" : ""}
      `}
    >
      <span className="flex-1">{message}</span>
      <button onClick={onClose} className="ml-2 text-lg font-bold">&times;</button>
    </div>
  );
};

export default Toast; 