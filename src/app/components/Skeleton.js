import React from "react";

const Skeleton = ({ width = "100%", height = 16, circle = false, className = "" }) => (
  <div
    className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${circle ? "rounded-full" : "rounded"} ${className}`}
    style={{ width, height, minWidth: width, minHeight: height }}
  />
);

export default Skeleton; 