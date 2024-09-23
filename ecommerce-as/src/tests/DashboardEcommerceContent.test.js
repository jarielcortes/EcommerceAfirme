import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DashboardEcommerceContent from "../components/DashboardContent/DashboardEcommerceContent/DashboardEcommerceContent";
import DataService from "../services/DataService";

// Mock DataService methods
jest.mock("../services/DataService", () => ({
  getSalesPerformanceData: jest.fn(),
  getActiveQuotationsData: jest.fn(),
  getActivePoliciesData: jest.fn(),
  getRenewalsPerformanceData: jest.fn(),
  getSummarySalesKpiData: jest.fn(),
}));

describe("DashboardEcommerceContent", () => {
  beforeEach(() => {
    // Mock values for the DataService methods
    DataService.getSalesPerformanceData.mockReturnValue([]);
    DataService.getActiveQuotationsData.mockReturnValue([]);
    DataService.getActivePoliciesData.mockReturnValue([]);
    DataService.getRenewalsPerformanceData.mockReturnValue([]);
    DataService.getSummarySalesKpiData.mockResolvedValue({});
  });

  // Test for rendering the DashboardEcommerceContent
  test("renders the DashboardEcommerceContent correctly", () => {
    render(<DashboardEcommerceContent />);
    expect(
      screen.getByTestId("dashboard-ecommerce-content")
    ).toBeInTheDocument();
  });

  // Test for rendering the DashboardCard components
  test("renders the DashboardCard components correctly", () => {
    render(<DashboardEcommerceContent />);
    expect(screen.getByText("Cotizaciones Vigentes")).toBeInTheDocument();
    expect(screen.getByText("Polizas Vigentes")).toBeInTheDocument();
    expect(screen.getByText("Polizas Canceladas")).toBeInTheDocument();
  });

  // Test for rendering the quotations list
  test("renders the QuotationsList correctly", async () => {
    render(<DashboardEcommerceContent />);
    await waitFor(() => {
      screen.getByTestId("quotations-list-widget");
    });
  });

  // Test for rendering the policies list
  test("renders the PoliciesList correctly", async () => {
    render(<DashboardEcommerceContent />);
    await waitFor(() => {
      screen.getByTestId("policies-list-widget");
    });
  });

  // Test for rendering the sales chart
  test("renders the SalesChart correctly", async () => {
    render(<DashboardEcommerceContent />);
    await waitFor(() => {
      screen.getByTestId("sales-chart-widget");
    });
  });

  // Test for rendering the renewals chart
  test("renders the RenewalsChart correctly", async () => {
    render(<DashboardEcommerceContent />);
    await waitFor(() => {
      screen.getByTestId("renewals-chart-widget");
    });
  });

  // Test for validating data sources
  test("consumes data sources correctly", async () => {
    render(<DashboardEcommerceContent />);

    await waitFor(() => {
      expect(DataService.getSalesPerformanceData).toHaveBeenCalled();
      expect(DataService.getActiveQuotationsData).toHaveBeenCalled();
      expect(DataService.getActivePoliciesData).toHaveBeenCalled();
      expect(DataService.getRenewalsPerformanceData).toHaveBeenCalled();
      expect(DataService.getSummarySalesKpiData).toHaveBeenCalled();
    });
  });
});
