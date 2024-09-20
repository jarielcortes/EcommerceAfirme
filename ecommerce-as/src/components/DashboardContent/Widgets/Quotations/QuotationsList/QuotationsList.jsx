import React, { useState } from 'react';
import QuotationsListItem from '../QuotationListItem/QuotationListItem';
import './QuotationsList.css';

export function QuotationsList() {
  const [currentPage, setCurrentPage] = useState(1); // Current page - Default value = 1
  const [itemsPerPage] = useState(5); // Number of items per page - Default value = 5

  const quotations = [
    { text: "Waiting for order #12345", time: "4:39 PM" },
    { text: "Customer support id#22234", time: "11:07 AM" },
    { text: "New quotation request", time: "9:15 AM" },
    { text: "Order confirmation", time: "8:30 AM" },
    { text: "Payment received", time: "7:45 AM" },
    { text: "Shipping update", time: "6:55 AM" },
    { text: "Product out of stock", time: "6:10 AM" },
    { text: "Delivery delay", time: "5:25 AM" },
    { text: "Refund request", time: "4:40 AM" },
    { text: "Order cancellation", time: "3:55 AM" },
  ];

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage; // Index of the last item in the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Index of the first item in the current page
  const currentItems = quotations.slice(indexOfFirstItem, indexOfLastItem);  // Get the items for the current page

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Inbox</h2>
      <div className="space-y-4">
        {/* Displays current items for selected page */}
        {currentItems.map((quotation, index) => (
          <QuotationsListItem
            key={index}
            text={quotation.text}
            time={quotation.time}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {/* Displays pagination buttons and sets selected page */}
        {Array.from({ length: Math.ceil(quotations.length / itemsPerPage) }, (_, index) => (
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

export default QuotationsList;