import React from "react";
import Badge from "./Badge";

const StatusBadge = ({ status }) => {
  let color = "gray";
  if (["Active", "Delivered", "Success", "Completed"].includes(status)) color = "green";
  else if (["Inactive", "Pending", "Action Required", "Failed"].includes(status)) color = "red";
  else if (["In Transit", "Shipping", "Processing"].includes(status)) color = "blue";
  return <Badge color={color}>{status}</Badge>;
};

export default StatusBadge; 