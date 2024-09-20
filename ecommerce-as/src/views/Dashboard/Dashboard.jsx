//////////////////
// Imports
/////////////  ///

import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import TopHeader from '../../components/Common/TopHeader/TopHeader';
import DashboardContent from '../../components/DashboardContent/DashboardEcommerceContent/DashboardEcommerceContent';
import RegisterUser from "../../components/DashboardContent/RegisterUser/RegisterUser";
import { Default_Route, getMenuItemByPath } from '../../utils/Menu';
import './Dashboard.css';

function Dashboard(){

    //////////////////
    // Hooks
    /////////////  ///

    const [selectedSidebarItem, setSelectedSidebarItem] = useState(); // Set default selected menu item

    const location = useLocation(); // Hook to get the current location

    // Set the selectedSidebarItem based on the current URL path
    useEffect(() => {
      const currentPath = location.pathname;
      const menuItem = getMenuItemByPath(currentPath);
      if (menuItem) {
        setSelectedSidebarItem(menuItem.label);
      }
    }, [location]);

    function handleClickSidebarItem(label) {
      setSelectedSidebarItem(label);
    }

    return (
      <div className="flex h-screen">
      <Sidebar selectedItem={selectedSidebarItem} onSelectItem={handleClickSidebarItem} />
      <div className="flex flex-col flex-1">
        <TopHeader />
        {/* Defines routing - navigates to default route on root or if path does not exist*/}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/users" element={<RegisterUser />} />
          <Route path="*" element={<Navigate to={Default_Route} />} />
        </Routes>
      </div>
      </div>
    );
}

export default Dashboard;