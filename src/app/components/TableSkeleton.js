import React from "react";
import Skeleton from "./Skeleton";

const TableSkeleton = ({ rows = 5, columns = 6 }) => (
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <tbody>
      {[...Array(rows)].map((_, rowIdx) => (
        <tr key={rowIdx}>
          {[...Array(columns)].map((_, colIdx) => (
            <td key={colIdx} className="px-4 py-3">
              <Skeleton height={20} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableSkeleton; 