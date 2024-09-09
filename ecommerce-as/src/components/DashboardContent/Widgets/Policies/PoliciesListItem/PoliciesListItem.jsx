import React from 'react';
import './PoliciesListItem.css';

function PoliciesListItem({ text, status }) {
    let colorClassBadge;

    switch (status) {
      case "urgent":
        colorClassBadge = "badge-error";
        break;
      case "new":
        colorClassBadge = "badge-success";
        break;
      default:
        colorClassBadge = "badge-success";
    }
  
    return (
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{text}</p>
        <span className={`badge ${colorClassBadge}`}>{status.toUpperCase()}</span>
      </div>
    );
  }

  export default PoliciesListItem;