//////////////////
// Imports
/////////////  ///

import React from 'react';
import { Link } from "react-router-dom";
import { getMenuIconMappingByLabel } from '../../../utils/Menu';
import './SidebarItem.css';

function SidebarItem({ icon, label, isSelected, onClick, isCollapsed, path }) {

    //////////////////
    // Functions
    /////////////  ///

    // Retrieve the icon component based on the icon prop
    const IconComponent = getMenuIconMappingByLabel(icon);

    // Show icon and label if the sidebar is expanded, show icon only otherwise
    return (
      <Link
      to={path}
      className={`flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}
      onClick={onClick}
      >
      {IconComponent && <IconComponent className="w-6 h-6" title={label} />}
      {!isCollapsed && (
        <span className={isSelected ? 'font-bold' : ''}>{label}</span>
      )}
      </Link>
    );
    }      
  export default SidebarItem;