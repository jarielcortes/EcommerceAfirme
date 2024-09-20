import React, { useState } from 'react';
import PoliciesListItem from '../PoliciesListItem/PoliciesListItem';
import './PoliciesList.css';

export function PoliciesList() {
    const [currentPage, setCurrentPage] = useState(1); // Current page - Default value = 1
    const [itemsPerPage] = useState(5); // Number of items per page - Default value = 5

    const policies = [
      { text: "Confirm order update", status: "urgent" },
      { text: "Finish shipping update", status: "urgent" },
      { text: "Create new order", status: "new" },
      { text: "Update payment report", status: "default" }
    ];

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage; // Index of the last item in the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Index of the first item in the current page
    const currentItems = policies.slice(indexOfFirstItem, indexOfLastItem);  // Get the items for the current page

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* Displays current items for selected page */}
            {currentItems.map((policy, index) => (
              <PoliciesListItem
                key={index}
                text={policy.text}
                status={policy.status}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4">
        {/* Displays pagination buttons and sets selected page */}
        {Array.from({ length: Math.ceil(policies.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        </div>
        </div>
      );
  }

  export default PoliciesList;