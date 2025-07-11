import React from "react";
import Button from "./Button";

const ActionButtons = ({ onEdit, onDelete, onDetails }) => (
  <div className="flex gap-2">
    <Button variant="secondary" onClick={onEdit}>Edit</Button>
    <Button variant="danger" onClick={onDelete}>Delete</Button>
    <Button variant="secondary" onClick={onDetails}>Details</Button>
  </div>
);

export default ActionButtons; 