import React from 'react';
import './DashboardCard.css';

export function DashboardCard({ title, value, color }) {
    return (
      <div className={`p-6 bg-${color} rounded-lg shadow-md`}>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-4xl font-bold text-white">{value}</p>
      </div>
    );
  }

  export default DashboardCard;