import React from 'react';
import './QuotationsListItem.css';

function QuotationsListItem({ text, time }) {
    return (
      <div className="flex justify-between items-center">
        <p>{text}</p>
        <span className="text-gray-500 text-sm">{time}</span>
      </div>
    );
  }

  export default QuotationsListItem;