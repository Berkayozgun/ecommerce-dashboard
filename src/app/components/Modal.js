import React from "react";

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 dark:bg-opacity-70">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg p-6 min-w-[320px] max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl font-bold"
        >
          &times;
        </button>
        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal; 