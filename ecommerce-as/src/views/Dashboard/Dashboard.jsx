//////////////////
// Imports
/////////////  ///

import React, { useState } from "react";
import Sidebar from '../../components/Common/Sidebar/Sidebar';
import TopHeader from '../../components/Common/TopHeader/TopHeader';
import DashboardContent from '../../components/DashboardContent/DashboardEcommerceContent/DashboardEcommerceContent';
import { Menu_Dashboard } from '../../utils/Menu';
import './Dashboard.css';

function Dashboard(){

    //////////////////
    // Hooks
    /////////////  ///

    const [selectedSidebarItem, setSelectedSidebarItem] = useState(Menu_Dashboard); //Set default selected menu item

    return (
        <div className="flex h-screen">
          <Sidebar selectedItem={selectedSidebarItem} onSelectItem={setSelectedSidebarItem} />
          <div className="flex flex-col flex-1">
          <TopHeader />
          <DashboardContent />
          </div>
        </div>
      );    
}

export default Dashboard;