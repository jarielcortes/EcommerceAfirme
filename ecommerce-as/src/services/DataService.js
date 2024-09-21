import salesPerformanceData from "../data/sales_performance.json";
import activeQuotationsData from "../data/active_quotations.json";
import activePoliciesData from "../data/active_policies.json";
import renewalsPerformanceData from "../data/renewal_performance.json";
import summarySalesKpiData from "../data/summary_sales_kpi.json";

const DataService = {
  getSalesPerformanceData: () => {
    return salesPerformanceData;
  },

  getActiveQuotationsData: () => {
    return activeQuotationsData;
  },

  getActivePoliciesData: () => {
    return activePoliciesData;
  },

  getRenewalsPerformanceData: () => {
    return renewalsPerformanceData;
  },

  getSummarySalesKpiData: () => {
    return summarySalesKpiData;
  },
};

export default DataService;
