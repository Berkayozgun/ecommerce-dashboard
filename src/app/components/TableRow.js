import React from "react";

const TableRow = ({ children, className = "" }) => (
  <tr className={`hover:bg-indigo-50 dark:hover:bg-gray-800 transition ${className}`}>{children}</tr>
);

export default TableRow; 