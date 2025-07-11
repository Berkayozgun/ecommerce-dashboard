"use client"
import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "info", duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`min-w-[220px] px-4 py-3 rounded shadow-lg text-white font-semibold flex items-center gap-2 animate-fade-in-up transition-all
              ${toast.type === "success" ? "bg-green-600 dark:bg-green-800" : ""}
              ${toast.type === "error" ? "bg-red-600 dark:bg-red-800" : ""}
              ${toast.type === "warning" ? "bg-yellow-500 text-gray-900 dark:bg-yellow-700 dark:text-yellow-200" : ""}
              ${toast.type === "info" ? "bg-indigo-600 dark:bg-indigo-800" : ""}
            `}
          >
            <span className="flex-1">{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="ml-2 text-lg font-bold">&times;</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}; 