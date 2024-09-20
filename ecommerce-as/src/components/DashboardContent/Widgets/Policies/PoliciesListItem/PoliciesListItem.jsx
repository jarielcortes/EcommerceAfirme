import React from 'react';
import { formatCurrency } from '../../../../../utils/Format';
import './PoliciesListItem.css';

function PoliciesListItem({ policy, client, amount }) {
  
    return (
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          <span className="font-bold text-gray-500">{policy}</span>
          <span className="ml-4">{client}</span>
        </p>
        <span className="text-gray-500 text-sm">{formatCurrency(amount)}</span>
      </div>
    );
  }

  export default PoliciesListItem;