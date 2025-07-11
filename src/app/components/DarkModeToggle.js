"use client"
import React from "react";
import { useTheme } from "./ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const handleClick = () => {
    console.log("Dark mode toggle clicked");
    toggleTheme();
  };
  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full border bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title={theme === "dark" ? "Açık moda geç" : "Koyu moda geç"}
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Güneş">🌞</span>
      ) : (
        <span role="img" aria-label="Ay">🌙</span>
      )}
    </button>
  );
};

export default DarkModeToggle; 