import React from 'react';
import QuotationsListItem from '../QuotationListItem/QuotationListItem';
import './QuotationsList.css';

export function QuotationsList() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Inbox</h2>
        <div className="space-y-4">
          <QuotationsListItem text="Waiting for order #12345" time="4:39 PM" />
          <QuotationsListItem text="Customer support id#22234" time="11:07 AM" />
        </div>
      </div>
    );
  }

  export default QuotationsList;