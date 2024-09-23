import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Sidebar from "../components/Common/Sidebar/Sidebar";
import {
  getMenuItems,
  getMenuIconMappingByLabel,
  Menu_Dashboard,
  Menu_Users,
} from "../utils/Menu";

// Mock the menu util
jest.mock("../utils/Menu", () => ({
  getMenuItems: jest.fn(),
  getMenuIconMappingByLabel: jest.fn(),
  Menu_Dashboard: "Dashboard",
  Menu_Users: "Users",
}));

// Suite of tests for Sidebar Component
describe("Sidebar Component", () => {
  const mockMenuItems = [
    {
      label: Menu_Dashboard,
      id: 1,
      icon: "presentation-chart-bar",
      path: "/dashboard",
    },
    { label: Menu_Users, id: 2, icon: "users", path: "/users" },
  ];

  beforeEach(() => {
    getMenuItems.mockReturnValue(mockMenuItems);
    getMenuIconMappingByLabel.mockReturnValue(() => "presentation-chart-bar");
  });

  // Test for rendering the sidebar
  test("renders sidebar correctly", () => {
    render(
      <MemoryRouter>
        <Sidebar selectedItem={null} onSelectItem={jest.fn()} />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Afirme Logo")).toBeInTheDocument();
  });

  // Test for rendering menu items
  test("renders menu items correctly", () => {
    render(
      <MemoryRouter>
        <Sidebar selectedItem={null} onSelectItem={jest.fn()} />
      </MemoryRouter>
    );
    mockMenuItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  // Test for collapse or expand functionality
  test("toggles sidebar collapse", () => {
    render(
      <MemoryRouter>
        <Sidebar selectedItem={null} onSelectItem={jest.fn()} />
      </MemoryRouter>
    );
    const toggleButton = screen.getByRole("button", {
      name: /Toggle Sidebar/i,
    });
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("title", "Colapsar");
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("title", "Expandir");
  });
});
