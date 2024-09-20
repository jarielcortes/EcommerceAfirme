//////////////////
// Imports
/////////////  ///

import { useState, useEffect } from 'react';
import QuotationsListItem from '../QuotationListItem/QuotationListItem';
import './QuotationsList.css';

export function QuotationsList({data}) {

  //////////////////
  // Hooks
  /////////////  ///

  const [currentPage, setCurrentPage] = useState(1); // Current page - Default value = 1
  const [itemsPerPage] = useState(5); // Number of items per page - Default value = 5
  const [quotations, setQuotations] = useState(Array.isArray(data) ? data : []); // Check if array is present, otherwise set to empty array
  
  useEffect(() => {
    setQuotations(Array.isArray(data) ? data : []); // Check if array is present, otherwise set to empty array
  }, [data]);

  //////////////////
  // Functions
  /////////////  ///

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage; // Index of the last item in the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Index of the first item in the current page
  const currentItems = quotations.slice(indexOfFirstItem, indexOfLastItem);  // Get the items for the current page

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3">COTIZACIONES</h2>
      <div className="space-y-1">
        {/* Displays current items for selected page */}
        {currentItems.map((quotation, index) => (
          <div key={index} className="hover:bg-gray-100 p-1 rounded-lg">
            <QuotationsListItem
              quotation={quotation.quotation_number}
              client={quotation.client}
              status={quotation.status}
            />
          </div>
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