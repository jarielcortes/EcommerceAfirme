import React from 'react';
import './TopHeader.css';

function TopHeader() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div>
        <h1 className="text-2xl font-semibold">Total Ventas: $45,365.00</h1>
        <p className="text-sm text-gray-500"></p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Sergio Alberto Mendez</span>
        <div className="avatar">
            <div className="w-10 h-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;