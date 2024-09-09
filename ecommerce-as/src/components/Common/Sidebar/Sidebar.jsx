import React, { useState, useEffect } from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import { getMenuItems } from '../../../utils/Menu';
import "./Sidebar.css";

function Sidebar({ selectedItem, onSelectItem }) {
    
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const items = getMenuItems();
        setMenuItems(items);
    }, []); //Execute once at render

    return (
        <div className="w-64 bg-white p-5">
            <nav className="mt-10">
                {menuItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        isSelected={selectedItem === item.label}
                        onClick={() => onSelectItem(item.label)}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;