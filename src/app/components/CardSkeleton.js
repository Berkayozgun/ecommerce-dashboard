import React from "react";
import Skeleton from "./Skeleton";

const CardSkeleton = ({ count = 1 }) => (
  <div className="flex gap-6 flex-wrap">
    {[...Array(count)].map((_, idx) => (
      <div key={idx} className="flex flex-col flex-1 min-w-[220px] max-w-xs shadow-2xl h-36 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 justify-between gap-4">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton width={80} height={16} className="mb-2" />
            <Skeleton width={60} height={28} />
          </div>
          <Skeleton width={40} height={40} circle />
        </div>
        <Skeleton width={120} height={14} />
      </div>
    ))}
  </div>
);

export default CardSkeleton; 