import React from 'react';
import { useState, useEffect } from 'react';
import DashboardCard from '../Widgets/DashboardCard/DashboardCard';
import QuotationsList from '../Widgets/Quotations/QuotationsList/QuotationsList';
import PoliciesList from '../Widgets/Policies/PoliciesList/PoliciesList';
import SalesChart from '../Widgets/SalesChart/SalesChart';
import RenewalsChart from '../Widgets/RenewalsChart/RenewalsChart';
import DataService from '../../../services/DataService';
import './DashboardEcommerceContent.css';

function DashboardEcommerceContent() {

    const [salesData, setSalesData] = useState([]);
    const [quotationsData, setQuotationsData] = useState([]);
    const [policiesData, setPoliciesData] = useState([]);
    const [renewalsData, setRenewalsData] = useState([]);
    const [summarySalesData, setSummarySalesData] = useState({});

    useEffect(() => {

        //Retrieve sales performance data
        const itemsSales = DataService.getSalesPerformanceData();
        setSalesData(itemsSales);

        // Retrieve active quotations data
        const itemsQuotations = DataService.getActiveQuotationsData();
        setQuotationsData(itemsQuotations);

        // Retrieve active policies data
        const itemsPolicies = DataService.getActivePoliciesData();
        setPoliciesData(itemsPolicies);

        // Retrieve renewals performance data
        const itemsRenewals = DataService.getRenewalsPerformanceData();
        setRenewalsData(itemsRenewals);

        // Retrieve summary sales KPI data
        const itemsSummarySales = DataService.getSummarySalesKpiData();
        setSummarySalesData(itemsSummarySales);
        
    }, []); //Execute once at render

    return (
      <div className="p-6 grid grid-cols-1 2xl:grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Cotizaciones Vigentes" value={summarySalesData.active_quotations} color="info" />
        <DashboardCard title="Polizas Vigentes" value={summarySalesData.active_policies} color="success" />
        <DashboardCard title="Polizas Canceladas" value={summarySalesData.canceled_policies} color="error" />
        </div>
        <QuotationsList data={quotationsData} />
        <PoliciesList data={policiesData} />
      </div>
      <div className="space-y-6">
        <SalesChart data={salesData} />
        <RenewalsChart data={renewalsData} />
      </div>
      </div>
    );
  }

  export default DashboardEcommerceContent;