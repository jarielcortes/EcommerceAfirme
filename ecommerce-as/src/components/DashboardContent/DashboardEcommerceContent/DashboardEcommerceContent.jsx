import React from 'react';
import DashboardCard from '../Widgets/DashboardCard/DashboardCard';
import QuotationsList from '../Widgets/Quotations/QuotationsList/QuotationsList';
import PoliciesList from '../Widgets/Policies/PoliciesList/PoliciesList';
import SalesChart from '../Widgets/SalesChart/SalesChart';
import './DashboardEcommerceContent.css';

function DashboardEcommerceContent() {
    return (
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DashboardCard title="Shipped orders" value="67" color="primary" />
            <DashboardCard title="Pending orders" value="09" color="secondary" />
            <DashboardCard title="New orders" value="35" color="accent" />
          </div>
          <QuotationsList />
          <PoliciesList />
        </div>
        <SalesChart />
      </div>
    );
  }

  export default DashboardEcommerceContent;