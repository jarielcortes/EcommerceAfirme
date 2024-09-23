//////////////////
// Imports
/////////////  ///

import React from "react";
import "./QuotationsListItem.css";

function QuotationsListItem({ quotation, client, status }) {
  // Changes the color of the badge according to the status
  let colorClassBadge;
  switch (status) {
    case "Cancelada":
      colorClassBadge = "badge-warning";
      break;
    case "Emitida":
      colorClassBadge = "badge-success";
      break;
    case "Activa":
      colorClassBadge = "badge-info";
      break;
    default:
      colorClassBadge = "badge-info";
  }

  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-600">
        <span className="font-bold text-gray-500">{quotation}</span>
        <span className="ml-4">{client}</span>
      </p>
      <span className={`badge ${colorClassBadge} !text-white`}>
        {status ? status.toUpperCase() : ""}
      </span>
    </div>
  );
}

export default QuotationsListItem;
