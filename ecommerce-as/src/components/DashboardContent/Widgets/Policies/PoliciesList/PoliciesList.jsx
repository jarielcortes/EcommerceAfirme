import React from 'react';
import PoliciesListItem from '../PoliciesListItem/PoliciesListItem';
import './PoliciesList.css';

export function PoliciesList() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <PoliciesListItem text="Confirm order update" status="urgent" />
            <PoliciesListItem text="Finish shipping update" status="urgent" />
            <PoliciesListItem text="Create new order" status="new" />
            <PoliciesListItem text="Update payment report" status="default" />
          </div>
        </div>
      );
  }

  export default PoliciesList;