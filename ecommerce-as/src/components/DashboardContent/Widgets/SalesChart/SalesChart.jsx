import React from 'react';
import './SalesChart.css';

export function SalesChart() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Today's trends</h2>
        <div className="h-40 w-full bg-gray-100 rounded-lg"></div>
      </div>
    );
  }

  export default SalesChart;